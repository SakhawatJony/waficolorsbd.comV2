import PageTopTitle from "../../components/PageTopTitle/PageTopTitle";
import ProductCard from "../../components/ProductCard/ProductCard";
import useProductsFetch from "../../context/useProductsFetch";

const AllProduct = () => {

    const { data, loading, error } = useProductsFetch();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;


    return (
        <section className="container mx-auto py-24">

            <PageTopTitle title={"Products Catalogue"} />
            <h1 className="text-center text-4xl mt-4">Product Catalogue</h1>
            <div className="grid grid-cols-4 gap-6 mt-12">
                {data && data?.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};

export default AllProduct;