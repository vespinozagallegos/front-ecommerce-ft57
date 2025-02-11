"use client";

import { register } from "@/helpers/auth.helper";
import { validateRegisterForm } from "@/helpers/validate";
import { IRegisterProps, IRegisterPropsErrors } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const RegisterView = () => {
    const router = useRouter();
    const initialState = {
        email: "",
        password: "",
        name: "",
        address: "",
        phone: ""
    }   
    
    // Estado para datos de register (despues sacar el initialState)
    const [regDataUser, setRegDataUser] = useState<IRegisterProps>(initialState);
    
    // Estado para VALIDACIONES
    const [errors, setErrors] = useState<IRegisterPropsErrors>(initialState)
    
    // Funcioladidad de button Register
    const handleOnSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // envío al back, de toda la info en form para guardarla en la BD
        await register(regDataUser)
        // se redirige al usuario una vez registrado
        router.push("/login");
    }
    
    // Agregar funcionalidad a los inputs
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // del obj evento. la prop target que recibe los valores del input
        const { name, value } = event.target;        
        // y facilita el guardado en los estados para
        // Actualizar Estado
        setRegDataUser({
            ...regDataUser,
            [name]: value
        });
    }

    // Validación en tiempo real
    useEffect(() => {
        const errors = validateRegisterForm(regDataUser)
        setErrors(errors)
    // Cada vez que detecte cambio en logDataUser (cuando el usuario tipea) ejecuta const errors y se guardan actualizando el estado de error (setError)
    }, [regDataUser])             
    
    



    return(
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
                        ¡Registrate GRATIS! Para acceder a nuestras ofertas y productos.
                    </h2>
                </div> 

                <div className="p-5 md:p-10
                                flex flex-col">

                    <div className="flex flex-col">
                        <label>Email:</label>
                        <input className="rounded-xl
                                        pl-3 md:pl-5"
                            name="email"
                            type="email"
                            value={regDataUser.email}
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
                            value={regDataUser.password}
                            placeholder="* * * * * * * * * * * *"
                            onChange={handleInputChange}
                            />
                        {errors.password && <span className="md:pl-5 text-[#a22929]">
                                                {errors.password}
                                            </span>}
                    </div>

                    <div className="flex flex-col">
                        <label>Nombre:</label>
                        <input className="rounded-xl
                                        pl-3 md:pl-5"
                            name="name"
                            type="text"
                            value={regDataUser.name}
                            placeholder="Juan Pérez"
                            onChange={handleInputChange}
                            />
                        {errors.name && <span className="md:pl-5 text-[#a22929]">
                                            {errors.name}
                                        </span>}
                    </div>

                    <div className="flex flex-col">
                        <label>Dirección de Envío:</label>
                        <input className="rounded-xl
                                        pl-3 md:pl-5"
                            name="address"
                            type="text"
                            value={regDataUser.address}
                            placeholder="Calle, Número, Ciudad"
                            onChange={handleInputChange}
                        />
                        {errors.address && <span className="md:pl-5 text-[#a22929]">
                                                {errors.address}
                                            </span>}
                    </div>

                    <div className="flex flex-col">
                        <label>Teléfono:</label>
                        <input className="rounded-xl
                                        pl-3 md:pl-5"
                            name="phone"
                            type="text"
                            value={regDataUser.phone}
                            placeholder="1 2 3 4 5 6 7 8 9"
                            onChange={handleInputChange}
                            />
                        {errors.phone && <span className="md:pl-5 text-[#a22929]">
                                            {errors.phone}
                                        </span>}
                    </div>

                    <button 
                    disabled={(errors.email || errors.password || errors.name || errors.address || errors.phone) ? true : false}
                    type="submit">Registrarse</button>
                </div>
            </form>
        </div>
    );
}

export default RegisterView;