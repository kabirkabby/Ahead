import React from 'react'

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img src='' alt='' />
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 font-bold hover:text-gray-900">Emotions</a>
      <a className="mr-5 font-bold hover:text-gray-900">Manifesto</a>
      <a className="mr-5 font-bold hover:text-gray-900">Self-awareness test</a>
      <a className="mr-5 font-bold hover:text-gray-900">Work With Us</a>
    </nav>
    <button className="inline-flex items-center bg-black border-0 py-3 px-6 focus:outline-none hover:bg-gray-900 rounded-full text-white mt-4 md:mt-0">
      Download app
    </button>
  </div>
</header>
  )
}

export default Header