import React from 'react';
// Import your image
import myImage from '../assets/me.jpg'; // Adjust the path as necessary

function About() {
  return (
    <>
      <section id="about" className="py-12">
        <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
        
        {/* Flex container for text and image */}
        <div className="flex flex-col-reverse md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
          
          {/* Text on the left */}
          <div className="text-center md:text-left max-w-3xl mx-auto">
            <p className="text-lg text-gray-700">
              I am an IT Manager with expertise in web development, IT support, and data management. 
              My goal is to contribute to innovative projects with a focus on learning and adapting to new challenges.
            </p>
          </div>
          
          {/* Image on the right */}
          <img 
            src={myImage} // Path to your image
            alt="My Image" 
            className="w-32 h-32 object-cover rounded-full" // Circle-shaped image
          />
        </div>
      </section>
    </>
  );
}

export default About;