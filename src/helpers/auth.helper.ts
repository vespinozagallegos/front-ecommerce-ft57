import { ILoginProps, IRegisterProps } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function register(userData: IRegisterProps) {
    try {
        const response = await fetch(`${API_URL}/users/register`, { 
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        if(response.ok) {
            alert("¡Usuario Registrado con éxito!")
            // console.log(response);        
            return response.json();
        } else {
            throw new Error("El usuario ya existe")
        }

    } catch (error: any) {
        alert("Ha fallado el registro de usuario")
        throw new Error(error)
    }
};


export async function login(userData: ILoginProps) {
    try {
        const response = await fetch(`${API_URL}/users/login`, { 
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        if(response.ok) {
            alert("¡Haz Iniciado Sesión con éxito!")
            console.log(response);        
            return response.json();
        } else {
            throw new Error("Error al Iniciar Sesión, inténtalo de nuevo")
        }

    } catch (error: any) {
        alert("Error al Iniciar Sesión, inténtalo de nuevo")
        throw new Error(error)
    }
};