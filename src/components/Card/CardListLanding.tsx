import Link from "next/link";
import Card from ".";
import arrayProducts from "@/helpers/arrayProducts";
import { getProductsDB } from "@/helpers/products.helpers";

const CardListLanding = async() => {
    const productsFromDB = await getProductsDB() 
    
    return (
        <div className="flex flex-col">
            {
                productsFromDB && productsFromDB.slice(0, 9).map((product) => {
                    return(
                        <Link key={product.id} href={`/product/${product.id}`}>

                        <Card key={product.id} {...product}/>
                        </Link>
                    )
                })
            }
        </div>
    );
}

export default CardListLanding;