

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-white">
                <aside>
                <div className="flex">
                    <div>
                        <img className="w-8 h-8 rounded-full mt-2" src="https://i.ibb.co/qBvFrD7/white-baking-logo-design.jpg" alt="" />
                    </div>
                    <div>
                    <a className="btn btn-ghost normal-case text-xl text-teal-500">aaliver</a>
                    </div>
                </div>
                    <p>House 25, Road 04, Sector 10, Uttara, Dhaka - 1230</p>
                    <p>+88 01756 774488</p>
                    <p>hello@aaliver.com</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 bg-neutral text-white bg-opacity-80">
                <aside>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;