import Head from "next/head";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/firebase/firebase.auth";
const HomePage = () => {
  const { data: session } = useSession();
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

      }}>
        <h1 style={{ textAlign: "center", marginTop: "10%" }}>Welcome To Next Auth Home Page</h1>
        <h2 style={{ textAlign: "center", marginTop: "10px" }}>{session?.user?.name}</h2>
        {
          user && <h2 style={{ textAlign: "center", marginTop: "10px" }}>{user?.email}</h2>
        }
        {
          session?.user?.image && (
            <Image src={session?.user?.image
            } width={100} height={100} alt="" style={{
              margin: "10px auto",
              borderRadius: "50%",
            }} />
          )
        }
        
      </div>
    </div>
  );
};

export default HomePage;
