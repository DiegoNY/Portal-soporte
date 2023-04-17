import { Calendar } from "@/components/Turno/Calendar";
import { CardTurno } from "@/components/Turno/CardTurno"
import { SearchTurno } from "@/components/Turno/SearchTurno";
import prisma from "@/libs/prisma";
import { GetServerSideProps } from "next";

const turno = ({ data }: any) => {
    console.log(data);
    return (
        <CardTurno>
            <SearchTurno />
            <Calendar />
        </CardTurno>
    )
}

export default turno;


export const getServerSideProps: GetServerSideProps = async () => {
    const data = await prisma.empresa.findMany({
        where: { id: 2 }
    });

    return {
        props: { data }
    }
}