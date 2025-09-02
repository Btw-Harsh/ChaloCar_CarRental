import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets'; // Make sure luxuryCar is exported here

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500'>
      {/* Top Section */}
      <div className='flex flex-wrap justify-between items-start gap-8 pb-6 border-borderColor border-b'>
        {/* Logo & Description */}
        <div className='max-w-80'>
          <Link to="/" className="flex items-center gap-2">
            <img src={assets.luxuryCar} alt="ChaloCar Logo" className="h-10 w-auto" />
            <span className="text-3xl font-bold text-gray-800">ChaloCar</span>
          </Link>
          <p className='text-sm mt-2'>
            ChaloCar is your trusted car rental partner, offering luxury and affordable options to suit your travel needs.
          </p>
          <div className='flex items-center gap-3 mt-4'>
           <a href="#"><img src={assets.facebook_logo} className='w-5 h-5' alt=""/></a>
           <a href="#"><img src={assets.instagram_logo} className='w-5 h-5' alt=""/></a>
            <a href="#"><img src={assets.twitter_logo} className='w-5 h-5' alt=""/></a>
           <a href="#"><img src={assets.gmail_logo} classNamee='w-5 h-5' alt=""/></a>
          </div>
        </div>

    
        <div>
          <h2 className='text-base font-medium text-gray-800 uppercase'>Quick Links</h2>
          <ul className='mt-3 flex flex-col gap-1.5 '>
            <li><Link to="#">Home</Link></li>
            <li><Link to="#">Browse Cars</Link></li>
            <li><Link to="#">List your Car</Link></li>
            <li><Link to="#">About us</Link></li>
          </ul>
        </div>
        <div>
          <h2 className='text-base font-medium text-gray-800 uppercase'>Resources</h2>
          <ul className='mt-3 flex flex-col gap-1.5 '>
            <li><Link to="#">Help Center</Link></li>
            <li><Link to="#">Terms of Service</Link></li>
            <li><Link to="#">Privacy Policy</Link></li>
            <li><Link to="#">Insurance</Link></li>
          </ul>
        </div>
        <div>
          <h2 className='text-base font-medium text-gray-800 uppercase'>Contact</h2>
          <ul className='mt-3 flex flex-col gap-1.5 '>
            <li>95, Patel Nagar, Bhopal</li>
            <li>Madhya Pradesh, 462022</li>
            <li>+91 1234123412</li>
            <li>about@example.com</li>
          </ul>
        </div>
        
        

        
      </div>

      {/* Bottom Section */}
      <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
        <p>© {new Date().getFullYear()} <Link to="/">ChaloCar</Link>. All rights reserved.</p>
        <ul className='flex items-center gap-4'>
          <li><Link to="#">Privacy</Link></li>
          <li>|</li>
          <li><Link to="#">Terms</Link></li>
          <li>|</li>
          <li><Link to="#">Cookies</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
