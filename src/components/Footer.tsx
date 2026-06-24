import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-extrabold text-white">
              Bike<span className="text-[#F5A623]">Bhutan</span>
            </Link>
            <p className="mt-3 text-sm text-gray-400 max-w-md">
              The ultimate downhill biking experience through the heart of the
              Himalayas. Adrenaline, culture, and joy — all in one ride.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/ride" className="hover:text-[#F5A623] transition">
                  The Ride
                </Link>
              </li>
              <li>
                <Link to="/culture" className="hover:text-[#F5A623] transition">
                  Culture
                </Link>
              </li>
              <li>
                <Link
                  to="/what-included"
                  className="hover:text-[#F5A623] transition"
                >
                  What's Included
                </Link>
              </li>
              <li>
                <Link
                  to="/book-now"
                  className="hover:text-[#F5A623] transition"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-[#F5A623] transition"
                  aria-label="WhatsApp"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#F5A623] transition"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#F5A623] transition"
                  aria-label="Email"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-gray-800 text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span>© {new Date().getFullYear()} Bike Bhutan. All rights reserved.</span>
          <span>Made with ❤️ in the Himalayas</span>
        </div>
      </div>
    </footer>
  );
}