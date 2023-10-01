

const DownloadApp = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 pt-0">
            <div>
                <img className="w-96 h-72 mt-20 ms-10" src="https://i.ibb.co/7VbqvZj/caller-receiver.jpg" alt="" />
            </div>
            <div className="py-10 mt-5 text-start">
                <h1 className="text-2xl py-5 font-medium">Download the aaliver App</h1>
                <p className="pb-5">Download our app for easy access to virtual consultations with our qualified doctors and personalized nutritional guidance anytime, anywhere.</p>
                <h4 className="font-medium text-start py-2">Get the link to download the app</h4>
                <input type="text" placeholder="+880" className="input input-bordered w-full max-w-xs" />
                <button className="btn btn-primary">Get Link</button>
                <div className="py-4">
                    <img className="h-12" src="https://i.ibb.co/HHPvwf4/download-buttons.jpg" alt="" />
            </div>
            </div>
        </div>
    );
};

export default DownloadApp;