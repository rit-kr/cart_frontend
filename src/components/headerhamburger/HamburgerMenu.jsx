import "./style.scss";
import { HiOutlineChevronRight } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";


export default function HamburgerMenu(props) {
    return (
        <>
            <div className="hamburger_menu">
                <div className="hamburger_menu_list">
                    <div>
                        <p>Shop by category</p>
                    </div>
                    <ul>
                        <li><span>Electronics product</span><HiOutlineChevronRight /></li>
                        <li>Beauty products<HiOutlineChevronRight /></li>
                        <li>Furnitures<HiOutlineChevronRight /></li>
                        <li>Book & toys<HiOutlineChevronRight /></li>
                        <li>Health and personal care<HiOutlineChevronRight /></li>
                        <li>list<HiOutlineChevronRight /></li>
                    </ul>
                </div>
                <div><AiOutlineClose onClick={props.handleClose} /></div>
            </div>

        </>
    )
}