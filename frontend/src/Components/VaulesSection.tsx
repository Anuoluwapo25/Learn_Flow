const ValuesSection = () => {
    return (
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">OUR CORE LEARNING VALUES</h2>
          
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <div className="flex justify-center">
                <img 
                  src="/api/placeholder/400/300" 
                  alt="Person learning" 
                  className="rounded-lg"
                />
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-purple-100 rounded-md p-2 h-10 w-10 flex items-center justify-center">
                    <span className="text-purple-800">📚</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Structured Learning Content</h3>
                    <p className="text-gray-600">
                      Explore structured learning content LearnFlow's platform.
                      Access organized courses, projects, and resources for
                      enhanced understanding, progress tracking, and flexible
                      learning at your pace for meaningful knowledge acquisition.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-purple-100 rounded-md p-2 h-10 w-10 flex items-center justify-center">
                    <span className="text-purple-800">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Skills and Value Oriented</h3>
                    <p className="text-gray-600">
                      LearnFlow offers skills and value-oriented courses. Acquire
                      practical expertise, align with industry demands, and enhance
                      employability. Gain tangible skills for real-world success in a
                      dynamic learning environment.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-purple-100 rounded-md p-2 h-10 w-10 flex items-center justify-center">
                    <span className="text-purple-800">👨‍🏫</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Professional And Quality Instructors</h3>
                    <p className="text-gray-600">
                      Learn from professional instructors on LearnFlow. Benefit from
                      their expertise, industry insights, and quality teaching.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default ValuesSection;