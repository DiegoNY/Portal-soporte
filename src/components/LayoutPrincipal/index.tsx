import Header from "../Header/Header";
import Layout from "../Layout";
import Main from "../Main";

export const LayoutPrincipal = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Layout>
      <Header />
      <Main>{children}</Main>
    </Layout>
  );
};
