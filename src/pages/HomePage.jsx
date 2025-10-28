import Header from "../components/layout/Header"
import React from "react";


const HomePage=() => {
    return(
        <>
        <div>
        <Header />
        </div>
        <div className="bg-neutral-800">
        {/* 내용 여백 */}
          <main className="pt-20 min-h-screen text-neutral-200">
            <div className="max-w-7xl mx-auto px-8">
              <h2 className="text-3xl font-semibold text-white ">Welcome to PLO Devs</h2>
              <p className="text-neutral-400 max-w-xl">
                PLO Devs is a community-driven platform for developers to collaborate on open-source projects, share knowledge, and grow together. 
                Join us to explore exciting projects and connect with like-minded developers.
              </p>
            
            </div>
            <br>
            </br>
            <div className="flex justify-center item-center max-w-7xl mx-auto px-8 pt-48">
                <h1 className="text-5xl font-semibold">
                Be ready to 야근.
                </h1>
              </div>
      </main>
        </div>
        
    
</>
    );

    
}



export default HomePage;