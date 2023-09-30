
const Banner = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3>Welcome to aaliver</h3>
                    <h1>The Biggest Nutricare in Bangladesh</h1>
                    <p>Discover the power of nutrition and its impact on your overall well-being. Learn how a healthy diet can boost your immune system, increase energy levels, manage weight, and reduce the risk of chronic diseases. Take charge of your health with our expert advice and guidance.</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <p>Learn How to Take Care of Your Baby</p>
                </div>
            </div>
            <div>
                <p>Search Box</p>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <button className="btn btn-primary">Primary</button>
            </div>
        </>
    );
};

export default Banner;