// import CourseCard from './CoursesCard';

// const CoursesSection = () => {
//     const courses = [
//       {
//         title: 'Data Analytics',
//         instructor: 'Dan Roney',
//         rating: '4.90 (24)',
//         duration: '2h 32m',
//         level: 'Beginner',
//         price: '',
//         imageSrc: '/api/placeholder/400/200',
//       },
//       {
//         title: 'Cyber Security',
//         instructor: 'Dan Roney',
//         rating: '4.90 (24)',
//         duration: '2h 32m',
//         level: 'Beginner',
//         price: '',
//         imageSrc: '/api/placeholder/400/200',
//       },
//       {
//         title: 'UI/UX Design',
//         instructor: 'Dan Roney',
//         rating: '4.90 (24)',
//         duration: '2h 32m',
//         level: 'Beginner',
//         price: '',
//         imageSrc: '/api/placeholder/400/200',
//       },
//       {
//         title: 'Product Design',
//         instructor: 'Dan Roney',
//         rating: '4.90 (24)',
//         duration: '2h 32m',
//         level: 'Beginner',
//         price: '15,000',
//         imageSrc: '/api/placeholder/400/200',
//       },
//       {
//         title: 'Python Programming',
//         instructor: 'Dan Roney',
//         rating: '4.90 (24)',
//         duration: '2h 32m',
//         level: 'Beginner',
//         price: '15,000',
//         imageSrc: '/api/placeholder/400/200',
//       },
//       {
//         title: 'Java Script',
//         instructor: 'Dan Roney',
//         rating: '4.90 (24)',
//         duration: '2h 32m',
//         level: 'Beginner',
//         price: '15,000',
//         imageSrc: '/api/placeholder/400/200',
//       },
//     ];
  
//     return (
//       <div className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-4">EXPLORE COURSES</h2>
//           <p className="text-center text-lg mb-2">Empower Your Journey: Invest in Knowledge Today!</p>
//           <p className="text-center mb-12 max-w-3xl mx-auto">
//             We promise to embark you on a transformative career journey in tech with our comprehensive courses.
//             Acquire cutting-edge skills, open doors to innovation, and shape a thriving future in the tech industry.
//           </p>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//             {courses.map((course, index) => (
//               <CourseCard key={index} {...course} />
//             ))}
//           </div>
          
//           <div className="flex justify-center">
//             <button className="border border-purple-700 text-purple-700 px-6 py-2 rounded-md hover:bg-purple-700 hover:text-white">
//               View more courses
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   export default CoursesSection;