import React, {useEffect, useState } from "react";
import axiosInstance from "../../utilities/axios";


export default function Cart(props) {

    const [cartProduct, setCartProduct] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState([]);
    const [count, setCount] = useState(null);

    const getCartProduct = async () => {
        try {
            const response = await axiosInstance.get("/user/cart");
            console.log(response.data.cart);
            setCartProduct(response.data.cart.product)
        } catch (error) {
            console.error(error);

        }
    }

    const handleDeleteProduct = async (singleProduct) => {
        try {
            const response = await axiosInstance.delete(`/user/cart/${singleProduct._id}`);
            console.log(response.data);
            await getCartProduct();
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getCartProduct();
    }, []);

    const handleIncrease = (product) => {
        const newSelectedProduct = selectedProduct.map((p) => {
            if (p.sku === product.sku) {
                return { ...p, count: p.count + 1 }
            } else {
                return p;
            }
        })
        setSelectedProduct(newSelectedProduct);
    };

    const handleDecrease = (product) => {
        const newSelectedProduct = selectedProduct.map((p, i) => {
            if (p.sku === product.sku) {
                return { ...p, count: p.count - 1 }
            } else {
                return p;
            }
        })
        setSelectedProduct(newSelectedProduct);
    };

    const handleCheckout = () => {
        const totalAmount = selectedProduct.reduce((total, curVal) => {
            return (total + (curVal.price * curVal.count))
        }, 0)
        alert(`checkout- Subtotal: $ ${totalAmount}`)
    };

    return (
        <>
            <div className="cart padding">
                <div className="flex center">
                    {/* <img className="cart-png" src="./static/bag-icon.png" alt="cart" /> */}
                    <h3 >Cart</h3>
                </div>
                {cartProduct.map((product) => {
                    return (
                        <div className="flex margin justify-evenly">
                            <img className="cart-img " src={`${product.image}`} alt="Tshirt" />
                            <div className=" center column  flex-30">
                                <h3>{product.name}</h3>

                                <h4>Quantity: {product.count}</h4>
                            </div>
                            <div>
                                <h3>${product.price * product.count}</h3>
                                <button onClick={() => handleDecrease({ ...product })}>-</button>
                                <button onClick={() => handleIncrease({ ...product })}>+</button>
                            </div>
                            <button onClick={() => handleDeleteProduct({ ...product })}>Remove</button>


                        </div>
                    )
                })
                }


                <div>
                    <div className="flex justify-evenly margin">
                        <h3>Subtotal</h3>
                        <h4>$
                            {selectedProduct.reduce((total, curVal) => {
                                return (total + (curVal.price * curVal.count))
                            }, 0)}
                        </h4>
                    </div>
                    <button className="center checkout" onClick={() => handleCheckout()}>CHECKOUT</button>
                </div>
            </div>
        </>
    )
};