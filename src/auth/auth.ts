/**Obtener tocken de session storage o validarlo en login */
import { GetToken } from "./SessionStorage";

export const GetSession = () => {

    return new Promise((resolve, reject) => {

        const { token, error } = GetToken();


        if (!!error) {
            reject({ error: "error al obtener token" })
        }

        resolve({ token: token });

    })
}
