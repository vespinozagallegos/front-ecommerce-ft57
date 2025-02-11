"use client"

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

// component
const DashboardView = () => {
    const { userData, setUserData } = useAuth();
    const router = useRouter();

    const handleLogOut = () => {
        setUserData(null);
        localStorage.removeItem("userSession")
        router.push("/")
        alert ("Haz CERRADO la SESIÓN")
    }
    return(
        <div className="flex justify-center
                        ">
            <div className="flex flex-col
                            m-3 md:m-5
                            bg-amber-200 rounded-xl
                            text-[#2b2b2b] leading-[1,5] md:leading-[2]">
                
                <div className="flex flex-col
                                p-3 md:p-5
                                bg-amber-300 rounded-xl">
                    <h1 className="flex justify-center
                                    ">
                        ¡Bienvenido/a {userData?.user.name}!
                    </h1>
                
                    <h2 className="flex justify-center
                                    ">
                        Datos de Usuario
                    </h2>
                </div>

                <div className="ml-3 mr-3 mb-3 mt-0 md:ml-5 md:mr-5 md:mb-5 md:mt-0 
                                p-3 md:p-5">
                    <p>Dirección de envío: {userData?.user.address}</p>
                    <p>Número de contacto: {userData?.user.phone}</p>
                    <p>E-mail: {userData?.user.email}</p>
                </div>

                <button onClick={handleLogOut} className="mb-5 md:mb-10">
                    CERRAR SESIÓN
                </button>
            </div>
        </div>
    );
}

export default DashboardView;