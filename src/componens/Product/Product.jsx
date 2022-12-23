import style from '../Product/product.module.scss'
 
const array = [
    {imgUrl:"/img/products/1.png" , title:'Для эфирных масел'},
    {imgUrl:"/img/products/2.png" , title:'Для гидролатов'},
    {imgUrl:"/img/products/3.png" , title:'Медная посуда'},
    {imgUrl:"/img/products/4.png" , title:'Аксессуары из меди'},
    {imgUrl:"/img/products/5.png" , title:'Индивидуальный заказ'},
    {imgUrl:"/img/products/3.png" , title:'Скидки и предложения'}
]

function Product(){
    return(
        <div className={style.main}>
            <div className={style.title}>
              <h2>  НАША ПРОДУКЦИЯ </h2>
            </div>
            <div className={style.imgMain}>
                {
                    array.map((obj) =>(
                    <div className={style.img_title}>
                        <img  src={obj.imgUrl} alt="" />
                        <div className={style.overflow}></div>
                        <p>{obj.title}</p>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Product