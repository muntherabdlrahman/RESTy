import React from "react";
import { useState } from "react";





function Loading (){
    let [loading, setLoading]=useState(true);
    return(
        <>
        <h4>{loading}</h4>

        </>
    );
}