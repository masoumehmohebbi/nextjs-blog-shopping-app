import { useRouter } from "next/router";

const useMoveBack = () => {
  const router = useRouter();
  return () => router.back();
};
export default useMoveBack;
