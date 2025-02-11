"use client"
import { ICardProps } from "@/components/Card/types";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
// componenten ProductDetailView
const ProductDetailView: React.FC<ICardProps> = ({id, name, description, price, stock, image, categoryId}) => {
  const { userData } = useAuth();
  // Validación para agregar productos a carrito
  const handleAddToCart = () => {
    if(!userData?.token) {
      alert("Debes INICIAR SESIÓN para Agregar productos a CARRITO")
    } else {
      // se valida si el usuario ya agregó productos a CARRITO
      const cart: ICardProps[] = JSON.parse(localStorage.getItem("cart") || "[]")
      // validación para NO repetir products en CARRITO
      const productExist = cart.some((item: ICardProps) => {
        if(item.id === id) return true;
        return false;
      })
      if(productExist) {
        alert("Este producto YA SE AGREGÓ a CARRITO")
      } else {
        // se "pushea" el nvo producto
        cart.push({
          id,
          name,
          description,
          price,
          stock,
          image,
          categoryId
        })
        // guardamos en el localStorage
        localStorage.setItem("cart", JSON.stringify(cart))
        alert("Producto AGREGADO a CARRITO")
      }
    }
  }
  //bg-slate-600"
  return (
      <div
        className=" w-full  p-20
                    md:flex justify-center
                     ">
        
        <div className="md:max-w-md md:max-h-md
                        mt-5 
                        border-4 border-amber-100 rounded-xl">
          <Image
          src={image}
          alt={`${name} - Imagen Producto - ${description}`}
          width={768} 
          height={768} 
          className="md:max-h-96 md:max-w-96"/>
        </div>

        {/*            TEXTO              */}
        <div className="md:w-1/2 md:ml-5
                        flex flex-col
                      bg-amber-200 rounded-xl
                      max-w-[650px]
                      mt-5 pl-5 pr-5 pt-5 pb-2
                      md:min-w-96 md:pl-5 md:pr-5 md:pt-5 md:pb-2 ">
          <div className="bg-amber-300 rounded-xl
                          text-[#2b2b2b] leading-[2] md:leading-[3]
                          md:pl-5 md:pr-5 md:pt-4 md:pb-4
                          md:min-w-80">
            <p>Producto: {name}</p>
            <p>Descripción: {description}</p>
            <p>Precio: $ {price}</p>
            <p>Stock: {stock}</p>
          </div>
     
          <div className="flex flex-col
                          md:mt-5">
              <button onClick={handleAddToCart}>AGREGAR A CARRITO</button>

              <Link href={"/product"}>
                <button className="md:mt-10 md:ml-5">[Ir a productos]</button>
              </Link>

          </div>

        </div>
     
      </div>
  );
}

export default ProductDetailView;