export interface ICardProps {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId?: number
}

// export interface ICardListProps {
//     category?: number
// }