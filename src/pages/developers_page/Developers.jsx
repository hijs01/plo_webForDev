import Header from "@/components/layout/Header";
import React from "react";
import DevInfo from "./dev_info/DevInfo.jsx";


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
        </>

    );
}

export default DeveloperPage;