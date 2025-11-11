import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 border-t border-gray-200 mt-10 text-[14px] leading-relaxed tracking-wide">
      <div className="max-w-[1080px] min-w-[980px] mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        
        {/* ONLINE SHOPPING */}
        <div>
          <h3 className="font-bold text-[12px] text-gray-900 mb-3 uppercase">
            Online Shopping
          </h3>
          <ul className="space-y-1">
            <li><Link to="/men" className="hover:text-pink-600">Men</Link></li>
            <li><Link to="/women" className="hover:text-pink-600">Women</Link></li>
            <li><Link to="/kids" className="hover:text-pink-600">Kids</Link></li>
            <li><Link to="/home-living" className="hover:text-pink-600">Home & Living</Link></li>
            <li><Link to="/beauty" className="hover:text-pink-600">Beauty</Link></li>
          </ul>
        </div>

        {/* CUSTOMER POLICIES */}
        <div>
          <h3 className="font-bold text-[12px] text-gray-900 mb-3 uppercase">
            Customer Policies
          </h3>
          <ul className="space-y-1">
            <li><Link to="/contact" className="hover:text-pink-600">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-pink-600">FAQ</Link></li>
            <li><Link to="/terms" className="hover:text-pink-600">T&C</Link></li>
            <li><Link to="/privacy" className="hover:text-pink-600">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* USEFUL LINKS */}
        <div>
          <h3 className="font-bold text-[12px] text-gray-900 mb-3 uppercase">
            Useful Links
          </h3>
          <ul className="space-y-1">
            <li><Link to="/blog" className="hover:text-pink-600">Blog</Link></li>
            <li><Link to="/careers" className="hover:text-pink-600">Careers</Link></li>
            <li><Link to="/sitemap" className="hover:text-pink-600">Site Map</Link></li>
            <li><Link to="/corporate" className="hover:text-pink-600">Corporate Information</Link></li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="font-bold text-[12px] text-gray-900 mb-3 uppercase">
            Keep in Touch
          </h3>
          <div className="flex gap-4 text-gray-500 text-[16px]">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-pink-600">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-pink-600">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-pink-600">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-pink-600">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 py-3">
        <p className="text-center text-[11px] text-gray-500">
          © 2025 MyStore. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
