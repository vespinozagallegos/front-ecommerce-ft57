// si HOME es mi página principal esto se elimina
// Pero si quiero que LANDING sea la principal debo mantener esta
// Y conectarla con la view Home poniendo aqui:
import HomeView from '@/views/HomeView';
// y en page.tsx (sin carpeta, sólo dentro de App) --> export { default } from '@/views/LandingView'

// COMPONENTE HOME
const Home = () => {
    return (
        <div>
            <HomeView/>
        </div>
    );
}

export default Home;