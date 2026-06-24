// src/pages/Ride.tsx
import { Link } from 'react-router-dom';
import { Bike, Mountain, Clock, MapPin, Award, Users } from 'lucide-react';

export default function Ride() {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <span className="tag mb-4">The Ride</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            The Ultimate Downhill Descent
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Experience the thrill of a lifetime as you descend 30 kilometres
            through the heart of the Himalayas. Pure downhill, zero uphill, and
            unforgettable views at every turn.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <Bike className="w-5 h-5 text-[#F5A623]" />
                <h3 className="font-bold text-gray-900">30km Descent</h3>
              </div>
              <p className="text-sm text-gray-500">
                Winding mountain roads with gravity doing all the work.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-[#F5A623]" />
                <h3 className="font-bold text-gray-900">~5 Hours</h3>
              </div>
              <p className="text-sm text-gray-500">
                Including cultural stops, photo breaks, and plenty of smiles.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <Mountain className="w-5 h-5 text-[#F5A623]" />
                <h3 className="font-bold text-gray-900">9,100ft Start</h3>
              </div>
              <p className="text-sm text-gray-500">
                Begin at Dochula Pass with panoramic Himalayan views.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-5 h-5 text-[#F5A623]" />
                <h3 className="font-bold text-gray-900">1,900m Drop</h3>
              </div>
              <p className="text-sm text-gray-500">
                Descend through forests to the warm Punakha Valley.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900">
              What Makes This Ride Special
            </h3>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-[#F5A623] mt-1">✦</span>
                <span>
                  <strong>Pure downhill</strong> — no pedalling uphill, just
                  pure gravity-powered joy.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F5A623] mt-1">✦</span>
                <span>
                  <strong>Expert guides</strong> — local riders who know every
                  corner and story.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F5A623] mt-1">✦</span>
                <span>
                  <strong>Premium bikes</strong> — quality road bikes built for
                  the descent.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F5A623] mt-1">✦</span>
                <span>
                  <strong>Cultural immersion</strong> — stops at temples,
                  villages, and markets.
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-10 text-center">
            <Link to="/book-now" className="btn-primary">
              Book Your Ride
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}