const Navigation = () => {
    return (
      <nav className="bg-white shadow-sm">
        <div className="w-full max-w-[1400px] px-3 mx-auto">
          <div className="flex justify-between items-center py-4">
            <div className="flex gap-3 items-center">
              <div className="mr-4">
                <img src="/api/placeholder/40/40" alt="Logo" className="h-8" />
              </div>
              <div className="hidden md:flex space-x-4">
                <a href="#" className="text-gray-800 text-sm hover:text-[#69315E]">Dashboard</a>
                <a href="#" className="text-gray-800 text-sm hover:text-[#69315E]">Pricing</a>
                <a href="#" className="text-gray-800 text-sm hover:text-[#69315E]">Courses</a>
              </div>
              {/* <div className="flex items-center"> */}
              <div className="mr-4 ml-3 space-x-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-9 py-1 placeholder-red-900 rounded-md border border-red-900 focus:outline-none focus:ring-1 focus:ring-[#69315E]"
                />
              </div>
            </div>
            
            <div className="flex mr-1 px-0 items-center">
              
              <div className="flex space-x-2">
                <button className="px-4 py-3 border border-red-900 text-sm rounded text-gray-800 hover:bg-gray-50">
                  Sign in
                </button>
                <button className="px-20 py-1 bg-red-900 rounded text-sm text-white  hover:bg-[#69315E]">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  export default Navigation;