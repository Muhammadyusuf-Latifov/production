"use client";
import { useRouter } from "next/navigation";
import { memo, useEffect, useState } from "react";

const SignIn = () => {
  const [tokenCheck, setTokenCheck] = useState<null | boolean>(null);
  const routes = useRouter();

  useEffect(() => {
    const Foo = async () => {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
console.log(data?.data?.id);

        if (res.ok && data?.data?.id) {
          
          setTokenCheck(true);
        } else {
          setTokenCheck(false);
        }
      } catch {
        setTokenCheck(false);
      }
    };
    Foo();
  }, []);

  if (tokenCheck === null) {
    return <><p>Sign In</p></> 
  }

  return (
    <div>
      {tokenCheck ? (
        <button onClick={() => routes.push("/profile")}>profile</button>
      ) : (
        <button
          onClick={() =>
            routes.push("https://project-two-olive.vercel.app//login")
          }
        >
          sign in
        </button>
      )}
    </div>
  );
};

export default memo(SignIn);
