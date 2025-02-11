// import CardList from "@/components/Card/CardList";
import CardListHome from "@/components/Card/CardListHome";
import Image from "next/image";

// COMPONENTE con imagenes de OTOÑO-INVIERNO
const HomeView = () => {
    return (
        <div className="w-full h-full flex flex-col 
                        md:flex-row md:h-1/4 
                        pt-8">

            <div className="w-full h-full
                          md:w-1/2 md:h-1/4
                          box-border">
                <Image 
                src="/images/c-otono.png" 
                alt="Imagen de Colección" 
                width={768} 
                height={768} 
                className="box-border"/>
            </div>

            <div className="w-full
                          md:w-1/2 md:min-h-[380px] md:max-h-[510px]
                          lg:w-1/2 lg:min-h-[511px] lg:max-h-[640px]
                          xl:w-1/2 xl:min-h-[641px] xl:max-h-[765px]
                          2xl:w-1/2 2xl:min-h-[766px]
                          pl-[10px] box-border overflow-y-scroll">
                <CardListHome/>
            </div>

        </div>
    );
}

export default HomeView;