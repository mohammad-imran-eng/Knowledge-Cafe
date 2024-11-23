import { MdOutlineStoreMallDirectory } from "react-icons/md";
import './Navbar.css'


const Navbar = () => {
    
    return (
        <div>
            <div className="flex justify-around bg-gray-200 items-center p-5">
                <div>
                    <h1 className="text-5xl"><MdOutlineStoreMallDirectory /></h1>
                </div>
                <div>
                    <ul className="flex text-2xl font-bold">
                        <li>Home</li>
                        <li>Product</li>
                        <li>Cart 1</li>
                        <li>$ 500</li>
                    </ul>
                </div>
            </div>
            

        </div>
    );
};

export default Navbar;