import jwt_decode from "jwt-decode";
import CryptoJS from 'crypto-js';
// import { User } from 'type/user';
import { ObtnerTiempoSesion } from './ObtenerTiempoSesion';
import { secret_key } from "@/config/config";

const nameToken = "u_t";

export const GetToken = () => {
    let token: string | null = '';
    let error_m: boolean = false;

    try {
        const token_user = window.localStorage.getItem(nameToken) || "";
        /**Token en la version 2 mas seguro "" 🦧 */
        const bytes = CryptoJS.AES.decrypt(token_user, secret_key);
        const token_user_decrypt = bytes.toString(CryptoJS.enc.Utf8);

        const user: any = jwt_decode(token_user_decrypt);

        const tiempo = new Date()

        const tiempoExpiracion = new Date(ObtnerTiempoSesion(user.exp));

        if (tiempoExpiracion < tiempo) {
            token = '';
        } else {
            token = token_user_decrypt || '';
        }

    } catch (error) {
        console.log(error);
        error_m = true;
    }
    return {
        token: token,
        error: error_m
    }
}

export const SaveToken = (token: string) => {
    let error_m: boolean = false;

    try {

        const ciphertext = CryptoJS.AES.encrypt(token, secret_key).toString();
        window.localStorage.setItem(nameToken, ciphertext);

    } catch (error) {
        console.log(error);
        error_m = true;
    }

    return {
        error: error_m,
    }
}
