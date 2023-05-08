import prisma from "@/libs/prisma";
import { login } from "../types/login.type";
import { SignJWT } from "jose";
import { SECRET_KEY } from "@/config/config";
export class UserService {
  async login({ user, password }: login) {
    try {
      if (user == undefined || password == undefined) {
        throw Error("Contraseña o usuario incorrecto : 401");
      }
      const usuario = await prisma.usuarios.findFirstOrThrow({
        where: {
          usuario_incidencia: user,
          contrasena: password,
        },
      });

      if (usuario.usuario_incidencia) {
        const token = await new SignJWT({
          id: usuario.id_usuario,
          type: usuario.tipo_acceso,
          name: usuario.nombres,
          dni: usuario.dni_usuario,
        })
          .setProtectedHeader({ alg: "HS256" })
          .setIssuedAt()
          .setExpirationTime("2h")
          .sign(new TextEncoder().encode(SECRET_KEY));
        return { user, password, token };
      }
    } catch (error) {
      throw Error("Contraseña o usuario incorrecto : 401");
    }
  }
}
