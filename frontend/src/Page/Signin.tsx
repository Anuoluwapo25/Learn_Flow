import Car from '../assets/car.jpeg'
import Student from '../assets/Student2.jpeg'

const SignIn = () => {
    return (
        <div className='flex h-screen font-montserrat'>
            
            <div className='w-3/4 flex flex-col justify-center mt-28 text-center px-5'>
                <div>
                    <div>
                        <img src={Student}/>
                        <p className='ml-28'>Don't have an account? <span className='text-blue-400  text-sm'>Sign Up!</span></p>
                    </div>
                </div>
                <div className=' item-center'>
                    <h1 className='text-3xl font-bold mt-10  text-center'>Welcome Back!</h1>
                    <p className='mt-5'>Login into your account</p>
                </div>
                <div className='flex space-x-3 mt-10 justify-center '>
                    <div className='bg-white border text-sm border-gray-200 py-2 px-6'>
                        <img />
                        google
                    </div>
                    <div className='bg-white border text-sm border-gray-200 py-2 px-6'>
                        <img />
                        facebook
                    </div>
                </div>
                <div className='mt-5 text-sm'>
                    or countinue with
                </div>
                <div className='mt-10'>
                    <div className='relative' >
                    <form>
                        <input className='border border-black' placeholder='Email'/>
                        <input placeholder='Password' />
                        <div className='flex justify-center mt-10 space-x-10 '>
                        <p className='text-sm' >Remember me</p>
                        <p className='text-red-600 ml-9'>Recover Password</p>
                        </div>
                        <button className='bg-[#69315E] rounded-lg mt-6 text-white py-3 w-1/2 px-5'>Log In</button>
                    </form>
                    </div>
                </div>
                

            </div>
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
        </div>
    )
}

export default SignIn;