import { ScheduleService } from "@/server/services/schedule.service";
import type { NextApiRequest, NextApiResponse } from "next";

const Service = new ScheduleService();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "POST") {
    res.status(200).send(req.body);
  }

  if (req.method == "GET") {
    Service.findAll()
      .then((rta) => {
        res.status(200).send({
          error: false,
          data: rta,
        });
      })
      .catch((error) => console.log(error));
  }
}
