import Write from '../assets/writing.jpeg';

interface CourseCardProps {
  title: string;
  instructor: string;
  rating: string;
  duration: string;
  level: string;
  price: string;
  imageSrc?: string; // Optional, since you have a default value
}

const CourseCard = ({ title, instructor, rating, duration, level, price, imageSrc }: CourseCardProps) => {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img 
          src={imageSrc || "/api/placeholder/400/200"} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2">{title}</h3>
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden mb-2 mr-2">
              <img 
                src="../assets/writing.jpeg" 
                alt={instructor} 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm text-gray-600">by {instructor}</span>
          </div>
          
          <div className="flex items-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
            <span className="ml-1 text-sm text-gray-600">{rating}</span>
          </div>
          
          <div className="flex justify-between mb-4">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-lg mb-2 text-gray-500">{duration}</span>
            </div>
            <span className="text-lg mb-2 text-gray-500">{level}</span>
          </div>
          
          <div className="flex justify-between  mb-4 items-center">
          <button className="text-sm text-black hover:text-[#69315E] font-bold uppercase flex items-center">
              View Course
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            {price ? (
              <span className="font-bold text-sm">{price}</span>
            ) : (
              <span className="text-[#69315E] text-sm">Free</span>
            )}
          </div>
        </div>
      </div>
    );
  };

  export default CourseCard;
  