import React from 'react'

const Contact = () => {
  return (
    <div className='pt-12 min-w[{calc(100vh)}] '>
    <section className="container mx-auto mt-2 py-4 px-6">
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                <p className="text-gray-700 mb-6">If you have any questions, concerns, or feedback, please don’t hesitate to reach out to us. Our team is dedicated to providing the best experience for our users.</p>

                <h5 className="text-xl font-semibold mb-2">Contact Information</h5>
                <p className="text-gray-700 mb-1"><strong>Customer Support Email:</strong> <a className="contact-mail text-blue-500 hover:underline" href="fusion@gmail.com">support@yourfoodapp.com</a></p>
                <p className="text-gray-700 mb-1"><strong>Customer Support Phone:</strong> +1 (800) 123-4567</p>
                <p className="text-gray-700 mb-4"><strong>Mailing Address:</strong></p>
                <p className="text-gray-700 mb-4">
                    Veggie Vista Fusion, Inc.
                    123 Foodie Lane 
                    Mohali, YF 12345
                </p>

                <div className="mt-5">
                    <h5 className="text-xl font-semibold mb-2">Social Media</h5>
                    <p className="text-gray-700 mb-2">Stay connected with us through our social media channels:</p>
                    <p className="text-gray-700">
                        <a href="https://facebook.com/#" className="text-blue-600 hover:underline mr-2">Facebook</a> 
                        <a href="https://twitter.com/#" className="text-blue-600 hover:underline mx-2">Twitter</a> 
                        <a href="https://instagram.com/" className="text-blue-600 hover:underline ml-2">Instagram</a>
                    </p>
                </div>
            </div>

            <div className="md:w-1/2">
                <h5 className="text-xl font-semibold mb-4">Contact Form</h5>
                <form action="/submit_contact_form" method="post">
                    <div className="mb-4">
                        <label for="name" className="block text-gray-700 font-medium mb-2">Name:</label>
                        <input type="text" id="name" name="name" className="form-input w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label for="email" className="block text-gray-700 font-medium mb-2">Email:</label>
                        <input type="email" id="email" name="email" className="form-input w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label for="subject" className="block text-gray-700 font-medium mb-2">Subject:</label>
                        <input type="text" id="subject" name="subject" className="form-input w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label for="message" className="block text-gray-700 font-medium mb-2">Message:</label>
                        <textarea id="message" name="message" rows="4" className="form-textarea w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600">Send Message</button>
                </form>
            </div>
        </div>
       
    </section>
   
    </div>
  )
}

export default Contact
