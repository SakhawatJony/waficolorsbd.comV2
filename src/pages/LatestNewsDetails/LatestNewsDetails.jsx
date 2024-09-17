
import LatestNews from "../../components/LatestNews/LatestNews";
import PageTopTitle from "../../components/PageTopTitle/PageTopTitle";
import { useLocation } from "react-router-dom";

const LatestNewsDetails = () => {

    const location = useLocation(); // Get the state passed through Link
    const { newsItem } = location?.state || {}; // Extract newsItem from state

    return (
        <section className="container pt-24 mx-auto">
            <PageTopTitle title="Detail Latest News" />

            {/* News details table  */}

            <div className="mx-auto mt-10">
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                    <tbody>
                        <tr className="border-b">
                            <td className="p-4 w-96 font-semibold text-left border-r-2 bg-gray-100">News Title:</td>
                            <td className="p-4  bg-gray-100">{newsItem?.title}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-4 font-semibold border-r-2 text-left">Date:</td>
                            <td className="p-4 ">{newsItem?.date}</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-semibold text-left border-r-2 bg-gray-100">Description:</td>
                            <td className="p-4 bg-gray-100">{newsItem?.desc}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-4 mt-10 font-semibold text-left absolute">
                                <a
                                    href={newsItem.img}
                                    download
                                    target="_blank"
                                    className="inline-block bg-cyan-600 text-white py-2 px-4 rounded hover:bg-blue-600"
                                >
                                    Click To Download Image
                                </a>
                            </td>
                            <td className="p-4 text-right">
                                <img src={newsItem?.img} alt="News" className="w-full h-auto" />
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>


            <LatestNews />

        </section>
    );
};

export default LatestNewsDetails;