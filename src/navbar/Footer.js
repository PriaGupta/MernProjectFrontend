import React from 'react'

const Footer = () => {
  return (
    <>

<footer className="bg-gray-500 text-white py-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 mb-4">
        <h6 className="text-lg text-slate-700 font-semibold">About</h6>
        <p className="text-justify mt-2 text-white">Food is one of the basic necessities of life. Food contains nutrients—substances essential for the growth, repair, and maintenance of body tissues and for the regulation of vital processes. Nutrients provide the energy our bodies need to function. The energy in food is measured in units called calories.</p>
      </div>

      <div className="w-1/2 md:w-1/4 mb-4 px-4">
        <h6 className="text-lg text-slate-700 font-semibold">Categories</h6>
        <ul className="mt-2 space-y-2">
          <li><a  className="text-white hover:text-white">Vegetables</a></li>
          <li><a  className="text-white hover:text-white">Fruits</a></li>
          <li><a  className="text-white hover:text-white">Sandwiches</a></li>
          <li><a  className="text-white hover:text-white">Cake</a></li>
          <li><a  className="text-white hover:text-white">Ice Cream</a></li>
          <li><a  className="text-white hover:text-white">Shake</a></li>
        </ul>
      </div>

      <div className="w-1/2 md:w-1/4 mb-4">
        <h6 className="text-lg text-slate-700 font-semibold">Quick Links</h6>
        <ul className="mt-2 space-y-2">
          <li><a href="http://localhost:3000/about/" className="text-white hover:text-white">About Us</a></li>
          <li><a href="http://scanfcode.com/contact/" className="text-white hover:text-white">Contact Us</a></li>
           <li><a href="http://scanfcode.com/privacy-policy/" className="text-white hover:text-white">Privacy Policy</a></li>
          <li><a href="http://scanfcode.com/sitemap/" className="text-white hover:text-white">Sitemap</a></li>
        </ul>
      </div>
    </div>
    <hr className="my-4 border-gray-600"/>
  </div>
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-between items-center">
      <div className="w-full md:w-2/3 text-white">
        <p className="text-sm">&copy; 2024 All Rights Reserved</p>
      </div>
      
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer
