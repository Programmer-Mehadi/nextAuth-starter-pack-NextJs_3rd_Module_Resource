import { Button } from "antd";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3 style={{
          textAlign: 'center'
        }}>LOGIN</h3>
        <div className={styles.social_icons}>
          <GoogleOutlined onClick={() => {
            signIn("google", {
              callbackUrl: '/'
            });

          }} />
          <GithubOutlined onClick={() => {
            signIn("github", {
              callbackUrl: '/'
            });

          }} />
        </div>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <p htmlFor="">Your Email</p>
          <input type="email" {...register("email", { required: true })} />
          {errors.email && <p style={{
            fontSize: '14px',
            color: 'red'
          }}>Email is required</p>}
          <p htmlFor="" style={{
            paddingTop: '10px'
          }}>Your Password</p>
          <input type="password"  {...register("password", { required: true })} />
          {errors.password && <p style={{
            fontSize: '14px',
            color: 'red'
          }}>Password is required</p>}
          <Button type="primary" htmlType="submit" style={{
            width: '100%'
          }}>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
