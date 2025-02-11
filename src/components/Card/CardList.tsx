import Link from "next/link";
import Card from ".";
import { getProductsDB } from "@/helpers/products.helpers";

const CardList = async() => {

const productsFromDB = await getProductsDB() 
    // className=" flex flex-row flex-wrap items-center justify-center max-w-xs"
    // className="flex flex-wrap"
    //className='md:w-1/2'
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
                productsFromDB && productsFromDB.map((product) => {             //.slice(8, 23)
                    return(
                        <Link key={product.id} href={`/product/${product.id}`}>
                            <div className="m-5">
                                <Card key={product.id} {...product} /> 
                            </div>

                        </Link>
                    )
                })
            }
        </div>
    );
}

export default CardList;