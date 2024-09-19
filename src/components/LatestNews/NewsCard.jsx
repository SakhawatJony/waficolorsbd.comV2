import { Link } from "react-router-dom";

const NewsCard = ({ item }) => {
    const date = new Date(item?.date);

    // Convert the date to the format: 13-May-2023
    const formattedDate = date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    const sliceDesc = item?.desc.split(" ").slice(0, 20).join(" ") + (item?.desc.split(" ").length > 20 ? "..." : "")
    return (
        <Link to={"/latest-news-details"} state={{ newsItem: item ? item : "" }}>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img
                        className="w-72 h-72"
                        src={item?.img}
                        alt="certification" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{item?.title}</h2>
                    <p className="text-red-500">{formattedDate}</p>
                    <p className="text-xl">{sliceDesc}</p>
                </div>
            </div>
        </Link>
    );


};

export default NewsCard;
