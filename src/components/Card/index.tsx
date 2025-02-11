// import Link from "next/link"
import Image from 'next/image'
// vendors
import React from "react";
//types
import { ICardProps } from "./types";

// { id, name, description, price, stock, image, categoryId }
export const Card: React.FC<ICardProps> = ({ name, description, price, stock, image }) => {
    // className="max-w-xs"
    return (
      // <Link key={id} href={`/product/${id}`}>
        <div className="flex flex-col            
                        shadow
                        mb-20">
          
          <div className='flex justify-center 
                          border-4 border-amber-100 rounded-xl' >
            <Image 
              src={image} 
              alt={`imagen del producto ${name}`} 
              width={650} 
              height={650} />
          </div>

          
          <div className=' bg-amber-200 border-2
                          border-amber-100 shadow rounded-xl
                          text-[#2b2b2b]' >

            <div className='flex justify-center 
                          bg-amber-300 
                          rounded-xl
                          pt-1 pb-1'>
              <h1>{name}</h1>
            </div>

            <div className='mt-2 pb-5 pl-10 pr-10'>
              <p>Stock: {stock}</p>
              <p>Precio: ${price}</p>
              <p className='max-w-[650px]'>Descripción: {description}</p>
            </div>

          </div>

        </div>
      // </Link>
    );
  }

export default Card;