// import Header from './Pages/Header/index.js';

// import Products from './Pages/ProductsPage/index.js';

import HeaderBasket from './Pages/headerBasket/headerBasket';

import Basket from './Pages/Basket/basket';

import FooterBasket from './components/elements/footerBasket/footerBasket';

import './reset.css'

function App() {
    return (
        <div className="App">
            <HeaderBasket />
            <Basket />
            <FooterBasket />
            {/* <Header />
            <Products /> */}
        </div>
    );
}

export default App;
