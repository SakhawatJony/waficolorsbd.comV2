import titleBgImg from "../../assets/TitleBg/PageTilteBg.jpg"
const PageTopTitle = ({ title }) => {
    return (
        <div className="bg-cover w-full container rounded bg-center lg:h-[150px] mdl:h-[140px] md:h-32 sm:h-28 flex items-center justify-center"
            style={{ backgroundImage: `url(${titleBgImg})` }}
        >
            <h1 className="lg:text-5xl mdl:text-4xl md:text-3xl sm:text-2xl font-thin italic text-white">{title}</h1>
        </div>
    );
};

export default PageTopTitle;