import { graphql } from "@shadcn/gql";
import { useRequest } from "ahooks";
import { Outlet, useNavigate } from "react-router-dom";
import systemClient from "../client";
import { useSetAtom } from "jotai";
import userAtom from "../atoms/user";
import { Loading } from "@shadcn/components/Loading";

const Users_me = graphql(`
  query Users_me {
    users_me {
      title
      avatar {
        id
      }
    }
  }
`);

const AuthLayout = () => {
  const navigate = useNavigate();
  const setUser = useSetAtom(userAtom);

  const { loading, data } = useRequest(async () => {
    const token = await storage.getItem("local:token");

    if (!token) {
      navigate("/login");
      return;
    }
    const res = await systemClient.request(Users_me).catch(async () => {
      await storage.removeItems([
        "local:token",
        "local:expires",
        "local:refresh",
      ]);
      navigate("/login");
    });
    if (res?.users_me) {
      setUser(res.users_me);
      return res.users_me;
    }
  });

  if (loading) {
    return (
      <div className="w-[400px] h-[400px] flex justify-center items-center">
        <Loading></Loading>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="w-[400px] h-[400px] flex justify-center items-center">
        跳转登录中
      </div>
    );
  }

  return <Outlet></Outlet>;
};

export default AuthLayout;
