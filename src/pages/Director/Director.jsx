import LatestNews from "../../components/LatestNews/LatestNews";
import PageTopTitle from "../../components/PageTopTitle/PageTopTitle";

import directorImg1 from "../../assets/Director-Images/kabir_bhai.png";
import directorImg2 from "../../assets/Director-Images/aric.png";

const Director = () => {
    return (
        <section className="container mx-auto pt-24">
            <PageTopTitle title="Director Message" />
            {/* 1st Director  */}
            <div>
                <h1 className="lg:text-5xl mdl:text-4xl md:text-3xl sm:text-2xl text-orange-500 my-5">MANAGING DIRECTOR MESSAGE</h1>
                <div className="lg:flex mdl:flex space-y-3 ">

                    <img className="lg:w-4/12 mdl:w-4/12  sm:w-full h-[450px] bg-red-300" src={directorImg1} alt="" />

                    <div className="lg:w-7/12 mdl:w-4/12  sm:w-full text-lg bg-red-5000 mx-auto">
                        <p> The Silkflex Bangladesh Limited is the sole agent of Silkflex Polymer SND BHD, Malaysia. We started our journey with Silkflex Polymers 14 years ago. Silkflex is present in the entire Printing market of Bangladesh with full commitment to our valued customers to provide up to date product & technical support based on current fashion trend.</p>
                        <br />
                        <p> By the grace of Almighty, we are now the market leader in screen printing inks in Bangladesh. It might be our products and services that said the way for the company’s distinctive success story. However, it’s never just about the products, but always about the people too and about the clear business ethics to the customers.</p>
                        <br />
                        <p>We are directly Importing, Indenting, Trading and Supplying to all blue chips companies with maintaining good relationship, by offering best quality with lowest price. Since we are importing directly from the manufacturer and supplying to the end user, so we can able to maintain quality with lowest price. We are assuring you that our products are the world best (better than Japan, German and another country) by excellent hand feel, high elasticity, high coverage, excellent brightness and consumption also 30% less.</p>
                    </div>
                </div>
                <div className=" mt-2 mx-auto">
                    <p>We have committed ourselves to share all effort & success with our customers. Everything we do is based on our corporate values: Achievement, Respect, Responsibility, Integrity and Transparency. By this time we successfully organized 6 (Fix) technical seminar on the objective of increasing the peoples knowledge in terms of products & applications.</p>
                    <p className="my-3">Thank you for your confidence to be with us and future support to Silkflex Bangladesh Limited. We always ready to serve you.Sincerely,</p>

                    <h2 className="text-lg mt-6 font-bold">Md. Kabir Mollah</h2>
                    <h4 className="text-md  font-bold">Managing Director</h4>
                </div>
            </div>

            {/* 2nd Director  */}
            <div className="my-12">
                <h1 className="lg:text-5xl mdl:text-4xl md:text-3xl sm:text-2xl text-orange-500 my-5">DIRECTOR MESSAGE</h1>
                <div className="lg:flex mdl:flex ">

                    <img className="lg:w-3/12 mdl:w-3/12 sm:w-full h-[450px] bg-red-300" src={directorImg2} alt="" />

                    <div className="lg:w-8/12 mdl:w-8/12 sm:w-full text-lg bg-red-5000 mx-auto">
                        <p>Greetings from Silkflex Malaysia. It gives us great pleasure to announce the setup of our branch office in Bangladesh. Silkflex Bangladesh Ltd. will serve the textile printing market in all aspects of the business which include technical support, logistics and value addition. In line with our expansion program, we have acquired land at strategic areas for centralized delivery and local production of textile chemicals.</p>
                        <br />
                        <p> We are extremely thankful to our customers for their belief and strong support for our products which have propelled us to the top position in Bangladesh in terms of textile ink supplies. Our greatest gratitude and appreciation to our bhai (brother) Kabir Mollah for his hard work, persistence and creativity in the highly successful promotion of the Silkflex brand name in Bangladesh. Success is never possible without great partnership and collaboration.</p>
                        <br />
                        <p>We look forward to the introduction of new and innovative products in order to help prepare the Bangladesh textile printing market for the future. We also pledge to work hard to serve the Bangladesh textile printing industry with the greatest sincerity, honesty and consistency. Thank you very much. Sincerely,</p>
                    </div>
                </div>
                <div className=" mt-2 mx-auto">
                    <h2 className="text-xl  font-semibold">Dr. Eric HL Tan</h2>
                    <h4 className="text-lg  font-semibold">Director</h4>
                    <p className="text-md">Silkflex Malaysia</p>
                </div>
            </div>


            <LatestNews />
        </section>
    );
};

export default Director;