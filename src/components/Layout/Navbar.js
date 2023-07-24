import { Layout, Menu, Button } from "antd";
const { Header } = Layout;
import Link from "next/link";
import { signOut, useSession } from 'next-auth/react';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/firebase/firebase.auth";
const Navbar = () => {
  const { data: session } = useSession()
  const [user, loading, error] = useAuthState(auth);
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="demo-logo">
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "25px",
          }}
        >
          NEXT AUTH
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{
          width: "20%",
          display: "flex",
          fontSize: "20px",
          justifyContent: "space-between",
        }}
      >
        <Link
          style={{ textDecoration: "none", color: "white" }}
          href="/profile"
        >
          <items>Profile</items>
        </Link>
        {
          !session?.user?.email && !user ? <Link style={{ textDecoration: "none", color: "white" }} href="/login">
            <items>Login</items>
          </Link> :
            <items>
              <Button type="primary" danger onClick={() => signOut()}>
                Logout
              </Button>
            </items>
        }
      </Menu>
    </Header>
  );
};
export default Navbar;
