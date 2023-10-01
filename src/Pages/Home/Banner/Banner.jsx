import { FaBriefcase, FaVenus } from "react-icons/fa";
const Banner = () => {
    return (
        <div className="px-10 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="mx-12">
                    <p> <span className="line">----</span> Welcome to <span className="text-teal-500 font-medium">aaliver</span></p>
                    <h1 className="font-bold text-3xl py-4">The Biggest <span className="text-teal-500">Nutricare</span> <br /> in Bangladesh</h1>
                    <p>Discover the power of nutrition and its impact on your overall well-being. Learn how a healthy diet can boost your immune system, increase energy levels, manage weight, and reduce the risk of chronic diseases. Take charge of your health with our expert advice and guidance.</p>
                </div>
                <div className="mx-auto">
                    <img className="w-96 max-h-96" src="https://i.ibb.co/WvgP9LB/child-beauty.jpg" alt="" />
                    <p className="-mt-6 text-center">Learn How to Take Care of Your Baby</p>
                </div>
            </div>
            <div className="text-center py-10">
                <p>Search Box</p>
                <input type="text" placeholder="Candidate Skills                 Location"  className="input input-bordered w-full max-w-xs" /> 
                <button className="btn btn-accent">Start Hiring</button>
            </div>
        </div>
    );
};

export default Banner;