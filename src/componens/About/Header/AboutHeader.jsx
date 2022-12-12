import React from "react";
import Header from "../../Layout/Header/Header"
import AboutTitle from "../AboutTitle/AboutTitle";
import CustomerCount from "../CustomerCout/CustomerCount";
import History from "../history/History";
import Footer from "../../Layout/Footer/Footer";

const AboutHeader = () =>{
    

    return(
        <div>
        <Header bg={'linear-gradient(285.45deg, #0B3F37 38.27%, #CB8D62 141.81%)'}/>
        <AboutTitle/>
        <CustomerCount/>
        <History/>
        <Footer/>
        </div>
    )
}
export default AboutHeader;