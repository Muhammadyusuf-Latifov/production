"use client";
import { memo, useEffect, useState } from "react";

const VerifySection = ({ user }: { user: string }) => {
  const [error, setError] = useState<null | string>(null);
  useEffect(() => {
    fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: user,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("error");
        }
        window.location.href = "/profile";
      })
      .catch(() => {
        setError("Try again");
      });
  }, []);

  return error ? (
    <div className=" h-screen flex items-center justify-center">
      <div className="flex items-center flex-col">
        <p className="text-[27px] mb-[12px] text-[crimson]">
          Something went wrong
        </p>
        <button
          onClick={() => open("https://project-two-olive.vercel.app/login")}
          className="px-[40px] py-[10px] text-white rounded-[20px] bg-[#fc2c2c]"
        >
          {error}
        </button>
      </div>
    </div>
  ) : (
    <div className="Verify flex items-center justify-center h-screen">
      <div>
        <h2 className="text-[5rem]">Verifing...</h2>
      </div>
    </div>
  );
};

export default memo(VerifySection);
