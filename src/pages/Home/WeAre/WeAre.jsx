import home1 from "../../../assets/HomeImage/WeAre/home1.png";
import home2 from "../../../assets/HomeImage/WeAre/home2.png";
import home3 from "../../../assets/HomeImage/WeAre/home3.png";
import icon1 from "../../../assets/HomeImage/WeAre/icon-1.png";
import icon2 from "../../../assets/HomeImage/WeAre/icon-2.png";
import icon3 from "../../../assets/HomeImage/WeAre/icon-3.png";

const WeAre = () => {
  const iconSectionData = [
    {
      id: 1,
      title: "R&D",
      icon: icon1,
      desc: "We Have an expert team of R&D who works vigorously to solve the technical issues that arise from the customer's End.",
    },
    {
      id: 2,
      title: "Application Unit",
      icon: icon2,
      desc: "Carefully performs the quality control tests of all raw materials and all end products according to compliance.",
    },
    {
      id: 3,
      title: "Quality Assurance Unit",
      icon: icon3,
      desc: "Our Quality Assurance team closely works with global Certification Companies like OEKO-TEX, GOTS, BLUE SIGN to certify our products according to their standards..",
    },
  ];

  return (
    <section>
      <div className="container mx-auto sm:mt-4 mdl:pt-10 lg:pt-12">
        <div className="lg:flex mdl:flex lg:gap-8 mdl:gap-4 lg:justify-between lg:items-center">
          <div className="lg:w-1/2 mdl:w-1/2 space-y-5">
            <div>
              <img
                className="lg:w-[490px] mdl:-[400px] sm:w-full mx-auto"
                src={home1}
                alt="home image 1"
              />
            </div>
            <div className="lg:flex mdl:flex lg:gap-10 mdl:gap-3 justify-center">
              <img className="lg:w-56 mdl:w-44 sml:w-full sm:w-full lg:h-56 mdl:h-52 sm:h-48 sm:mb-3" src={home2} alt="" />
              <img className="lg:w-56 mdl:w-44 sml:w-full sm:w-full lg:h-56 mdl:h-52 sm:h-48" src={home3} alt="" />
            </div>
          </div>
          <div className="lg:w-1/2 mdl:w-1/2">
            <h1 className="lg:text-4xl mdl:text-3xl md:text-2xl text-xl text-center font-semibold">WHO WE ARE</h1>
            <div className="space-y-3 py-8 lg:text-lg mdl:text-lg md:text-sm">
              <p>
                Welcome to the web site of Waficolorsbd Bangladesh Limited and
                thank you for your interest. This site will give you an insight
                into our company, its products and services, and how we work
                together with our business partner & the customers. Waficolorsbd
                Bangladesh Limited is the exclusive distributor of Waficolorsbd
                Polymer SND BHD, Malaysia.
              </p>
              <p>
                We are operating our business from last 18 years under the name
                of K. M. Enterprise. Waficolorsbd Bangladesh is the pioneer
                textile printing inks supplier in Bangladesh. It might be our
                products and services that said the way for the company’s
                distinctive success story. However, it’s never just about the
                products, but always about the people too and about the clear
                business ethics to the customers.
              </p>
              <p>
                We are offering best quality with lowest price. Since we are
                importing directly from the manufacturer and supplying to the
                end user, so we can able to maintain quality with lowest price.
                We are assuring you that our products are the world best (better
                than Japan, German and another country) by excellent hand feel,
                high elasticity, high coverage, excellent brightness and
                consumption also 30% less.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* icon section */}
      <div className="container mx-auto lg:flex mdl:flex md:flex justify-between py-12">
        {iconSectionData.map((item) => (
          <div
            key={item.id}
            className="w-96 sm:w-full text-center space-y-3 flex flex-col justify-center items-center"
          >
            <img src={item.icon} alt="icon" />
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeAre;
