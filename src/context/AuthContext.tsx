"use client"
import { IUserSession } from "@/types";
import { createContext, useContext, useState, useEffect } from "react"

export interface AuthContextProps {
    userData: IUserSession | null,
    setUserData: (userData: IUserSession | null) => void
}

// Crear Contexto
export const AuthContext =  createContext<AuthContextProps> ({
    userData: null,
    setUserData: () => {}
})

export interface AuthProviderProps {
    children: React.ReactNode
}

// Crear Componente Proveedor
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    // crear ESTADO
    const [userData, setUserData] = useState<IUserSession | null>(null);

    // HOOK para escuchar los cambios en userData y guardarlos en localstorage (persistencia de datos)
    useEffect(() => {
        if(userData) {
            localStorage.setItem("userSession", JSON.stringify({token: userData.token, user: userData.user}))
        }
    }, [userData])

    // HOOK para persistir la INFO a pesar de ACTUALIZAR la pag.
    useEffect(() => {
        // se TRAE la info del localStorage y se setea al estado
        const userData = JSON.parse(localStorage.getItem("userSession")!)
        setUserData(userData)
    }, [])

    return(
        <AuthContext.Provider value={{userData, setUserData}}>
            {children}
        </AuthContext.Provider>
    );

};

// HOOK
export const useAuth = () => useContext(AuthContext)