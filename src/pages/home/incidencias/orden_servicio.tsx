import { LayoutPrincipal } from "@/components/LayoutPrincipal";
import { InfoOrder } from "@/components/incidencias/ordenServicio/InfoOrder";
import AddMaterial from "@/components/incidencias/ordenServicio/UsedMaterial/AddMaterial";
import { HeaderOrder } from "@/components/incidencias/ordenServicio/headerOrder";
import CardRegistroIncidencias from "@/components/incidencias/registro/CardRegistro";
import { VerifyToken } from "@/helpers/auth";
import { RootState } from "@/libs/redux/store/store";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

const orden_servicio = ({ user }: any) => {
  const service_order = useSelector((state: RootState) => state.service_order);
  const router = useRouter();
  const { numero } = router.query;

  return (
    <LayoutPrincipal user={user}>
      <CardRegistroIncidencias>
        <div className="col-span-full ">
          <HeaderOrder />
          <InfoOrder />
        </div>
      </CardRegistroIncidencias>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {service_order.view_modal_used_mterials &&
        createPortal(<AddMaterial />, document.body)}
    </LayoutPrincipal>
  );
};

export default orden_servicio;

export const getServerSideProps: GetServerSideProps = async (req) => {
  const { token } = req.req.cookies;
  const user_info = await VerifyToken(token);
  const user = user_info?.payload;
  return {
    props: { user },
  };
};
