import { Calendar } from "@/components/Turno/Calendar";
import { CardTurno } from "@/components/Turno/CardTurno";
import { FormEditShift } from "@/components/Turno/FormEditShift";
import { SearchTurno } from "@/components/Turno/SearchTurno";
import { RootState } from "@/libs/redux/store/store";
import { shallowEqual, useSelector } from "react-redux";
import { LayoutPrincipal } from "@/components/LayoutPrincipal";
import { GetServerSideProps } from "next";
import { VerifyToken } from "@/helpers/auth";
import { useDispatch } from "react-redux";
import { SetUser } from "@/libs/redux/feature/UserSlice.feature";

const turno = ({ user }: any) => {
  const { view_actions_shift } = useSelector(
    (state: RootState) => state.shift,
    shallowEqual
  );

  return (
    <LayoutPrincipal user={user}>
      <CardTurno>
        {view_actions_shift ? <FormEditShift /> : <SearchTurno />}
        <Calendar />
        <br />
      </CardTurno>
    </LayoutPrincipal>
  );
};

export default turno;

export const getServerSideProps: GetServerSideProps = async (req) => {
  const { token } = req.req.cookies;
  const user_info = await VerifyToken(token);
  const user = user_info?.payload;
  return {
    props: { user },
  };
};
