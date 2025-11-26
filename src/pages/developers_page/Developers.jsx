import React from "react";
import Header from "@/components/layout/Header";
import DevInfo from "./dev_info/DevInfo";
import JoinUsMessage from "./footerMessage/JoinUs";
import Footer from "@/components/layout/home/Footer";


const DeveloperPage = () => {
    return(
        <> 
        <div>
            <Header />
        </div>
        <div >
            <div>
             <DevInfo />
            </div>
        </div>
        <div>
          <JoinUsMessage />
          <Footer />
        </div>
        </>

    );
}

export default DeveloperPage;