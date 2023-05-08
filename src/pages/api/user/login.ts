import { UserService } from "@/server/services/user.service";
import { ValidateStatus } from "@/utils/ValidateErrors";
import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

const service = new UserService();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    try {
      const user = await service.login(req.body);
      const token = user?.token || "";

      const serialized = serialize("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV == "production",
        sameSite: "strict",
        path: "/",
      });

      res.setHeader("Set-Cookie", serialized);
      res.status(200).send(user);
    } catch (error: ErrorEvent | any) {
      let error_status = ValidateStatus(error);
      res.status(error_status).send({
        error: true,
        message: error,
      });
    }
  }
}
