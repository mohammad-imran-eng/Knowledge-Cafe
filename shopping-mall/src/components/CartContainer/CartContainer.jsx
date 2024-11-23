import About from "../About/About";
import Cart from "../Cart/Cart";


const CartContainer = ({handleIsActive,isActive}) => {
    return (
        <div>
            <h1 className="text-3xl">Cart Container</h1>
            <div className="flex justify-around mt-5 cursor-pointer">
                <div onClick={()=>handleIsActive('cart')} className={`${isActive.cart?"bg-green-500 text-white":""} py-2 px-3`}>Cart</div>
                <div onClick={()=>handleIsActive('about')} className={`${isActive.cart?"":"bg-green-500 text-white "} py-2 px-3`}>About</div>
            </div>
            {
                isActive.cart? <Cart />: <About />
            }
        </div>
    );
};

export default CartContainer;