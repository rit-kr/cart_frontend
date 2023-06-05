import Showproduct from "../showproduct/Showproduct";

export default function Home(props) {
    console.log("home details", props.handleProductDetails);
    return (
        <>
            <Showproduct
                handleProductDetails={props.handleProductDetails}
                // selectedProduct={props.selectedProduct}
            />
        </>
    )
}