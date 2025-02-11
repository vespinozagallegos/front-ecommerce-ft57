// refe de http://localhost:3002/products
// en back/src/helpers/preLoadProducts.ts 
// ?---> REEMPLAZADA POR src/components/card/types.ts -> ICardProps
// export interface IProduct {
//     id: number;
//     name: string;
//     description: string;
//     price: number;
//     stock: number;
//     image: string;
//     categoryId?: number
// }

import { ICardProps } from "@/components/Card/types";

// referencia de back/src/helpers/preLoadCategories.ts
// export interface ICategory {
//     id:number;
//     name: string
// }

export interface ILoginProps {
    email: string;
    password: string
}

export interface ILoginPropsErrors {
    email?: string;
    password?: string
}

export interface IRegisterProps {
    email: string,
    password: string,
    name: string,
    address: string,
    phone: string
}

export interface IRegisterPropsErrors {
    email?: string,
    password?: string,
    name?: string,
    address?: string,
    phone?: string
}

export interface IUserSession {
    token: string;
    user: {
        address: string,
        email: string,
        id: number,
        name: string,
        phone: string,
        orders: IOrder
    }
}

export interface IOrder {
    id: number,
    status: string,
    date: Date,
    products: ICardProps[]
}