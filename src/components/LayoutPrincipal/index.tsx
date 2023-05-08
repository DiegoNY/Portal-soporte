import Header from "../Header/Header";
import Layout from "../Layout";
import Main from "../Main";
import { useDispatch } from "react-redux";
import { SetUser } from "@/libs/redux/feature/UserSlice.feature";

export const LayoutPrincipal = ({
  children,
  user,
}: {
  children: React.ReactNode;
  user?: any;
}) => {
  console.log({ user, desde: "layout" });
  const dispatch = useDispatch();
  dispatch(SetUser(user));
  return (
    <Layout>
      <Header />
      <Main>{children}</Main>
    </Layout>
  );
};
