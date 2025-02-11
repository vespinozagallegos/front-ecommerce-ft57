import Image from "next/image";
import Link from "next/link";
// COMPONENTE
const Footer = () => {
    return(
        <div className="flex justify-center pt-8 pb-2">

        <footer className="bottom-0 w-full ml-2 mr-2
                            bg-yellow-800 border-2 border-gray-100 shadow rounded-xl
                            text-xs text-[#c7bebe]">

            <div className="pt-3 pb-2 flex justify-between">
                <div className="pl-10" >
                    <Link href="/"><Image src="/images/Logo.png" alt="Logo" width={25} height={25} /></Link>
                </div>
                <div className="pr-5 flex justify-around">
                    <h1 className="pr-8">About </h1>
                    <h1 className="pr-8">ENCUÉNTRANOS [redes] </h1>
                    <h1 className="pr-8">Contact </h1>
                </div>
            </div>

            <div className="flex justify-center pt-2 pb-3">
                <h1>©2025 [MARCA] ™.    All Rights Reserved</h1>
            </div>

        </footer>
        </div>
    );
}

export default Footer;