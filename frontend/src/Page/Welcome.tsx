
import Car from '../assets/car.jpeg'
import Student from '../assets/Student.jpeg'
import { useState } from 'react';


const Welcome = () => {
    const [selectedRole, setSelectedRole] = useState<'student' | 'teacher' | null>(null);
    return (
        <div className='flex h-screen font-montserrat'>
            <div className="bg-black w-1/2 ">
                <img src='' alt='logo'></img>
                <img src={Car}></img>
                <div className='bg-[#FFF2F221] w-3/4 rounded-xl shadow-lg mx-auto bg-opacity-20 max-w-xl px-6 py-2  '>
                    <div className="bg-opacity-20 bg-gray-800 text-white p-6 m-6">
                        <div className="bg-gray-900 text-xs inline-block px-3 py-1 rounded-md mb-3">
                            An Avenue To Learn
                        </div>
                        <p className="text-sm leading-relaxed">
                            Today, we create innovative solutions to the challenges that consumers face in both their everyday lives and events.
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-3/4 flex flex-col justify-center mt-28 text-center px-5'>
                <div className=' item-center'>
                    <h1 className='text-3xl font-bold text-center'>Welcome Back!</h1>
                    <p>Login into your account</p>
                </div>
                <div className='flex justify-center space-x-6 mt-20 mb-2'>

                    <div 
                className={`w-32 h-32 rounded-lg flex flex-col items-center  justify-center cursor-pointer relative ${
                    selectedRole === 'student' ? 'bg-[#69315E]  bg-opacity-70 text-white' : 'bg-[#69315E] bg-opacity-80 text-white'
                }`}
                onClick={() => setSelectedRole('student')}
                >
                    <div className="absolute inset-0 bg-[#69315E] blur-lg  rounded-lg"></div>
                <div className="w-16 h-16 z-10 bg-white rounded-lg flex items-center justify-center mb-2">
                    <svg className="w-12 h-12 text-[#69315E]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0-10a5 5 0 110 10 5 5 0 010-10zM12 14c-6.1 0-11 4.9-11 11h2c0-5 4-9 9-9s9 4 9 9h2c0-6.1-4.9-11-11-11z" />
                    </svg>
                </div>
              
                {selectedRole === 'student' && (
                    <div className="absolute top-4 right-4 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#69315E]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    </div>
                )}
                </div>
                    <div 
                    className={`w-32 h-32 rounded-lg flex flex-col items-center justify-center cursor-pointer relative ${
                        selectedRole === 'teacher' ? 'bg-[#69315E] text-white' : 'bg-[#69315E] bg-opacity-80 text-white'
                    }`}
                    onClick={() => setSelectedRole('teacher')}
                    >
                         <div className="absolute inset-0 bg-[#69315E] blur-lg rounded-lg"></div>
              <div className="w-16 h-16 z-10 bg-white rounded-lg flex items-center justify-center mb-2">
                <svg className="w-12 h-12 text-[#69315E]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0-10a5 5 0 110 10 5 5 0 010-10zM12 14c-6.1 0-11 4.9-11 11h2c0-5 4-9 9-9s9 4 9 9h2c0-6.1-4.9-11-11-11z" />
                </svg>
              </div>
              
              {selectedRole === 'teacher' && (
                <div className="absolute top-4 right-4 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4  text-[#69315E]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
                </div>
                <div className='flex justify-center max-auto mt-0 text-sm text-[#69315E] space-x-6'>
                    <p className='mr-16'>Student</p>
                    <p className='ml-18'>Teacher</p>
                </div>
                <div>
                    
                    <button className='w-1/2 border border-black mt-28 rounded-lg hover:bg-[#69315E] hover:text-white py-3 px-10 transition-colors'>
                        Continue
                    </button>
                    <p className='text-sm mt-3'>Don't have an account? <span className='text-blue-400 text-sm'>Sign up!</span></p>
                </div>
            </div>
        </div>
    )
}

export default Welcome;