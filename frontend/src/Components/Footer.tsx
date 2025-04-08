import { Phone, HelpCircle, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
      <footer className="font-montserrat bg-[#69315E] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid mt-10 grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1 */}
          <div>
            <h3 className="text-sm text-gray-300 mb-4">LearnFlow</h3>
            <ul className="space-y-2 text-sm">
              <li>Teach on LearnFlow</li>
              <li>Manage Linked Preferences</li>
              <li>Partners</li>
              <li>Careers</li>
              <li>About LearnFlow Courses</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-sm text-gray-300 mb-4">Careers</h3>
            <ul className="space-y-2 text-sm">
              <li>Blog</li>
              <li>Help Desk</li>
              <li>Manage Course Preferences</li>
              <li>Investors</li>
              <li>Professional Certificates</li>
              <li>Investors</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-sm text-gray-300 mb-4">Terms</h3>
            <ul className="space-y-2 text-sm">
              <li>Privacy Policy</li>
              <li>Social Impact</li>
              <li>Accessibility</li>
              <li>Guidelines</li>
              <li>Privacy</li>
              <li>Discover Courses</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col justify-between">
            <div className="flex justify-end mb-4">
              <button className="flex items-center gap-2 text-sm bg-purple-900 bg-opacity-30 px-3 py-1 rounded">
                <span>English</span>
              </button>
            </div>
            <div className='flex justify-end'>
                <p className="text-xs text-gray-300">© 2025 LearnFlow</p> 
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black">
          <div className="mb-4 grid grid-cols-2 md:mb-0">
            <div className="w-16 h-16 bg-white rounded">
              <img src="/api/placeholder/64/64" alt="LearnFlow Logo" className="w-full h-full" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2 text-sm">
                <Phone size={16} />
                <span>Customer Support</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <HelpCircle size={16} />
                <span>FAQs</span>
              </div>
            </div>
          </div>

        </div>
        <div className="text-center md:text-right">
            <div className="flex justify-left md:justify-left gap-4 mb-4">
              <div className="flex mt-10 gap-4">
                <a href="#" className="text-white">
                  <Linkedin size={40} />
                </a>
                <a href="#" className="text-white">
                  <Instagram size={40} />
                </a>
                <a href="#" className="text-white">
                  <Facebook size={40} />
                </a>
                <a href="#" className="text-white">
                  <Twitter size={40} />
                </a>
              </div>
            </div>

          </div>

        <div className="mt-8 grid grid-row-3  md:flex-row justify-end items-center">
          <div className="text-lg mb-5 text-gray-300">Rated</div>
          <div className="flex gap-4 mb-2 mt-4 md:mt-0">
            <button className="bg-white text-black px-4 py-2 rounded-lg flex  text-xs items-center gap-2">
              <img src="/api/placeholder/20/20" alt="App Store" className="w-5 h-5" />
              Download on the<br></br>
              App Store
            </button>
            <button className="bg-white text-black px-4 py-2 rounded-lg flex  text-xs items-center gap-2">
              <img src="/api/placeholder/20/20" alt="Google Play" className="w-5 h-5" />
              GET IT ON<br></br>
              Google Play
            </button>
          </div>
          <p className=" flex  mt-5 text-xs text-gray-400">©  LearnFlow 2024 Privacy Policy Terms</p>
          
        </div>
      </div>
    </footer>

);
}
export default Footer;