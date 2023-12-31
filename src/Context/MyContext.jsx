/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react"


export const contextOfData = createContext();

function MyContext({ children }) {
    const [data, setData] = useState(JSON.parse(localStorage.getItem("data")) || []);

    const [copydata, setCopyData] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const [productsAdded, setProductsAdded] =
        useState(JSON.parse(localStorage.getItem("productsAdded")) || []);
    const [isHorizontal, setIsHorizontal] = useState(true);


    const value = {
        data: data,
        setData: setData,
        searchKey: searchKey,
        setSearchKey: setSearchKey,
        productsAdded: productsAdded,
        setProductsAdded: setProductsAdded,
        isHorizontal: isHorizontal,
        setIsHorizontal: setIsHorizontal,
        copydata: copydata,
        setCopyData: setCopyData

    }

    return (
        <contextOfData.Provider value={value}>
            {children}
        </contextOfData.Provider>
    )
}

export default MyContext
