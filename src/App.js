import React from "react"
import "./style.css"
import Button from "./Button"

function Apple(){
    return(
        <div >
            <h1 style={{textAlign : "center"}}> Hello World!! </h1>
            <h2 class="b"> I'am Pratiksha!! </h2>
            <p>
                <h4>Now I wanna tell u about React JS</h4>
            </p>
            <p>
                <h3 class="b">History</h3>
                React is a front-end library developed by Facebook. It is used for handling the view layer for web and mobile apps. ReactJS allows us to create reusable UI components. It is currently one of the most popular JavaScript libraries and has a strong foundation and large community behind it.
                <h3>Audience</h3>
            </p>
            <p>This tutorial will help JavaScript developers who look ahead to deal with ReactJS for the first time. We will try to introduce every concept by showing simple code examples that can be easily understood. After finishing all the chapters, you will feel confident working with ReactJS. As a bonus we will introduce additional elements that work well with ReactJS to help you learn the best practices and follow the modern JavaScript trends.
                <h3 class="b">Prerequisites</h3>
            </p>
            <p>If you want to work with ReactJS, you need to have solid knowledge of JavaScript, HTML5, and CSS. Even though ReactJS doesn't use HTML, the JSX is similar so your HTML knowledge will be very helpful. We will explain this more in one of the next chapters. We will also use EcmaScript 2015 syntax so any knowledge in this area can be helpful.</p>

            <Button ButtonText="History"/>
            <Button ButtonText="Audience"/>
            <Button ButtonText="Prerequisites"/>
        </div>
       
        
    )
}


export default Apple