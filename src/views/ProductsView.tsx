// import Image from 'next/image'

import CardList from "@/components/Card/CardList";
import { ICardProps } from "@/components/Card/types";

// component
const ProductsView: React.FC<ICardProps> = ({id, name, description, price, stock, image}) => {

    return (
      <div>
        <CardList />

      </div>
    );
}

export default ProductsView;