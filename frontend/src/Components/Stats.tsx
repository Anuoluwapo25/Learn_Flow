const StatsSection = () => {
    const stats = [
      { number: '12K+', label: 'Total Enrolled' },
      { number: '60+', label: 'Courses' },
      { number: '120+', label: 'Instructors' },
      { number: '12+', label: 'Partnership' }
    ];
    
    return (
      <div className="-mt-10   py-8">
        <div className="container  bg-gray-100 mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-6 w-48 text-center shadow-sm">
                <h3 className="text-2xl font-bold text-[#69315E]">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default StatsSection;