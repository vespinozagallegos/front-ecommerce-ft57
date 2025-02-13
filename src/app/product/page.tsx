// View
import ProductsView from '@/views/ProductsView';

// Componente accesible con /product

const Product = (props) => {
    return (
        <div>
            <ProductsView {...props} />
        </div>
    );
}

export default Product;