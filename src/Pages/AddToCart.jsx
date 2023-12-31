/* eslint-disable react/jsx-key */
import { useContext } from "react";
import { contextOfData } from "../Context/MyContext";

function AddToCart() {
    const { isHorizontal, productsAdded, data, setProductsAdded }
        = useContext(contextOfData);
    console.log(productsAdded, data)

    function RemoveFromCart(id) {
        let newarr = productsAdded.filter((id1) => id1 != id)
        setProductsAdded(newarr);

        localStorage.setItem("productsAdded", JSON.stringify(newarr));
    }

    function calculateTotal() {
        let sum = data.reduce((acc, obj) => {
            if (productsAdded.includes(obj.id)) {
                return acc + obj.price
            }
            return acc;
        }, 0)
        return sum;

    }




    return (
        <div className='home'>

            <div className={isHorizontal ? 'fr1' : "fr2"}>
                {
                    data.map((obj) => {
                        return productsAdded.includes(obj.id) && <div className={isHorizontal ? "horizontal" : "vertical"} >
                            <div className={isHorizontal ? "left1" : "left2"}>
                                <div className={isHorizontal ? 'img-box1' : "img-box2"}>

                                    <img src={obj.image
                                    } alt="" />
                                </div>


                                <div className={isHorizontal ? "badge1" : "badge2"}> {obj?.category?.slice(0, 11)}..</div>
                            </div>
                            <div className={isHorizontal ? "right1" : "right2"}>
                                <h4 className='title'>{obj.title.slice(0, 20)
                                }...</h4>
                                <div className='price-rating'>

                                    <div className='price'>Price:{obj?.price}{"$"}</div>
                                    <div className='rating'>Rating:{obj?.rating?.rate}</div>
                                </div>
                                <button onClick={() => {
                                    RemoveFromCart(obj.id)
                                }} className='addto-cart'> Remove Product </button>

                            </div>

                        </div>
                    })
                }

                {
                    productsAdded.length == 0 && <h3>Oops! No Items in Cart</h3>
                }
            </div>
            <h1 style={{ textAlign: "center" }}>Cart Collection</h1>
            <div className="List-Price">
                <div>

                    {
                        data.map((obj,) => {
                            return productsAdded.includes(obj.id) && (<div className="title-price">
                                <div>{obj.title.length > 17 ? obj.title.slice(0, 20) : obj.title}{" =>"}</div>
                                <div>{obj.price}{"$"}</div>
                            </div>

                            )
                        })

                    }
                </div>
                <div className="total">
                    <div>
                        Total Price:
                    </div>
                    <div>
                        {calculateTotal().toFixed(2)}$
                    </div>

                </div>
            </div>


        </div >
    )
}

export default AddToCart
