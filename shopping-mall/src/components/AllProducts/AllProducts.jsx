import { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";


const AllProducts = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])
    return (
        <div>
            <h1 className="text-3xl">AllProducts</h1>
            {
                products.map(product=> <SingleProduct product={product}/>)
            }
        </div>
    );
};

export default AllProducts;