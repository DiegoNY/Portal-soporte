import { Calendar } from "@/components/Turno/Calendar";
import { CardTurno } from "@/components/Turno/CardTurno"
import { FormEditShift } from "@/components/Turno/FormEditShift";
import { SearchTurno } from "@/components/Turno/SearchTurno";
import { RootState } from "@/libs/redux/store/store";
import { shallowEqual, useSelector } from "react-redux";

const turno = () => {
    const { view_actions_shift } = useSelector((state: RootState) => state.shift, shallowEqual)

    return (
        <CardTurno>
            {view_actions_shift ? <FormEditShift /> : <SearchTurno />}
            <Calendar />
            <br />
        </CardTurno>
    )
}

export default turno;


// export const getServerSideProps: GetServerSideProps = async () => {
//     const data1 = await prisma.areas.findFirst({
//         where: {
//             id_area: 1
//         }
//     })
//     const data =JSON.stringify(data1)
//     return {
//         props: { data }
//     }
// }