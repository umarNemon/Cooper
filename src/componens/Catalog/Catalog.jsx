import Header from "../Layout/Header/Header"
import CatalogTitle from "./CatalogTitle/CatalogTitle";
import Search from "./Search/Search";

const array = [
    {imgUrl:"/img/products/1.png" , title:'Для эфирных масел',price: "1 974"},
    {imgUrl:"/img/products/2.png" , title:'Для гидролатов' ,price: "1 967"},
    {imgUrl:"/img/products/3.png" , title:'Медная посуда' ,price:'1 564'},
    {imgUrl:"/img/products/4.png" , title:'Аксессуары из меди' ,price:'1 674'},
    {imgUrl:"/img/products/5.png" , title:'Индивидуальный заказ' ,price:'1 894'},
    {imgUrl:"/img/products/3.png" , title:'Скидки и предложения' ,price: '1 768'}
  ]
  

function Catalog(){
    return(
   <div>
     <Header bg={'linear-gradient(285.45deg, #0B3F37 38.27%, #CB8D62 141.81%)'}/>
     <CatalogTitle/>
     <Search/>
     {
              array.map((obj) =>(
                <div>
                <div className={style.imgMain}>
                 <div className={style.parent}>
                   <img width={300} height={350} src={obj.imgUrl} alt="" />
                  <div className={style.child}>
                    <Like/>
                  </div>
                 </div>
                  <div className={style.title}>
                    <p>
                      Медный чайник с <br /> фарфоровой ручкой
                    </p>
                    <h4>{obj.price} som</h4>
                  </div>
                </div>
              </div>
              ))
            }
     </div>
    )
}
export default Catalog;