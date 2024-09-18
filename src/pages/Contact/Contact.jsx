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
                        Rupayan Taj, Flat: K-3 (3rd Floor), Plot No: 1, 1/1 NayaPalton, Dhaka-1000, Bangladesh.
                        <br />
                        Phone: (02)-9349525
                        <br />
                        Mobile: 01711665182
                        <br />
                        Fax: (02)-8391657
                        <br />
                        Email: waficolorsbd@gamil.com
                        <br />
                        Website: www.waficolorsbd.com
                    </address>
                </div>

                <div className="lg:flex mdl:flex lg:gap-12 mdl:gap-10 mt-4 ">
                    <address>
                        <p className="text-2xl text-orange-500 font-bold border-b">DHAKA BRANCH</p>
                        <br />
                        Dhaka Branch: 28 No. Old Mugholtuli,
                        <br />
                        Nawabpur, Dhaka
                        <br />
                        Phone: (02)-9583198
                        <br />
                        Mobile: 01712897339, 01711667583
                        <br />
                        Email: dhaka@waficolorsbd.com

                    </address>
                    <address>
                        <p className="text-2xl text-orange-500 font-bold border-b">KONABARI BRANCH</p>
                        <br />
                        Mollah Super market, BSCIC main Gait.
                        <br />
                        Phone: (02)-9297637
                        <br />
                        Mobile: 01711665760, 01711667594
                        <br />
                        Email: konabari@waficolorsbd.com
                    </address>
                    <address>
                        <p className="text-2xl text-orange-500 font-bold border-b">MIRPUR BRANCH</p>
                        <br />
                        House#21, Block#A, Ave#1,
                        <br />
                        Section#11, Mirpur,
                        <br />
                        Dhaka#1216. Bangladesh
                        <br />
                        Mobile: 01682-714945, 1714-810148
                        <br />
                        Email: mirpur@waficolorsbd.com
                    </address>
                </div>
                <div className="lg:flex mdl:flex gap-12 my-12">
                    <address>
                        <p className="text-2xl text-orange-500 font-bold border-b">NARAYANGONJ BRANCH</p>
                        <br />
                        Jamina Super Market, West Masdair Gorosthan
                        <br />
                        Rd, Enayetnagar-1421, Narayanganj.
                        <br />
                        Mobile: 01711667027, 01711667014
                        <br />
                        Email: narayangonj@waficolorsbd.com
                    </address>
                    <address>
                        <p className="text-2xl text-orange-500 font-bold border-b">CHATTOGRAM BRANCH</p>
                        <br />
                        Shop # 1, 3, Ahmed Mansion 1128, Sheikh
                        <br />
                        Mujibur Rhaman Road, Dewanhat, Ctg.
                        <br />
                        Mobile: 01711667571
                        <br />
                        Email: chattagram@waficolorsbd.com
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