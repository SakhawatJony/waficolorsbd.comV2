import PageTopTitle from "../../components/PageTopTitle/PageTopTitle";
import bdmap from "../../assets/Contact/bdmap.png";

const Contact = () => {
    return (
        <section className="container mx-auto py-24">
            <PageTopTitle title={"contact Us"} />
            <div className="flex flex-col px-60">
                <img className="mx-auto p-20" src={bdmap} alt="BdMap" />

                {/* all offece adrress  */}
                <div className="">
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
                        Email: mrkabir@silkflexbd.com, mrkabir@kmenterprisebd.com
                        <br />
                        Website: www.silkflexbd.com
                    </address>
                </div>

                <div className="flex gap-12 mt-4 ">
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
                        Email: dhaka@silkflexbd.com

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
                        Email: konabari@silkflexbd.com
                    </address>
                    <address>
                        <p className="text-2xl text-orange-500 font-bold border-b">MIRPUR BRANCH</p>
                        <br />
                        Sec # 6, Block # Kha, Rd # 1, Plot # 17, Sanpara
                        <br />
                        Parbota, Mirpur-10
                        <br />
                        Mobile: 01711667023, 01711665695
                        <br />
                        Email: mirpur@silkflexbd.com
                    </address>
                </div>
                <div className="flex gap-12 my-12">
                    <address>
                        <p className="text-2xl text-orange-500 font-bold border-b">NARAYANGONJ BRANCH</p>
                        <br />
                        Jamina Super Market, West Masdair Gorosthan
                        <br />
                        Rd, Enayetnagar-1421, Narayanganj.
                        <br />
                        Mobile: 01711667027, 01711667014
                        <br />
                        Email: narayangonj@silkflexbd.com
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
                        Email: chattagram@silkflexbd.com
                    </address>
                </div>
            </div>
            {/* from and map  */}
            <div className="px-60">
                <h1 className="uppercase text-3xl my-6 font-semibold">Contact Us</h1>
                <div className="flex gap-6">
                    {/* constct Form  */}
                    <form className="card-body p-0 mx-auto">
                        <div className="form-control w-full ">
                            <input type="text" placeholder="Enter Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full mt-3">
                            <input type="text" placeholder="Enter Address" className="input input-bordered" required />
                        </div>


                        <div className="form-control mt-3">
                            <input type="text" placeholder="Enter Phone" className="input input-bordered" required />
                        </div>
                        <label className="form-control mt-3">
                            <textarea className="textarea textarea-bordered h-32" placeholder="Message Descriptions" required></textarea>
                        </label>
                        <button className="btn p-4 h-16 w-44 bg-cyan-500 text-white font-bold rounded hover:bg-red-500 border-b-4 my-4 uppercase">Send</button>

                    </form>
                    {/*TODO google Map Add  */}
                    <div className="w-1/2 bg-slate-400">
                        <h1>Googe map ADD</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;