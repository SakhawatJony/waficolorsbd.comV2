import PageTopTitle from "../../components/PageTopTitle/PageTopTitle";
import bdmap from "../../assets/Contact/bdmap.png";

const Contact = () => {
    return (
        <section className="container mx-auto py-24">
            <PageTopTitle title={"contact Us"} />
            <div className="lg:flex mdl:flex mdl:flex-col lg:flex-col lg:px-60">
                <img className="mx-auto sm:w-full lg:p-20" src={bdmap} alt="BdMap" />

                {/* all offece adrress  */}
                <div>
                    <address className="mx-auto">
                        <p className="text-2xl text-orange-500 font-bold border-b">CORPORATE OFFICE</p>
                        <br />
                        935, Mizmizi Kanda Para Siddirgonj,Narayangonj-1430, Bangladesh
                        <br />
                        Phone: +8801682714945
                        <br />
                        Mobile: +8801714810148
                        <br />
                        Email: info@waficolorsbd.com, waficolorsbd@gmail.com
                        <br />
                        Website: www.waficolorsbd.com
                    </address>
                </div>

                <div className="lg:flex mdl:flex lg:gap-12 mdl:gap-10 mt-4 ">
                    <address>
                        <p className="text-2xl text-orange-500 font-bold border-b">DHAKA BRANCH</p>
                        <br />
                        935, Mizmizi Kanda Para Siddirgonj,Narayangonj-1430, Bangladesh
                        <br />
                        Phone: +8801682714945
                        <br />
                        Mobile: +8801714810148
                        <br />
                        Email: info@waficolorsbd.com, waficolorsbd@gmail.com
                        <br />
                        Website: www.waficolorsbd.com

                    </address>
                    <address>
                        <p className="text-2xl text-orange-500 font-bold border-b">KONABARI BRANCH</p>
                        <br />
                        935, Mizmizi Kanda Para Siddirgonj,Narayangonj-1430, Bangladesh
                        <br />
                        Phone: +8801682714945
                        <br />
                        Mobile: +8801714810148
                        <br />
                        Email: info@waficolorsbd.com, waficolorsbd@gmail.com
                        <br />
                        Website: www.waficolorsbd.com
                    </address>
                    <address>
                        <p className="text-2xl text-orange-500 font-bold border-b">MIRPUR BRANCH</p>
                        <br />
                        935, Mizmizi Kanda Para Siddirgonj,Narayangonj-1430, Bangladesh
                        <br />
                        Phone: +8801682714945
                        <br />
                        Mobile: +8801714810148
                        <br />
                        Email: info@waficolorsbd.com, waficolorsbd@gmail.com
                        <br />
                        Website: www.waficolorsbd.com
                    </address>
                </div>
                <div className="lg:flex mdl:flex gap-12 my-12">
                    <address>
                        <p className="text-2xl text-orange-500 font-bold border-b">NARAYANGONJ BRANCH</p>
                        <br />
                        935, Mizmizi Kanda Para Siddirgonj,Narayangonj-1430, Bangladesh
                        <br />
                        Phone: +8801682714945
                        <br />
                        Mobile: +8801714810148
                        <br />
                        Email: info@waficolorsbd.com, waficolorsbd@gmail.com
                        <br />
                        Website: www.waficolorsbd.com
                    </address>
                    <address>
                        <p className="text-2xl text-orange-500 font-bold border-b">CHATTOGRAM BRANCH</p>
                        <br />
                        935, Mizmizi Kanda Para Siddirgonj,Narayangonj-1430, Bangladesh
                        <br />
                        Phone: +8801682714945
                        <br />
                        Mobile: +8801714810148
                        <br />
                        Email: info@waficolorsbd.com, waficolorsbd@gmail.com
                        <br />
                        Website: www.waficolorsbd.com
                    </address>
                </div>
            </div>
            {/* from and map  */}
            <div className="lg:px-56">
                <h1 className="uppercase text-3xl my-6 font-semibold">Contact Us</h1>
                <div className="lg:flex mdl:flex gap-6">
                    {/* constct Form  */}
                    <form className="card-body p-0 mx-auto">
                        <div className="form-control w-full ">
                            <input type="text" placeholder="Enter Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full mt-4">
                            <input type="text" placeholder="Enter Address" className="input input-bordered" required />
                        </div>


                        <div className="form-control mt-4">
                            <input type="text" placeholder="Enter Phone" className="input input-bordered" required />
                        </div>
                        <label className="form-control mt-4">
                            <textarea className="textarea textarea-bordered h-32" placeholder="Message Descriptions" required></textarea>
                        </label>
                        <button className="btn p-4 mt-10 h-16 w-44 bg-cyan-500 text-white font-bold rounded hover:bg-red-500 border-b-4 my-4 uppercase">Send</button>

                    </form>
                    {/*TODO google Map Add  */}
                    <div className="lg:w-1/2 mdl:w-1/2 lg:mt-0 mdl:mt-0 sm:mt-8">

                        <iframe width="100%" height="450" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Rupayan%20Taj,%20Flat:%20K-3%20(3rd%20Floor)%20Plot%20No:%201,%201/1%20NayaPalton,%20Dhaka%201000,%20Bangladesh+(Waficolorsbd.com)&amp;t=p&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;