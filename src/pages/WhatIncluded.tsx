// src/pages/WhatIncluded.tsx
import { Link } from 'react-router-dom';
import {
  Bike,
  Shield,
  Users,
  MapPin,
  BookOpen,
  Heart,
  CheckCircle,
} from 'lucide-react';

export default function WhatIncluded() {
  const inclusions = [
    {
      icon: Bike,
      title: 'Premium Road Bike',
      description:
        'A quality road bike perfectly suited for the descent — smooth, fast, and built to handle every corner with confidence.',
    },
    {
      icon: Shield,
      title: 'Helmet',
      description:
        'A properly fitted helmet is yours for the ride. Safety is our foundation — we want you to finish as happy as you start.',
    },
    {
      icon: Users,
      title: 'Expert Local Guide',
      description:
        'Your personal guide rides with you the entire way — leading, narrating, and making sure you have a blast.',
    },
    {
      icon: MapPin,
      title: 'Start-to-Finish Support',
      description:
        'We handle the logistics from Dochula Pass all the way to Punakha. You just ride. No planning, no stress.',
    },
    {
      icon: BookOpen,
      title: 'Cultural Narration',
      description:
        'Every stop comes to life with history, legend, and local insight that makes every moment richer and more meaningful.',
    },
    {
      icon: Heart,
      title: 'Memories That Last',
      description:
        'The Himalayas above you, the valley below, prayer flags in the breeze — moments that stay with you forever.',
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <span className="tag mb-4">What's Included</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Everything You Need, Nothing You Don't
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Show up ready to ride. We take care of everything else — so you can
            focus entirely on having the time of your life.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {inclusions.map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F5A623]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-[#F5A623]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#F5A623]" />
              One Price. One Incredible Day.
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Every Bike Bhutan ride includes the descent AND the cultural
              stops. No hidden fees, no surprises. Just pure downhill joy and
              unforgettable cultural immersion.
            </p>
          </div>

          <div className="mt-10 text-center">
            <Link to="/book-now" className="btn-primary">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}