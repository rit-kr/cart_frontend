import "./style.scss";
import CInput from "../cinput/CInput";
import axiosInstance from "../../utilities/axios";
import { useState } from "react";


export default function Addproduct() {

    const [addProductInfo, setAddProductInfo] = useState(
        {
            category: "",
            subCatogery: "",
            name: "",
            image: [],
            price: "",
            brand: "",
            stars: "",
            seller: "",
            soldCount: "",
            discount: "",
            size: "",
            discription: [],
            review: [],
            quantity: "",
            varient: {
                gender: "",
                ageGroup: "",
                genere: "",
                weight: "",
                color: ""
            }
        }
    );

    const handleAddProduct = async (e) => {
        e.preventDefault();
        const payload = {
            items:[
                {
                    ...addProductInfo
                }
            ]
        }

        try {
            const response = await axiosInstance.post("/admin/add", payload);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <>
            <div className="addproduct">
                <p>Add new product</p>
                <div className='addproduct_input'>
                    <CInput className={'cinput'} label={'Category'} type="text" onChange={(e) => setAddProductInfo({ ...addProductInfo, category: e })} placeholder="Category"></CInput>
                    <CInput className={'cinput'} label={'Subcategory'} type="text" onChange={(e) => setAddProductInfo({ ...addProductInfo, subCategory: e })} placeholder="Subcategory"></CInput>
                    <CInput className={'cinput'} label={'Name'} type="text" onChange={(e) => setAddProductInfo({ ...addProductInfo, name: e })} placeholder="name"></CInput>
                    <CInput className={'cinput'} label={'Image'} type="text" onChange={(e) => setAddProductInfo({ ...addProductInfo, image: e })} placeholder="Image"></CInput>
                    <CInput className={'cinput'} label={'Price'} type="text" onChange={(e) => setAddProductInfo({ ...addProductInfo, price: e })} placeholder="price"></CInput>
                    <CInput className={'cinput'} label={'Brand'} type="text" onChange={(e) => setAddProductInfo({ ...addProductInfo, brand: e })} placeholder="brand"></CInput>
                    <CInput className={'cinput'} label={'Star'} type="text" onChange={(e) => setAddProductInfo({ ...addProductInfo, stars: e })} placeholder="stars"></CInput>
                    <CInput className={'cinput'} label={'Seller'} type="text" onChange={(e) => setAddProductInfo({ ...addProductInfo, seller: e })} placeholder="seller"></CInput>
                    <CInput className={'cinput'} label={'Discount'} type="text" onChange={(e) => setAddProductInfo({ ...addProductInfo, discount: e })} placeholder="discount"></CInput>
                    <CInput className={'cinput'} label={'Size'} type="text" onChange={(e) => setAddProductInfo({ ...addProductInfo, size: e })} placeholder="size"></CInput>
                    <CInput className={'cinput'} label={'Discription'} type="text" onChange={(e) => setAddProductInfo({ ...addProductInfo, discription: e })} placeholder="discription"></CInput>
                    <CInput className={'cinput'} label={'Quantity'} type="text" onChange={(e) => setAddProductInfo({ ...addProductInfo, quantity: e })} placeholder="quantity"></CInput>
                    <button className='addproduct_btn' onClick={handleAddProduct} >Continue</button>
                </div>
            </div>
        </>
    )
};