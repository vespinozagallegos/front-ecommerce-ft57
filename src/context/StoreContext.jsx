import { createContext, useContext } from "react";

// Se crea el contexto
export const StoreContext = createContext();

// Se crea el Provider. Que provee mediante el prop value
// El provider renderiza(en return) al children. Y CHILDREN renderiza lo que sea que esté envolviendo(toda la App en layout)
export const StoreDataProvider = ({ children }) => {
    
    // Crear Estados (que se retornan en la prop value)
    // Crear el estdo de ProductDetail
    return (
        <StoreContext
            value={{}}>
            {children}
        </StoreContext>  
    );
}

// Crear HOOK customizado(consume los estados retornados del Provider)
// Y los disponibiliza a los COMPONENTS
export const useStoreContext = () => {
    return useContext(StoreContext);
}