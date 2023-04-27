import prisma from "@/libs/prisma";
import { cronograma } from "@prisma/client";

export class ScheduleService {
  async findAll() {
    try {
      const Schedules = prisma.cronograma.findMany({
        where: {
          deleted: 0,
        },
      });
      return Schedules;
    } catch (error) {
      console.log(error);
    }
  }
  async create(data: cronograma) {
    try {
      const rta = prisma.cronograma.create({
        data: data,
      });

      return rta;
    } catch (error) {
      console.log(error);
    }
  }
}
