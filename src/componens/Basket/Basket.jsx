import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import BasketTitle from "./BasketTitle/BasketTitle";
import BasketProduct from "./BasketProduct/BasketProduct";

const Basket = ()=>{
    return(
        <div>
          <Header bg={'linear-gradient(285.45deg, #0B3F37 38.27%, #CB8D62 141.81%)'} />
          <BasketTitle/>
          <BasketProduct/>
          <Footer/>
        </div>
    )
}
 export default Basket;