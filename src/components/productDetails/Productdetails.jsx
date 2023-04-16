import "./style.scss";

export default function Productdetails(props){
    return(
        <>
            <div>
                <h1>Product details</h1>
                <p>{props.name}</p>
            </div>
        </>
    )
}