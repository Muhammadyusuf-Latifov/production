import VerifySection from "@/components/verifySection/VerifySection";
import { memo } from "react";

const Verify = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) => {
  const { q } = await searchParams;
  console.log(q);
  const user = atob(q);
  console.log(user);

  return (
    <div>
      <VerifySection user={user} />
    </div>
  );
};

export default memo(Verify);
