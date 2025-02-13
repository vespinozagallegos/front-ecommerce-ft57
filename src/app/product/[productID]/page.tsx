// import arrayProducts from '@/helpers/arrayProducts';
import React from "react";
import { getProductsDBById } from '@/helpers/products.helpers';
import ProductDetailView from '@/views/ProductDetailView';

// COMPONENTE de R Dinámica Anidada. accesible con /product/cualquierCosa. Se tipa el FC y se declara que recibe <>
const ProductDetail = async({
   params,
   }: {
    params: Promise<{ productID: string }>
   }) => {
    const {productID} = await params
    const product = await getProductsDBById(productID)
    // console.log(product);
    return (
      <ProductDetailView {...product} />
    );
}

export default ProductDetail;