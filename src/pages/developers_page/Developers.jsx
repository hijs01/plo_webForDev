import Header from "@/components/layout/Header";
import React from "react";
import DevInfo from "./dev_info/DevInfo.jsx";


const DeveloperPage = () => {
    return(
        <> 
        <div>
            <Header />
        </div>
        <main>
            <h2 className="text-2xl">
                Meet the PLO Devs Team
            </h2>
        </main>
        <div className="bg-neutral-800">
            <div>
             <DevInfo />
            </div>
        </div>
        </>

    );
}

export default DeveloperPage;