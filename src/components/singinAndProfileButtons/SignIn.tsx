"use client";
import { useRouter } from "next/navigation";
import { memo, useEffect, useState } from "react";
import { LuCircleUser } from "react-icons/lu";
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
    return (
      <div>
        <LuCircleUser />
      </div>
    );
  }

  return (
    <div>
      {tokenCheck ? (
        <div onClick={() => routes.push("/profile")}>
          <LuCircleUser />
        </div>
      ) : (
        <div
          onClick={() =>
            window.open("https://project-two-olive.vercel.app/login", "_blank")
          }
        >
          <LuCircleUser />
        </div>
      )}
    </div>
  );
};

export default memo(SignIn);
