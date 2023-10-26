import { useContext, useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import contact from '../../assets/img/contact.svg'
const contactStyle = {
    background: `linear-gradient(to left,rgba(0, 0, 0, 0.8), rgba(255, 225, 225, 0.8)),url(${contact}) no-repeat center center fixed`,
    // backgroundSize: 'cover',
};


function Contact() {
    const context = useContext(myContext)
    const { mode } = context
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <Layout>
            <div className="relative flex items-top justify-center p-20 min-h-screen bg-white sm:items-center sm:pt-0" style={contactStyle}>
                <div className="container px-5 mx-auto">
                    <div className="overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="rounded-md sm:rounded-lg">
                                <h1 className="w-full lg:text-5xl md:text-4xl sm:text-xl text-gray-800  mb-16 font-extrabold tracking-tight">
                                    Get in touch
                                </h1>
                                <p className="text-normal text-lg font-medium text-gray-600 dark:text-gray-600 mt-2">
                                    Fill in the form to start a conversation
                                </p>
                                <div className="flex items-center mt-8 text-gray-600 dark:text-gray-600">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                        Acme Inc, Street, State,
                                        Postal Code
                                    </div>
                                </div>
                                <div className="flex items-center mt-5 text-gray-600 dark:text-gray-600">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                        +44 1234567890
                                    </div>
                                </div>
                                <div className="flex items-center mt-5  text-gray-600 dark:text-gray-600">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                        info@acme.org
                                    </div>
                                </div>
                            </div>
                            <form className="flex flex-col justify-center">
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="hidden">Full Name</label>
                                    <input type="name" name="name" id="name" placeholder="Full Name" className="w-100 mt-2 py-3 px-3 rounded-lg bg-slate-200   border border-gray-400  text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" style={{
                                        backgroundColor: mode === 'dark' ? '#282c34' : '', // Background color
                                        color: mode === 'dark' ? 'white' : '', // Text color
                                        border: mode === 'dark' ? '1px solid transparent' : '1px solid #d1d5db', // Border
                                        outline: mode === 'dark' ? 'none' : '', // Remove outline
                                    }} />
                                </div>
                                <div className="flex flex-col mt-2">
                                    <label htmlFor="email" className="hidden">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Email" className="w-100 mt-2 py-3 px-3 rounded-lg bg-slate-200  0 border border-gray-400  text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" style={{
                                        backgroundColor: mode === 'dark' ? '#282c34' : '', // Background color
                                        color: mode === 'dark' ? 'white' : '', // Text color
                                        border: mode === 'dark' ? '1px solid transparent' : '1px solid #d1d5db', // Border
                                        outline: mode === 'dark' ? 'none' : '', // Remove outline
                                    }} />
                                </div>
                                <div className="flex flex-col mt-2">
                                    <label htmlFor="tel" className="hidden">Number</label>
                                    <input type="tel" name="tel" id="tel" placeholder="Telephone Number" className="w-100 mt-2 py-3 px-3 rounded-lg bg-slate-200  border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" style={{
                                        backgroundColor: mode === 'dark' ? '#282c34' : '', // Background color
                                        color: mode === 'dark' ? 'white' : '', // Text color
                                        border: mode === 'dark' ? '1px solid transparent' : '1px solid #d1d5db', // Border
                                        outline: mode === 'dark' ? 'none' : '', // Remove outline
                                    }} />
                                </div>
                                <div className="flex flex-col mt-2">
                                    <label htmlFor="message" className="hidden">Number</label>
                                    <textarea
                                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-slate-200 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                                        placeholder="Message"
                                        rows={5}
                                        cols={5}
                                        name="message"
                                        style={{
                                            backgroundColor: mode === 'dark' ? '#282c34' : '', // Background color
                                            color: mode === 'dark' ? 'white' : '', // Text color
                                            border: mode === 'dark' ? '1px solid transparent' : '1px solid #d1d5db', // Border
                                            outline: mode === 'dark' ? 'none' : '', // Remove outline
                                        }}
                                    ></textarea>



                                </div>
                                <button type="submit" className="md:w-32 bg-pink-600 hover:bg-pink-500 text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <div>
  <iframe
    title="Map"
    width="100%"
    height="400"
    frameBorder="0"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7292319.439500705!2d36.161126261148404!3d26.81758864339309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14368976c35c36e9%3A0x2c45a00925c4c444!2z2YXYtdix!5e0!3m2!1sar!2seg!4v1698192235511!5m2!1sar!2seg&amp;night_mode=true"
    allowFullScreen
  ></iframe>
</div>

            </div>

        </Layout>
    )
}

export default Contact