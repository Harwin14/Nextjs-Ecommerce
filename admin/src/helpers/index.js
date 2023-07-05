import { signIn } from "next-auth/react";
// import { LoginUserParams } from "../types";
// import { InputErros } from "../types/error";

export const getErrorMsg = (key ,errors) => {
    if(errors.find(err => err.hasOwnProperty(key) !== undefined)) {
        const errorObj = errors.find(err => err.hasOwnProperty(key))
        return errorObj && errorObj[key]
    }
}

// export const loginUser = async ({email, password} ) => {
//     const res = await signIn("credentials", {
//         redirect: false,
//         email,
//         password
//     })

//     return res
// }