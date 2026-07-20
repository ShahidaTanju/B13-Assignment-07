
const Banner = () => {
    return (
        <div>
            <section className="py-15 px-5 text-center bg-[#e9e9e9]">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Friends to keep close in your life</h1>
                    <p className="text-gray-500 text-xs mb-8">Your personal shelf of meaningful connections. Browse, trend, and nurture the <br />relationships that matter now.</p>
                </div>
                <button className="bg-[#244d3f] text-white px-6 py-3 rounded-lg font-medium transition hover:bg-black">+ Add a Friend</button>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 px-20">
                    <div className="bg-white shadow-sm rounded-xl p-4">
                        <h2 className="text-3xl font-bold text-gray-800">10</h2>
                        <p className="text-gray-500 mt-2">Total Friends</p>
                    </div>
                    <div className="bg-white shadow-sm rounded-xl p-4 ">
                        <h2 className="text-3xl font-bold text-gray-800">3</h2>
                        <p className="text-gray-500 mt-2">On Track</p>
                    </div>
                    <div className="bg-white shadow-sm rounded-xl p-4 ">
                        <h2 className="text-3xl font-bold text-gray-800">6</h2>
                        <p className="text-gray-500 mt-2">Need Attention</p>
                    </div>
                    <div className="bg-white shadow-sm rounded-xl p-4">
                        <h2 className="text-3xl font-bold text-gray-800">12</h2>
                        <p className="text-gray-500 mt-2">Interactions This Month</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;
