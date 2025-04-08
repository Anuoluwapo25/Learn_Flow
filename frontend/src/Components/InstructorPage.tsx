import { ArrowRight} from 'lucide-react';
import Student from '../assets/Student.jpeg';

export default function LearnFlowInstructorPage() {

  return (
    <div className="flex flex-col mb-20 font-montserrat">
      <div className="flex-grow bg-white p-8 md:p-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <p className="text-sm text-gray-600 mb-2 font-bold">Teach on LearnFlow</p>
            <h1 className="text-2xl font-bold text-[#69315E] mb-4">BECOME AN INSTRUCTOR</h1>
            <p className="text-gray-700  text-lg mb-6">
              To become an instructor on LearnFlow, sign up on the platform, create a profile highlighting your expertise, and 
              propose courses. Benefit from a wide learner base, advanced teaching tools, and revenue sharing opportunities. Share your 
              knowledge, earn income, and contribute to learners' growth in a dynamic online community.
            </p>
            <div className='py-5'>
            <button className="bg-[#69315E] text-white px-4 py-2 rounded flex  items-center gap-2">
              Start teaching today
              <ArrowRight size={16} />
            </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="rounded-full overflow-hidden w-64 h-64">
              <img src={Student} alt="Instructor" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}