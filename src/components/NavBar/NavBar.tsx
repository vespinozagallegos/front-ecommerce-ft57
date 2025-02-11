"use client"
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";

// COMPONENTE
const NavBar = () => {
  const { userData } = useAuth();
  return (
    <header>
      <nav>
        <div className="flex justify-center">
          <form className="fixed top-0 z-30
                          py-3 w-1/2 max-w-screen-md lg:max-w-screen-lg flex justify-around
                          border border-gray-100 bg-white/80 rounded-3xl 
                          shadow backdrop-blur-lg
                          md:top-6 ">
            <Link href="/"><Image src="/images/Logo.png" alt="Logo" width={25} height={25} /></Link>
             <input
               type="text"
               placeholder="¿Que estás buscando?"
               className="w-3/4 border border-gray-100 rounded-3xl px-8 backdrop-blur-lg "/>
               <button
               type="submit"
               className="text-[grey] [text-shadow:1px_1px_5px_gray-100]"> Buscar </button>
          </form>
        </div>
        
        <ul className="m-0 pl-0 pt-[200px] pb-[100px] bg-[url('../assets/img-NavBar2.webp')] bg-top bg-cover bg-no-repeat list-none flex justify-around items-center text-[large] font-normal text-xl">
          <Link href="/">
            <li>
              <span className="text-[white] [text-shadow:1px_1px_5px_white] hover:text-black">
                OFERTAS
              </span>
            </li>
          </Link>

          <Link href="/home">
            <li>
              <span className="text-[white] [text-shadow:1px_1px_5px_white] hover:text-black">
                HOME
              </span>
            </li>
          </Link>

          <Link href="/product">
            <li>
              <span className="text-[black] [text-shadow:1px_1px_5px_white] hover:text-white">
                PRODUCTOS
              </span>
            </li>
          </Link>
          {
            userData?.token ? (
              <>
              <Link href="/carritoDeCompras">
                <li>
                 <span className="text-[black] [text-shadow:1px_1px_5px_black] hover:text-white">
                   MI CARRITO
                 </span>
                </li>
              </Link>

              <Link href="/dashboard">
                <li>
                 <span className="text-[black] [text-shadow:1px_1px_5px_black] hover:text-white">
                   MI PERFIL
                 </span>
                </li>
              </Link>
              </>
            
            ) : (
              <>
              <Link href="/login">
              <li>
                <span className="text-[black] [text-shadow:1px_1px_5px_black] hover:text-white">
                  INICIAR SESIÓN
                </span>
              </li>
              </Link>

              <Link href="/register">
              <li>
                <span className="text-[black] [text-shadow:1px_1px_5px_black] hover:text-white">
                  REGISTRO
                </span>
              </li>
              </Link>
              </>

            )
          }

          
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;