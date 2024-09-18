import { useEffect, useState } from "react";
import PageTopTitle from "../../components/PageTopTitle/PageTopTitle";
import LatestNews from "../../components/LatestNews/LatestNews";

const ProductList = () => {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch("/productList.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <section className="container mx-auto py-24">
            <PageTopTitle title="Product List" />
            {/* Product List 1 */}
            <div className="overflow-x-auto mx-auto">
                <h1 className="text-xl text-white bg-orange-500 text-center py-3 rounded mt-5 font-semibold">FOR ELASTIC READY PRINT</h1>
                <h1 className="text-xl text-red-500 my-4">WHITE RUBBER PASTE:</h1>
                <table className="min-w-full bg-white border border-gray-200 text-center">

                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-4 px-4 border-b border-gray-200">Product Name</th>
                            <th className="py-2 px-4 border-b border-gray-200">Pack Size</th>
                            <th className="py-2 px-4 border-b border-gray-200">MSDS</th>
                            <th className="py-2 px-4 border-b border-gray-200">TDS</th>
                            <th className="py-2 px-4 border-b border-gray-200">CHEMCHECK</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((product, index) => (
                            <tr key={product.id} className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}>
                                <td className="py-4 px-4 border-b border-r border-gray-200">{product.name}</td>
                                <td className="py-4 px-4 border-b border-r border-gray-200">{product.packSize}</td>
                                <td className="py-2 px-4 border-b border-r border-gray-200">{product.msds}</td>
                                <td className="py-2 px-4 border-b border-r border-gray-200">{product.tds}</td>
                                <td className="py-2 px-4 border-b border-r border-gray-200">{product.chemcheck}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Product List 2 */}
            <div className="overflow-x-auto mx-auto mt-12">

                <h1 className="text-xl text-red-500 my-4">WHITE RUBBER PASTE:</h1>
                <table className="min-w-full bg-white border border-gray-200 text-center">

                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-4 px-4 border-b border-gray-200">Product Name</th>
                            <th className="py-2 px-4 border-b border-gray-200">Pack Size</th>
                            <th className="py-2 px-4 border-b border-gray-200">MSDS</th>
                            <th className="py-2 px-4 border-b border-gray-200">TDS</th>
                            <th className="py-2 px-4 border-b border-gray-200">CHEMCHECK</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((product, index) => (
                            <tr key={product.id} className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}>
                                <td className="py-4 px-4 border-b border-r border-gray-200">{product.name}</td>
                                <td className="py-4 px-4 border-b border-r border-gray-200">{product.packSize}</td>
                                <td className="py-2 px-4 border-b border-r border-gray-200">{product.msds}</td>
                                <td className="py-2 px-4 border-b border-r border-gray-200">{product.tds}</td>
                                <td className="py-2 px-4 border-b border-r border-gray-200">{product.chemcheck}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <LatestNews />

        </section>
    );
};

export default ProductList;