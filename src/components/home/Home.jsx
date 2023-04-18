import { useNavigate } from "react-router-dom";
import Header from "../header/Header";
import Showproduct from "../showproduct/Showproduct";
import { useState } from "react";

export default function Home(props) {
    return (
        <>
            <Header />
            <Showproduct
                handleProductDetails={props.handleProductDetails}
                // selectedProduct={props.selectedProduct}
            />
        </>
    )
}