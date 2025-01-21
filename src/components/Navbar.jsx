import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaArrowUp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowArrow(true);  // Show arrow after scrolling 100px down
    } else {
      setShowArrow(false);  // Hide arrow when near the top
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });  // Smooth scroll to top
    setIsHeaderVisible(true);  // Make the header visible again
  };

  const toggleHeaderVisibility = () => {
    setIsHeaderVisible(!isHeaderVisible);  // Toggle header visibility
  };

  // Use effect to listen to scroll events
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-gray-800 text-white ${isHeaderVisible ? 'block' : 'hidden'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold">Mohammad Ishtiaq Hossain</h1>
        
        {/* Navigation links (hidden on mobile) */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-teal-400">About</a></li>
            <li><a href="#experience" className="hover:text-teal-400">Experience</a></li>
            <li><a href="#recent-projects" className="hover:text-teal-400">Projects</a></li>
            <li><a href="#education" className="hover:text-teal-400">Education</a></li>
            <li><a href="#skills" className="hover:text-teal-400">Skills</a></li>
            <li><a href="#training-summary" className="hover:text-teal-400">Trainings</a></li>
            <li><a href="#contact" className="hover:text-teal-400 block">References</a></li>
            <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-teal-400 hover:text-teal-500 px-4">
            <span className="material-icons">
            <GiHamburgerMenu />
            </span>
          </button>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://github.com/nayeemx" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/ishtiaq47/" className="hover:text-teal-400">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Mobile Navigation (Only visible when menu is open) */}
      {isMenuOpen && (
        <div className="md:hidden flex justify-center p-4 bg-gray-700">
          <ul className="space-y-4 text-center">
            <li><a href="#about" className="hover:text-teal-400 block">About</a></li>
            <li><a href="#experience" className="hover:text-teal-400 block">Experience</a></li>
            <li><a href="#recent-projects" className="hover:text-teal-400">Projects</a></li>
            <li><a href="#education" className="hover:text-teal-400 block">Education</a></li>
            <li><a href="#skills" className="hover:text-teal-400 block">Skills</a></li>
            <li><a href="#training-summary" className="hover:text-teal-400">Trainings</a></li>
            <li><a href="#contact" className="hover:text-teal-400 block">References</a></li>
            <li><a href="#contact" className="hover:text-teal-400 block">Contact</a></li>
          </ul>
        </div>
      )}

      {/* Arrow Button (appears when scrolled down) */}
      {showArrow && (
        <div className="fixed bottom-4 right-4 bg-teal-400 text-white rounded-full p-3 cursor-pointer" onClick={scrollToTop}>
          <span className="material-icons">
          <FaArrowUp />
          </span>
        </div>
      )}
    </header>
  );
};

export default Navbar;