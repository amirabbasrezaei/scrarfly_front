import Login from "../login/Login"
import CartInfo from "../CartInfo/CartInfo"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import toast from "react-hot-toast"


const getData = async (productID) => {
    const response = await fetch(`https://185.235.41.234/products/${productID}/`)
    const data = await response.json()
    return data
}

export default function Product() {
    const [loginState, setLoginState] = useState(false)
    const [product, setproduct] = useState()
    let params = useParams()
 
        useEffect(() => {
            getData(params.productID).then(e => {
                // setproduct(e)
                console.log(e);
                toast.success('data retrieved')
            })

        }, [params])
        
       
    

    

    return(
        <div className="block  flex-col h-screen bg-gray-200">
            <div className="flex flex-col w-full h-full p-6 justify-between items-center gap-6">
                <div id="productDetail" className="  rounded-2xl bg-white p-4 gap-4 flex flex-col ">
                <img src={product?.image} className="w-full h-fit rounded-2xl" alt={product?.name} />
                <div className="flex flex-col justify-between gap-4">
                    <p className="font-[600] text-gray-800 texg-lg">{product?.name}</p>
                    <span className="whitespace-nowrap font-[700] text-gray-800 texg-lg self-end">{product?.sell_price} تومان</span>
                </div>
                </div> 
                
                {loginState ? <CartInfo /> : <Login setLogin={setLoginState}/>}
                
            </div>
        </div>
    )
}

