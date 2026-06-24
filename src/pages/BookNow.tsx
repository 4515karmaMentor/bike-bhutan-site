// src/pages/BookNow.tsx
import { useState } from 'react';
import { Send, Clock, Bike, CheckCircle } from 'lucide-react';

export default function BookNow() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    timeSlot: 'morning',
    rideType: 'cultural',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend
    console.log('Booking request:', formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        timeSlot: 'morning',
        rideType: 'cultural',
        message: '',
      });
    }, 3000);
  };

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="tag mb-4">Book Now</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Secure Your Ride
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Ready for the adventure of a lifetime? Fill in your details and
              we'll get you sorted. Simple, fast, and unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Booking Request Sent!
                  </h3>
                  <p className="text-gray-600 mt-2">
                    We'll be in touch via WhatsApp within 24 hours to confirm
                    your spot.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent transition"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent transition"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent transition"
                      placeholder="+ country code and number"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Time Slot *
                      </label>
                      <select
                        name="timeSlot"
                        value={formData.timeSlot}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent transition appearance-none bg-white"
                      >
                        <option value="morning">9:30 AM — Morning</option>
                        <option value="afternoon">1:00 PM — Afternoon</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Ride Type *
                    </label>
                    <select
                      name="rideType"
                      value={formData.rideType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent transition appearance-none bg-white"
                    >
                      <option value="cultural">Cultural Ride (Full Experience)</option>
                      <option value="thrill">Thrill Ride (Pure Downhill)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Special Requests / Notes
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent transition resize-none"
                      placeholder="Any dietary restrictions, fitness concerns, or special requests?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary py-4 text-base flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Booking Request
                  </button>

                  <p className="text-xs text-gray-400 text-center mt-2">
                    We'll confirm your spot within 24 hours via WhatsApp.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#F5A623]/5 rounded-2xl p-6 border border-[#F5A623]/20">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#F5A623]" />
                  Quick Details
                </h3>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-500">Duration</span>
                    <span className="font-semibold">~5 hours</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500">Distance</span>
                    <span className="font-semibold">30 km downhill</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500">Start Elevation</span>
                    <span className="font-semibold">9,100 ft</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500">Group Size</span>
                    <span className="font-semibold">2–8 riders</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 text-white rounded-2xl p-6">
                <h3 className="font-bold flex items-center gap-2">
                  <Bike className="w-4 h-4 text-[#F5A623]" />
                  What's Included
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#F5A623]" />
                    Premium road bike
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#F5A623]" />
                    Helmet & safety gear
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#F5A623]" />
                    Expert local guide
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#F5A623]" />
                    Cultural stops & narration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#F5A623]" />
                    Start-to-finish support
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                <p className="text-sm text-gray-500">Questions?</p>
                <a
                  href="#"
                  className="text-[#F5A623] font-bold hover:underline"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}