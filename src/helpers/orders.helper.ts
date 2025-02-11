const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function createOrder(token: string, products: number[]) {
    // Petición de Productos al ENDPOINT del back
    try {
        const response = await fetch(`${API_URL}/orders`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: token
            },
            body: JSON.stringify({products})
        })
        alert("¡Su compra se ha realizado con éxito!")
        return response.json();
    } catch (error: any) {
        alert("Error inesperado en su compra, vuelva a intentarlo porfavor")
        throw new Error(error)
    }
};

export async function getOrders(token: string) {
    // Petición de Productos al ENDPOINT del back
    try {
        const response = await fetch(`${API_URL}/users/orders`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Authorization: token
            },
        })
        return response.json();
    } catch (error: any) {
        throw new Error(error)
    }
};