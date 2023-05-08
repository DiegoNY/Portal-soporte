import { SECRET_KEY } from "@/config/config";
import { genSalt, hash } from "bcrypt";
import { jwtVerify } from "jose";

const SALT_ROUNDS = 10;

export const hashPasword = async (password: string) => {
  const salt = await genSalt(SALT_ROUNDS);
  return hash(password, salt);
};

export const VerifyToken = async (token: any) => {
  if (undefined) {
    console.log({ token });
    return;
  }

  const { payload } = await jwtVerify(
    token,
    new TextEncoder().encode(SECRET_KEY)
  );

  return {
    payload,
  };
};
