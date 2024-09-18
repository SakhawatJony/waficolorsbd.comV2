import { useEffect, useState } from "react";
import PageTopTitle from "../../components/PageTopTitle/PageTopTitle";
import LatestNews from "../../components/LatestNews/LatestNews";

const LatestProducts = () => {

    const [itmes, setItems] = useState(null);

    useEffect(() => {
        fetch("/latestProducts.json")
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <section className="container mx-auto py-28">
            <PageTopTitle title="Latest Technological Products & Manual" />
            <div className="overflow-x-auto mx-auto">

                <h1 className="text-2xl text-center text-red-600 my-5">Click on the product name for product Manual</h1>
                <table className="min-w-full bg-white border border-gray-200">


                    <tbody>
                        {itmes?.map((product, index) => (
                            <tr key={product.id} className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}>
                                <td className="py-4 text-center px-4 border-b border-r border-gray-200">{product.name}</td>
                                <td className="py-2 px-4 border-b border-r border-gray-200">
                                    <a className="hover:text-blue-600" href="/">{product.products1}</a>
                                    <br />
                                    <a className="hover:text-blue-600" href="/">{product?.products2}</a>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <LatestNews />

        </section>
    );
};

export default LatestProducts;