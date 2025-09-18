import { NextResponse } from "next/server";

export const GET = () => {
  const data = [
      {
        id:1,
      name: "Muhammadyusuf",
    },
  ];
  return NextResponse.json(data);
};
