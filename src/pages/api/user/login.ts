import { UserService } from "@/server/services/user.service";
import type { NextApiRequest, NextApiResponse } from "next";

const service = new UserService()

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "POST") {

    service.login(req.body)
    res.status(200).send(req.body);
  }
}
