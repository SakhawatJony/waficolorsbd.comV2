import { Link } from "react-router-dom";

const NewsCard = ({ item }) => {
  const date = new Date(item?.date);

  // Convert the date to the format: 13-May-2023
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const sliceDesc =
    item?.desc.split(" ").slice(0, 20).join(" ") +
    (item?.desc.split(" ").length > 20 ? "..." : "");
  return (
    <Link>
      <div
        className="card card-compact  shadow-xl"
        style={{ height: "100%", width: "100%" }}
      >
        <figure>
          <img className="w-72 h-72" src={item?.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 style={{ fontSize: "15px", fontWeight: 600 }}>{item?.title}</h2>
          <p className="text-red-500">{formattedDate}</p>
          <p style={{ fontSize: "20px", lineHeight: "30px", color: "#7A838B" }}>
            {sliceDesc}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
