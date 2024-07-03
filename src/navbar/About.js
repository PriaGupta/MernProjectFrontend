import React from 'react'
import AboutImg from '../assest/aboutimg.webp';

const About = () => {
  return (
    <>
      <div className='pt-10 min-w[{calc(100vh)}] '>
      <section className="py-10">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h2>
            <div className="flex flex-col md:flex-row items-center md:space-x-12 mb-12">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <img src={AboutImg} alt="Food" className="rounded-lg shadow-md" />
                </div>
                <div className="md:w-1/2">
                 
                    <p className="text-gray-600 mb-4">Welcome to Veggie Vista Fusion! We are passionate about  delicious and high-quality food to your doorstep. Our journey began with a simple idea: to make tasty and healthy food accessible to everyone, anytime and anywhere.</p>
                    <p className="text-gray-600 mb-4">We source the freshest ingredients and prepare every dish with love and care. Our team of expert chefs ensures that every meal is a delightful experience for you.</p>
                    <p className="text-gray-600">Join us on this culinary adventure and let us bring the joy of good food into your life!</p>
                </div>
            </div>
          
            <div className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-4">Our mission is to revolutionize the way people enjoy food by making high-quality meals accessible to everyone. We aim to bring convenience, variety, and exceptional taste to your dining experience, all while supporting local farmers and sustainable practices.</p>
            </div>
          
            <div className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Values</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Quality: We never compromise on the quality of our ingredients.</li>
                    <li>Sustainability: We are committed to sustainable sourcing and reducing our environmental footprint.</li>
                    <li>Customer Satisfaction: Our customers are at the heart of everything we do.</li>
                    <li>Innovation: We continuously seek innovative ways to improve our services.</li>
                </ul>
            </div>
           
            <div className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Features</h3>
                <div className="space-y-4">
                    <div>
                        <h4 className="text-xl font-semibold text-gray-800">Wide Variety of Dishes</h4>
                        <p className="text-gray-600">From local favorites to international cuisines, our menu offers a wide range of options to suit every palate.</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-gray-800">Easy Online Ordering</h4>
                        <p className="text-gray-600">Order your favorite meals with just a few clicks on our user-friendly app or website.</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-gray-800">Fast Delivery</h4>
                        <p className="text-gray-600">Enjoy your meals hot and fresh with our reliable and quick delivery service.</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-gray-800">Health-Conscious Options</h4>
                        <p className="text-gray-600">We offer a variety of healthy options to cater to different dietary needs and preferences.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
      </div>
    </>
  )
} 

export default About
