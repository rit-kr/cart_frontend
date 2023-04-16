import "./style.scss";

export default function Cart() {
    return (
        <>
            <div cl>
                <h4>Shopping Cart</h4>
                <h4>Price</h4>
            </div>
            <div>
                <img src="/assets/image/amz.png" alt="image" />
                <div>
                    <p>Product name</p>
                    <div>
                        <h4>quntity</h4>
                        <div>Delete</div>
                        <div>Save for later</div>
                        <div>See more like this</div>
                        <div>Share</div>

                    </div>
                </div>
                <div>
                    <p>$Price</p>
                </div>
            </div>
        </>
    )
}