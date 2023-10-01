

const Reviews = () => {
    return (
        <div>
            <h1 className="text-center font-semibold text-2xl py-12">What Our Member Say</h1>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center">
                        <img className="w-16 h-16 rounded-full text-center" src="https://i.ibb.co/sq2mKKw/m-4.jpg"/>
                        <div className="pt-10 pb-8 px-64">
                            <p>The Aaliver, nutrition is your trustworthy guide for nutritious and wellness. They provide empowering, evidence-based content that is easy to digest and focused on the information you can use to the help yourself.</p>
                        </div>
                        <h1 className="pb-6">Tanzin Tisha, Rajshahi</h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                <div className="flex flex-col items-center justify-center">
                        <img className="w-16 h-16 rounded-full text-center" src="https://i.ibb.co/pvcVr5p/m-3.jpg"/>
                        <div className="pt-10 pb-8 px-64">
                            <p>The Aaliver, nutrition is your trustworthy guide for nutritious and wellness. They provide empowering, evidence-based content that is easy to digest and focused on the information you can use to the help yourself.</p>
                        </div>
                        <h1 className="pb-6">Tanzin Tisha, Rajshahi</h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                <div className="flex flex-col items-center justify-center">
                        <img className="w-16 h-16 rounded-full text-center" src="https://i.ibb.co/2F0vX0j/m-2.jpg"/>
                        <div className="pt-10 pb-8 px-64">
                            <p>The Aaliver, nutrition is your trustworthy guide for nutritious and wellness. They provide empowering, evidence-based content that is easy to digest and focused on the information you can use to the help yourself.</p>
                        </div>
                        <h1 className="pb-6">Tanzin Tisha, Rajshahi</h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                <div className="flex flex-col items-center justify-center">
                        <img className="w-16 h-16 rounded-full text-center" src="https://i.ibb.co/txb19Wv/m-1.jpg"/>
                        <div className="pt-10 pb-8 px-64">
                            <p>The Aaliver, nutrition is your trustworthy guide for nutritious and wellness. They provide empowering, evidence-based content that is easy to digest and focused on the information you can use to the help yourself.</p>
                        </div>
                        <h1 className="pb-6">Tanzin Tisha, Rajshahi</h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;