// import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import myContext from '../../context/data/myContext'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const context = useContext(myContext)
  const { toggleMode, mode } = context
  return (
    <footer className="text-gray-600 body-font bg-gray-100" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>

      <div className="bg-color-primary-dark relative">
        <div className="container px-5 py-20 mx-auto">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 pb-10">
            <div className="space-y-6">
              <h4 className="font-bold text-lg">Ecommeerce</h4>
              <p className="leading-relaxed">
                This Should Be Used To Tell A Story And Include Any Testimonials You
                Might Have About Your Product Or Service For Your Clients
              </p>
              <div className="flex gap-5 items-center">
                <p>Follow Us</p>
                <FaFacebook className="text-gray-600 cursor-pointer hover:text-gray-800" />
                <FaTwitter className="text-gray-600 cursor-pointer hover:text-gray-800" />
                <FaYoutube className="text-gray-600 cursor-pointer hover:text-gray-800" />
                <FaInstagram className="text-gray-600 cursor-pointer hover:text-gray-800" />
              </div>
              
            </div>
            <div className="flex justify-between md:justify-around">
              <div className="space-y-6">
                <h4 className="font-bold text-lg">Quick Links</h4>
                <ul className="space-y-3">
                  <li className=" hover:no- hover:text-gray-500">
                  <Link to={'/'}>
                  Home
                    </Link>
                  </li>
                  <li className=" hover:no- hover:text-gray-500">
                    <a href="#features">Features</a>
                  </li>
                  <li className=" hover:no- hover:text-gray-500">
                    <a href="#testimonial">Testimonial</a>
                  </li>
                  <li className=" hover:no- hover:text-gray-500">
                    <a href="#blog">Blog</a>
                  </li>
                  <li className=" hover:no- hover:text-gray-500">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="font-bold text-lg">Help</h4>
                <ul className="space-y-3">
                  <li className=" hover:no- hover:text-gray-500">
                  <Link to={'/returnpolicy'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Return Policy</Link>
                  </li>
                  <li className=" hover:no- hover:text-gray-500">
                  <Link to={'/about'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>About</Link>
                  </li>
                  <li className=" hover:no- hover:text-gray-500">
                  <Link to={'/contact'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Contact Us</Link>
                  </li>
                  <li className=" hover:no- hover:text-gray-500">
                  <Link to={'/privacypolicy'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Privacy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-lg">Newsletter</h4>
              <p className="leading-relaxed">
                Subscribe With Email And Loads Of News Will Be Sent To You
              </p>
              <div className="flex items-center">
                <input
                  type="text"
                  className="w-3/4 text-color-gray bg-color-white p-2 lg:p-3 rounded-l-md focus:outline-none"
                  placeholder="Enter Your Email"
                />
                <button
                  type="submit"
                  className="bg-color-secondary px-4 py-2 lg:px-5 lg:py-3 rounded-r-md hover:opacity-90"
                >
                  <i className="fa-solid fa-chevron-right" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-10 border-t border-color-gray">
          <p className="text-gray-500" style={{ color: mode === 'dark' ? 'white' : '' }}>© 2023 Ecommerce —
                <a href="https://github.com/HanyMahmoud17/Ecommerce-Project" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank" style={{ color: mode === 'dark' ? 'white' : '' }}>https://github.com</a>
             </p> 
          </div>
        </div>
      </div>
    </footer>
  )
}