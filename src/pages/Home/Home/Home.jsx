import LatestNews from "../../../components/LatestNews/LatestNews";
import ProductCatalogue from "../../../components/ProductCatalogue/ProductCatalogue";
import Banner from "../Banner/Banner";
import WeAre from "../WeAre/WeAre";

const Home = () => {
    return (
        <div className="pt-28">
            <Banner />
            <WeAre />
            <ProductCatalogue />
            <LatestNews />
        </div>
    );
};

export default Home;