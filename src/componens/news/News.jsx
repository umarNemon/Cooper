import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import NewsTitle from "./NewsTitle/NewsTitle";
import NewsContent from "./NewsContent/NewsContent";
const News = () =>{
    return(
        <div>
        <Header  bg={'linear-gradient(285.45deg, #0B3F37 38.27%, #CB8D62 141.81%)'}/>
        <NewsTitle/>
        <NewsContent/>
       <Footer/>
        </div>
    )
}
export default News;