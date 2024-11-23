import './SingleProduct.css'

const SingleProduct = ({product}) => {
    const {id,name,img,description,category,isFeature,price} = product;
    return (
        <div className="my-10 card">
                <h1 className="bg-green-400 text-white h-10 w-10 items-center flex justify-center rounded-full">id: {id}</h1>
                <h1 className="font-bold text-2xl mb-5">{name}</h1>
                <img className='h-[250px] w-[350px]' src={img} alt="" />
                <p className="text-[20px] font-medium">{category}</p>
                <p className="w-[350px]">{description}</p>
                <p>{price}</p>   
                <div className='flex justify-center'>
                <button className='inline bg-green-800 text-white font-bold py-2 px-3 rounded hover:bg-green-500'>Add Cart</button>
                </div>
        </div>
    );
};

export default SingleProduct;