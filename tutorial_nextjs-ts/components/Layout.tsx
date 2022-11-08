import React from "react"

//This Layout can be added in the _app.tsx file, around the <Component /> 
//For more dynamic, such as different layouts for different pages, use a getLayout function in the _app

function Layout ({children}: { children: React.ReactNode }){
    return (
    <div>
        <nav>
            <li>Home</li>
        </nav>
        {children}
    </div>
    )
}

export default Layout