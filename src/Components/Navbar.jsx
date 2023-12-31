/* eslint-disable react/prop-types */
import { IoGridOutline } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";
import { useContext } from "react";
import { contextOfData } from "../Context/MyContext";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import shopimg from "../assets/shopingimg.avif"


function Navbar() {
    const { setSearchKey, isHorizontal, setIsHorizontal, searchKey } = useContext(contextOfData);
    console.log(searchKey);

    return (
        <div className='header'>
            <div className="img-box-nav">
                <img src={shopimg} alt="" />
            </div>
            <div className='searches-box'>
                <input type="text" onChange={(e) => { setSearchKey(e.target.value) }}
                    placeholder='Search by title' />
                <div className='icons' >
                    <div className={isHorizontal ? "active1" : ""}>
                        <CiBoxList onClick={() => { setIsHorizontal(true) }} />
                    </div>
                    <div className={isHorizontal ? "" : "active1"}>
                        <IoGridOutline onClick={() => { setIsHorizontal(false) }} className={isHorizontal ? "" : "active1"} />
                    </div>
                    <div>
                        <NavLink to={"/addToCart"} className={"addtocart"}>
                            <FaShoppingCart />
                        </NavLink>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default Navbar