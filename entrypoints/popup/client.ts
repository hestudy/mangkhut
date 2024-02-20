import { graphql } from "@shadcn/gql";
import dayjs from "dayjs";
import request, {
  GraphQLClient,
  RequestMiddleware,
  Variables,
} from "graphql-request";

export const endpoint = "https://directus.hestudy.cn";

const Auth_refresh = graphql(`
  mutation Auth_refresh($refreshToken: String) {
    auth_refresh(refresh_token: $refreshToken) {
      access_token
      expires
      refresh_token
    }
  }
`);

const refreshRequestSingleton = (() => {
  let loading = false;

  const init = () => {
    return {
      request: async (refreshToken: string) => {
        if (loading) {
          return;
        }
        loading = true;
        const res = await request(`${endpoint}/graphql/system`, Auth_refresh, {
          refreshToken,
        });
        if (res?.auth_refresh) {
          await storage.setItem("local:token", res.auth_refresh.access_token);
          await storage.setItem(
            "local:expires",
            dayjs().add(res.auth_refresh.expires, "milliseconds").toISOString()
          );
          await storage.setItem(
            "local:refresh",
            res.auth_refresh.refresh_token
          );
        }
        loading = false;
        return res;
      },
    };
  };

  let instance: ReturnType<typeof init> | null = null;

  return () => {
    if (instance === null) {
      instance = init();
    }
    return instance;
  };
})();

const requestMIddleware: RequestMiddleware<Variables> = async (config) => {
  let token = await storage.getItem("local:token");
  const expires = (await storage.getItem("local:expires")) as string;
  const refresh = (await storage.getItem("local:refresh")) as string;
  if (expires && refresh) {
    if (dayjs(expires).isBefore(dayjs().add(10, "minutes"))) {
      await refreshRequestSingleton().request(refresh);
      token = await storage.getItem("local:token");
    }
  }

  if (token) {
    config.headers!["Authorization"] = `Bearer ${token}`;
  }
  return config;
};

const systemClient = new GraphQLClient(`${endpoint}/graphql/system`, {
  requestMiddleware: requestMIddleware,
});

export const client = new GraphQLClient(`${endpoint}/graphql`, {
  requestMiddleware: requestMIddleware,
});

export default systemClient;
