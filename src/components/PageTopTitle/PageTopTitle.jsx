import titleBgImg from "../../assets/TitleBg/PageTilteBg.jpg"
const PageTopTitle = ({ title }) => {
    return (
        <div
            className="bg-cover bg-center h-[150px] w-full flex items-center justify-center"
            style={{ backgroundImage: `url(${titleBgImg})` }}
        >
            <h1 className="text-5xl font-thin italic text-white">{title}</h1>
        </div>
    );
};

export default PageTopTitle;