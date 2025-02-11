"use client";
 
import { useAuth } from "@/context/AuthContext";
import { login } from "@/helpers/auth.helper";
import { validateLoginForm } from "@/helpers/validate";
import { ILoginProps, ILoginPropsErrors } from "@/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie"

const LoginView = () => {
    // context
    const { setUserData } = useAuth();
    // Redirección
    const router = useRouter();

    const initialState = {
        email: "",
        password: ""
    }

    // Estado para datos de Login (despues sacar el initialState)
    const [logDataUser, setLogDataUser] = useState<ILoginProps>(initialState);
    
    // Estado para VALIDACIONES
    const [errors, setErrors] = useState<ILoginPropsErrors>(initialState)    
    
    // Funcioladidad de button Login
    const handleOnSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            // se guarda la peticion al back (de toda la info del form)
            // y se guarda el token a traves del context
            const response = await login(logDataUser)

            if(response && response.token) {
                setUserData({ token: response.token, user: response.user });
                Cookies.set("userData", JSON.stringify({token: response.token, user: response.user}))
            } else {
                console.error("Error: no se recibió un token válido");
            }
        } catch (error) {
            console.error("Error en el login:", error);
        }
        router.push("/")
    }
    
    // Agregar funcionalidad a los inputs
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // del obj evento. la prop target recibe los valores del input
        const { name, value } = event.target;
        // y facilita el guardado en los estados para
        // Actualizar Estado
        setLogDataUser({
            ...logDataUser,
            [name]: value
        });         
    }

    // Validación en tiempo real
    useEffect(() => {
        const errors = validateLoginForm(logDataUser)
        setErrors(errors)
    // Cada vez que detecte cambio en logDataUser (cuando el usuario tipea) ejecuta const errors y se guardan actualizando el estado de error (setError)
    }, [logDataUser])

    return (
        <div className="flex justify-center
                        mt-8">

            <form onSubmit={handleOnSubmit} 
                className="m-3 md:m-5
                            bg-amber-200 rounded-xl
                            text-[#2b2b2b] leading-[2] md:leading-[3]">

                <div className="bg-amber-300 rounded-xl
                                p-5 md:p-10">
                    <h1  className="flex justify-center
                                    ">
                        ¡BIENVENIDO/A!
                    </h1>
                    <h2>
                        Inicia sesón y podrás acceder a nuestras ofertas y productos para llevarlas a tu carrito. 
                    </h2>
                </div> 

                <div className="p-5 md:p-10
                                flex flex-col">

                    <div className="flex flex-col">
                        <label>Ingrese su correo registrado:</label>
                        <input className="rounded-xl
                                        pl-3 md:pl-5"
                            name="email"
                            type="email"
                            value={logDataUser.email}
                            placeholder="example@mail.com"
                            onChange={handleInputChange}
                            />
                        {errors.email && <span className="pl-3 md:pl-5 text-[#a22929]">
                                            {errors.email}
                                        </span>}
                    </div>

                    <div className="flex flex-col">
                        <label>Contraseña:</label>
                        <input className="rounded-xl
                                        pl-3 md:pl-5"
                            name="password"
                            type="password"
                            value={logDataUser.password}
                            placeholder="* * * * * * * * * * * *"
                            onChange={handleInputChange}
                            />
                        {errors.password && <span className="md:pl-5 text-[#a22929]">
                                                {errors.password}
                                            </span>}
                    </div>

                    <button
                    disabled={(errors.email || errors.password) ? true : false}
                    type="submit">Iniciar Sesión</button>
                </div>
            </form>
        </div>
    );
}

export default LoginView;