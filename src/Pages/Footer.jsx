import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className="bg-[#244d3f] text-white mt-16 py-10">
            <div className="max-w-7xl mx-auto px-5">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-3">KeenKeeper</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-4">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <h3 className="text-xl mb-4">Social Links</h3>
                    <div className="flex justify-center gap-4 mb-6">
                        <a className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
                            <FaInstagram />
                        </a>
                        <a className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
                            <FaFacebook />
                        </a>
                        <a className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
                            <FaXTwitter />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="">Privacy Policy</a>
                        <a href="">Terms of Service</a>
                        <a href="">Cookies</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;