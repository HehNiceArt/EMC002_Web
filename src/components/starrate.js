import React from "react";
import { FaStar } from "react-icons/fa"; {/*nmp install react-icons --save*/}

export default function starrate(){

    return(
        <>

        {[...Array(5)].map(star => {
            return(
                <>
                    <FaStar color="white" size=""/>
                    
                </>
            )
        })}   

        </>
    )
}