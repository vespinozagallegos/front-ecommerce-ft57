"use client"

import { useAuth } from "@/context/AuthContext";
import { getOrders } from "@/helpers/orders.helper";
import { IOrder } from "@/types";
import { useEffect, useState } from "react";

// componente del cliente
const OrdersView = () => {
    // contexto
    const { userData } = useAuth();
    // ESTADO
    const [orders, setOrders] = useState<IOrder[]>([]);
    // Petición al back
    const handleGetOrders = async() => {
        const response = await getOrders(userData?.token!)
        setOrders(response)
        
    }

    useEffect(() => {
        handleGetOrders();
    }, [])
//gap-2 items-start
    return (
        <div className="flex flex-col items-center justify-center gap-8">
            {
                orders.length ? (
                    orders.map((order) => {
                        return(
                            <div key={order.id}
                                className=" 
                                            flex flex-col justify-center
                                            bg-amber-200 rounded-xl
                                            text-[#2b2b2b]">
                                                
                                <div className="bg-amber-300 rounded-xl
                                                w-full p-3 md:p-5
                                                flex justify-center">
                                    <h1>
                                        Compra # {order.id}
                                    </h1>
                                </div>

                                <div className="leading-[1,5] md:leading-[2]
                                                pl-8 pr-8 pb-5 pt-3
                                                md:pl-10 md:pr-10 md:pb-8 md:pt-5 ">
                                        <p>Fecha: {new Date(order.date).toLocaleDateString()}</p>
                                        <p>Estado: {order.status.toLocaleUpperCase()}</p>
                                    {
                                        order.products.map((product) => {
                                            return(
                                                <div key={product.id}>
                                                    <p>{product.name}</p>
                                                    <p>Precio: ${product.price}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <div>
                        <h1>Tu historial de órdenes de compra está vacío</h1>
                    </div>
                )
            }
        </div>
    );
}

export default OrdersView;