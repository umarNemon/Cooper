import style from '../BasketProduct/basketproduct.module.scss'
const BasketProduct = ()=>{
    return(
        <div className={style.main}>
            <div className={style.title} >
                <span className={style.titleOne}>Товар</span> <span className={style.titleTwo}>Количество</span>
                <span className={style.titleThree}>Цена</span>
            </div>
            <div className={style.mainProduct}>
                <div className={style.line}></div>
                <div className={style.product}>
                    <div>
                        <img width={90} height={100} src="/img/products/1.png" alt="" />
                    </div>
                    <div>
                        <h3>Дистиллятор для получения гидролата 8л</h3>
                    </div>
                    <div>
                       <h4> 2 шт</h4> 
                    </div>
                    <div className={style.price}>
                        <h4>5 000 грн</h4>
                    </div>
                </div>
            </div>
            <div className={style.mainProduct}>
                <div className={style.line}></div>
                <div className={style.product}>
                    <div>
                        <img width={90} height={100} src="/img/products/1.png" alt="" />
                    </div>
                    <div>
                        <h3>Дистиллятор для получения гидролата 8л</h3>
                    </div>
                    <div>
                       <h4> 2 шт</h4> 
                    </div>
                    <div className={style.price}>
                        <h4>5 000 грн</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BasketProduct;