import useProductsFetch from "../../context/useProductsFetch";
import ProductCard from "../ProductCard/ProductCard";
import productTileImg from "../../assets/TitleBg/p1.png";

const ProductCatalogue = () => {
  const { data, loading, error } = useProductsFetch();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const fortinData = data.slice(0, 8);

  return (
    <div className="container mx-auto">
      <img className="mx-auto my-12" src={productTileImg} alt="" />

      <div className="grid grid-cols-4 gap-6">
        {fortinData &&
          fortinData?.map((item) => <ProductCard key={item.id} item={item} />)}
      </div>

      <button className="flex p-4 my-6 hover:bg-sky-500 px-10 mx-auto bg-red-500 text-white rounded">
        All Products
      </button>
    </div>
  );
};

export default ProductCatalogue;
