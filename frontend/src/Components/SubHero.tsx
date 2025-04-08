const SubHero = () => {
    return (
        <div className=" stats-section bg-gray-100 rounded-lg shadow-lg mx-auto max-w-6xl px-6 py-20 relative -mt-28 z-10 ">
            <div className="grid  text-center px-40 grid-cols-4 gap-4 font-montserrat">
                <div className="bg-white rounded-lg shadow-lg px-9 py-7">
                    <h1 className="text-[#69315E] font-bold text-4xl ">12K+</h1>
                    <p className="font-bold text-sm">Total Enrolled</p>
                    </div>
                <div className="bg-white rounded-lg shadow-lg px-9 py-7">
                    <h1 className="text-[#69315E] font-bold text-4xl">60</h1>
                    <p className="font-bold text-sm" >Courses</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg px-9 py-7">
                    <h1 className="text-[#69315E] font-bold text-4xl">120+</h1>
                    <p className="font-bold text-sm">Instructor</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg px-9 py-7">
                    <h1 className="text-[#69315E] font-bold text-4xl">12+</h1>
                    <p className=" font-bold text-sm">Partnership</p>
                </div>
            </div>
        </div>
    )
}

export default SubHero;