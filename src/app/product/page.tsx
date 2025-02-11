// View
import { ICardProps } from '@/components/Card/types';
import ProductsView from '@/views/ProductsView';

// Componente accesible con /product

const Product: React.FC<ICardProps> = (props) => {
    return (
        <div>
            <ProductsView {...props} />
        </div>
    );
}

export default Product;