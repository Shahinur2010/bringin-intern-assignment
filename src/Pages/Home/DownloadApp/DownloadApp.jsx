

const DownloadApp = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <img src="aaa" alt="" />
            </div>
            <div>
                <h1>Download the aaliver App</h1>
                <p>Download our app for easy access to virtual consultations with our qualified doctors and personalized nutritional guidance anytime, anywhere.</p>
                <h4>Get the link to download the app</h4>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <button className="btn btn-primary">Primary</button>
            </div>
        </div>
    );
};

export default DownloadApp;