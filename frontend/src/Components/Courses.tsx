import CourseCard from "./CoursesCard";
import Write from '../assets/writing.jpeg';


interface Course {
    title: string;
    instructor: string;
    rating: string;
    duration: string;
    level: string;
    price: string;
    imageSrc?: string;
  }

const CoursesSection = () => {
    const courses: Course[] = [
      {
        title: 'Data Analytics',
        instructor: 'Dan Roney',
        rating: '4.90 (24)',
        duration: '2h 32m',
        level: 'Beginner',
        price: '',
        imageSrc: '../assets/writing.jpeg',
      },
      {
        title: 'Cyber Security',
        instructor: 'Dan Roney',
        rating: '4.90 (24)',
        duration: '2h 32m',
        level: 'Beginner',
        price: '',
        imageSrc: '/api/placeholder/400/200',
      },
      {
        title: 'UI/UX Design',
        instructor: 'Dan Roney',
        rating: '4.90 (24)',
        duration: '2h 32m',
        level: 'Beginner',
        price: '',
        imageSrc: '/api/placeholder/400/200',
      },
      {
        title: 'Product Design',
        instructor: 'Dan Roney',
        rating: '4.90 (24)',
        duration: '2h 32m',
        level: 'Beginner',
        price: '45,000NGN',
        imageSrc: '/api/placeholder/400/200',
      },
      {
        title: 'Python Programming',
        instructor: 'Dan Roney',
        rating: '4.90 (24)',
        duration: '2h 32m',
        level: 'Beginner',
        price: '45,000NGN',
        imageSrc: '/api/placeholder/400/200',
      },
      {
        title: 'Java Script',
        instructor: 'Dan Roney',
        rating: '4.90 (24)',
        duration: '2h 32m',
        level: 'Beginner',
        price: '45,000NGN',
        imageSrc: '/api/placeholder/400/200',
      },
    ];
  
    return (
      <div className="py-16 font-montserrat  bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-4">EXPLORE COURSES</h2>
          <p className="text-center font-medium text-[#69315E] mb-2">Empower Your Journey: Invest in Knowledge Today!</p>
          <p className="text-center mt-3 mb-20 max-w-4xl mx-auto">
            We promise to embark you on a transformative career journey in tech with our comprehensive courses.
            Acquire cutting-edge skills, open doors to innovation, and shape a thriving future in the tech industry.
          </p>
          
          <div className="grid grid-cols-1  mt-10 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
          
          <div className="flex justify-center py-1 mb-2">
            <button className="border-2 border-stone-950 mt-10 text-[#69315E] px-6 py-5 rounded-md hover:bg-[#88407a] mb-2 hover:text-white font-bold  ">
              View more courses
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default CoursesSection;