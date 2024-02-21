import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { graphql } from "@/src/gql";
import systemClient from "@/src/client";
import { useRequest } from "ahooks";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import z from "zod";
import logo from "~/assets/logo.png";
import dayjs from "dayjs";

const Auth_login = graphql(`
  mutation Auth_login($email: String!, $password: String!) {
    auth_login(email: $email, password: $password) {
      refresh_token
      expires
      access_token
    }
  }
`);

const schema = z.object({
  email: z.string().email({ message: "请输入正确的邮箱地址" }),
  password: z.string().min(8, { message: "密码长度至少为8位" }),
});

const Login = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { run, loading } = useRequest(
    async () => {
      const res = await systemClient.request(Auth_login, form.getValues());
      if (res.auth_login) {
        await storage.setItem("local:token", res.auth_login.access_token);
        await storage.setItem("local:refresh", res.auth_login.refresh_token);
        await storage.setItem(
          "local:expires",
          dayjs().add(res.auth_login.expires, "milliseconds").toISOString()
        );
        navigate("/");
      }
    },
    {
      manual: true,
    }
  );

  return (
    <div className="w-[400px] h-[600px] flex flex-col justify-center px-10">
      <div>
        <img src={logo} className="w-[100px] h-[100px] mx-auto mb-4"></img>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(run)}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>邮箱</FormLabel>
                    <FormControl>
                      <Input {...field}></Input>
                    </FormControl>
                    <FormDescription>请输入你的邮箱地址</FormDescription>
                    <FormMessage></FormMessage>
                  </FormItem>
                );
              }}
            ></FormField>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>密码</FormLabel>
                    <FormControl>
                      <Input {...field} type="password"></Input>
                    </FormControl>
                    <FormDescription>请输入你的密码</FormDescription>
                    <FormMessage></FormMessage>
                  </FormItem>
                );
              }}
            ></FormField>
          </div>
          <Button className="w-full mt-10" type="submit" disabled={loading}>
            {loading ? "登录中" : "登录"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Login;
