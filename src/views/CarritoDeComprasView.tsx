"use client"

import { ICardProps } from "@/components/Card/types";
import { useAuth } from "@/context/AuthContext";
import { createOrder } from "@/helpers/orders.helper";
import { useEffect, useState } from "react";

// component
const CarritoDeComprasView = () => {
    // context
    const { userData } = useAuth();
    // ESTADO
    const [cart, setCart] = useState<ICardProps[]>([]);
    // Estado para los precios
    const [total, setTotal] = useState<number>(0);

    // HOOK
    useEffect(() => {
        // trae los posibles productos existentes en localStorage
        const storedCart: ICardProps[] = JSON.parse(localStorage.getItem("cart") || "[]")
        // Acumulador
        if(storedCart) {
            let totalCart = 0;
            storedCart?.map((product) => {
                totalCart = totalCart + product.price
            })
            setTotal(totalCart)
            setCart(storedCart)
        }
    }, [])

    // Funcionalidad del botón
    const handleCheckOut = async () => {
        const idProducts = cart?.map((product) => product.id)
        await createOrder(userData?.token!, idProducts);
        // Limpieza de localStorage / carrito / acumulador
        localStorage.setItem("cart", "[]")
        setCart([])
        setTotal(0)
    }

    return (
        <div>
          <div>
              {
              cart.length ? 
              (cart.map((product) => {
                  return(
                      <div key={product.id}>
                          <p>Producto: {product.name}</p>
                          <p>Precio: ${product.price}</p>
                      </div>
                  );
              }))
              :
              (<p>Aún no tienes productos agregados a tu carrito</p>) }
          </div>
  
          <div>
              <p>Total: ${total}</p>
              <button onClick={handleCheckOut}>COMPRAR</button>
          </div>
        </div>
      );
  }

export default CarritoDeComprasView;