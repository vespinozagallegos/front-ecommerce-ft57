import { ICardProps } from "@/components/Card/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProductsDB() {
    // Petición de Productos al ENDPOINT del back
    try {
        const response = await fetch(`${API_URL}/products`, {   //!REVISAR si toma con products o product
            // cache: "no-cache"
            next: { revalidate: 1200 }
        })
        const products: ICardProps[] = await response.json();
        return products;
    } catch (error: any) {
        throw new Error(error)
    }
};

export async function getProductsDBById(id: string) {
    try {
        // Se traen TODOS los productos 
        const products: ICardProps[] = await getProductsDB();
        // Filtrado segun el id recibido en esta funcion
        const findProduct = products.find((product) => product.id.toString() === id)
        // Se maneja la posibilidad de undefined
        if(!findProduct) throw new Error("Producto no encontrado")
            return findProduct;
    } catch (error: any) {
        throw new Error(error)
    }
};