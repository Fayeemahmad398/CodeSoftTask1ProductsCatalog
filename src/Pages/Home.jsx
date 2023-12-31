/* eslint-disable react/jsx-key */
import { useContext, useRef, } from 'react'
import { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { contextOfData } from '../Context/MyContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
    const { data, setData, isHorizontal, setProductsAdded, setCopyData, productsAdded, searchKey, copydata }
        = useContext(contextOfData);
    const ref = useRef("");

    async function fetchData() {
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setData(data);
            setCopyData(data);
            localStorage.setItem("data", JSON.stringify(data));

        } catch (error) {
            console.log(error);
            toast.error("Failed to fetch data");
        }
    }


    useEffect(() => {
        fetchData();
    }, [])


    function handleAddToCart(id) {
        if (productsAdded.includes(id)) {
            toast.warn("Allready exist in your cart !")
            return;
        }
        productsAdded.push(id);
        setProductsAdded([...productsAdded]);
        localStorage.setItem("productsAdded", JSON.stringify([...productsAdded]));

        if (productsAdded.includes(id)) {
            toast.success("Successfully Added to your cart!")
            return;

        }

    }


    useEffect(() => {

        ref.current = setTimeout(() => {
            searchOptimised();
        }, 500);

        return () => {
            clearTimeout(ref.current);
        }

    }, [searchKey])

    function searchOptimised() {
        if (searchKey)
            setData(
                copydata.filter((obj) =>
                    obj.title.toLowerCase().includes(searchKey.trim().toLowerCase())
                ))
    }
    console.log(data, copydata);
    return (
        <div className='home'>
            <ToastContainer />
            <Navbar />
            <div className={isHorizontal ? 'fr1' : "fr2"}>
                {
                    data.map((obj) => {
                        return <div className={isHorizontal ? "horizontal" : "vertical"}>
                            <div className={isHorizontal ? "left1" : "left2"}>
                                <div className={isHorizontal ? 'img-box1' : "img-box2"}>

                                    <img src={obj.image
                                    } alt="" />
                                </div>


                                <div className={isHorizontal ? "badge1" : "badge2"}> {obj?.category?.slice(0, 11)}..</div>
                            </div>
                            <div className={isHorizontal ? "right1" : "right2"}>
                                <h4 className='title'>{!isHorizontal ? obj?.title?.slice(0, 20) : obj.title
                                }...</h4>
                                <div className='price-rating'>

                                    <div className='price'>Price:{obj?.price}{"$"}</div>
                                    <div className='rating'>Rating:{obj?.rating?.rate}</div>
                                </div>
                                <button onClick={() => {
                                    handleAddToCart(obj.id)
                                }} className='addto-cart'> {productsAdded.includes(obj.id) ? "Added" : "AddToCart"} </button>

                            </div>

                        </div>
                    })
                }
            </div>
            {
                searchKey && data.length == 0 &&
                <div>No item found</div>
            }
            {
                !searchKey && data.length == 0 &&
                <div>Loading...</div>
            }


        </div>
    )
}

export default Home