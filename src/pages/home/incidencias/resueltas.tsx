import { LayoutPrincipal } from "@/components/LayoutPrincipal";
import { VerifyToken } from "@/helpers/auth";
import { GetServerSideProps } from "next";

const Resueltas = ({ user }: any) => {
  return (
    <LayoutPrincipal user={user}>
      <div>resueltas {JSON.stringify(user)}</div>
    </LayoutPrincipal>
  );
};
export default Resueltas;

export const getServerSideProps: GetServerSideProps = async (req) => {
  const { token } = req.req.cookies;
  const user_info = await VerifyToken(token);
  const user = user_info?.payload;
  return {
    props: { user },
  };
};
