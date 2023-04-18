import { Calendar } from "@/components/Turno/Calendar";
import { CardTurno } from "@/components/Turno/CardTurno"
import { FormEditShift } from "@/components/Turno/FormEditShift";
import { SearchTurno } from "@/components/Turno/SearchTurno";
import prisma from "@/libs/prisma";
import { RootState } from "@/libs/redux/store/store";
import { GetServerSideProps } from "next";
import { shallowEqual, useSelector } from "react-redux";

const turno = ({ data }: any) => {
    const { view_edit_shift } = useSelector((state: RootState) => state.shift, shallowEqual)

    return (
        <CardTurno>
            {view_edit_shift ? <FormEditShift /> : <SearchTurno />}
            <Calendar />
        </CardTurno>
    )
}

export default turno;


// export const getServerSideProps: GetServerSideProps = async () => {
//     const data = await prisma.empresa.findMany({
//         where: { id: 2 }
//     });

//     return {
//         props: { data }
//     }
// }