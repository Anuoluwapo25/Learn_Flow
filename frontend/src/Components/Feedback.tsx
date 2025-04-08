import Student from '../assets/Student.jpeg'
import Student2 from '../assets/Student2.jpeg'
interface Profile {
    imageSrc?: string;
    name: string;
    rating: string;
    desc: string;
  }
  
  const Feedback = () => {
    const users: Profile[] = [
      {
        imageSrc: Student,
        name: 'Trevor Mitchell',
        rating: '5 stars',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus nulla at risus efficitur, at pulvinar nisi dictum.',
      },
      {
        imageSrc: Student2,
        name: 'Sarah Johnson',
        rating: '4.8 stars',
        desc: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec pharetra, magna vestibulum.',
      },
      {
        imageSrc: Student2,
        name: 'Michael Zhang',
        rating: '4.9 stars',
        desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin nec justo vel urna.',
      },
    ];
  
    return (
      <div className="bg-gray-100 h-screen mb-10 font-montserrat">
        <div className="text-center py-10">
          <p className="mt-20 font-bold mb-6">Amazing Stories</p>
          <h1 className="text-3xl font-bold mb-7">FEEDBACK FROM LEARNERS</h1>
          <p>Join LearnFlow now and unlock a world of knowledge and skill building. Become part of our<br />community, learn from experts and later share your inspiring success story!</p>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {users.map((profile, index) => (
              <div key={index} className="bg-transparent p-6 rounded-3xl border border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300">
                {profile.imageSrc && (
                  <div className="flex justify-center mb-4">
                    <img 
                      src={profile.imageSrc || "/api/placeholder/60/60"} 
                      alt={`${profile.name}'s profile`}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold text-[#69315E] text-center">{profile.name}</h3>
                <div className="text-yellow-500 gap-4 flex items-center mt-6 justify-center my-2">
                {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4  text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}</div>
                <p className="text-gray-600 mt-6 mb-5 text-center">{profile.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Feedback;