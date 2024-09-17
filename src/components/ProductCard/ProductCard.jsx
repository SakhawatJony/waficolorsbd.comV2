import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {

    return (
        <div>
            {/*TODO if product details show ,do you provide id inculedus link  */}

            <Link to={"/products-catalogues"}>
                <div className="group overflow-hidden  transition-transform transform hover:scale-110 duration-300">
                    {/* Image */}
                    <img
                        src={item.img}
                        alt={item.title}
                        className="w-[400px] h-[300px] object-cover rounded mx-auto"
                    />

                    {/* Title bar */}
                    <div className="absolute w-52 right-14 rounded-sm bottom-20 bg-black bg-opacity-40 text-white text-center py-3 transition-opacity duration-300 group-hover:opacity-100">
                        <h2 className="text-md uppercase font-bold mx-auto">{item.title}</h2>
                    </div>
                </div>
                <h2 className="text-md text-center text-gray-800 my-3 uppercase font-semibold">{item.title}</h2>

            </Link>
        </div>
    );
};

export default ProductCard;