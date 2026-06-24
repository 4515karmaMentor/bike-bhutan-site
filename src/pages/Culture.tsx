import { Link } from 'react-router-dom';
import { MapPin, Users, Camera, Heart, BookOpen } from 'lucide-react';

const cultureData = [
  {
    id: 1,
    title: 'Dochula Pass',
    subtitle: 'START - 3,100M (9,100 FT)',
    description:
      "Arrive to one of Bhutan's most iconic vistas. On a clear day, you'll see over a dozen Himalayan peaks stretching across the horizon — including Gangkar Puensum, Bhutan's highest mountain. Surrounding you are the 108 white memorial chortens (stupas), built by the Queen Mother in 2004, and the beautiful Druk Wangyal Lhakhang temple adorned with paintings depicting 100 years of Bhutanese monarchy. Catch your breath. Then let go.",
    icon: MapPin,
    image: '/Images/hero-dochula-panorama.jpg',
    highlight: 'Best photo stop of the entire route',
  },
  {
    id: 2,
    title: 'Village Encounters',
    subtitle: 'DESCENT - ~2,400M',
    description:
      "As you ride through forested switchbacks, you'll pass small roadside villages where Bhutanese families live their daily lives — much the way they have for generations. We stop to say hello. Curious kids peek around doorways, mothers wave from porches, and your guide — who knows these families — translates the laughter both ways. These small, warm moments are what travellers tell us they remember most. This is the real Bhutan, not the postcard one.",
    icon: Users,
    image: '/Images/stop-mom-daughter.jpg',
    highlight: 'The warmest people in the Himalayas',
  },
  {
    id: 3,
    title: 'Chimi Lhakhang',
    subtitle: 'APPROACHING PUNAKHA — ~1,400M',
    description:
      "The 15th-century Fertility Temple, set in golden rice paddy fields. A place of pilgrimage and legend.",
    icon: Camera,
    image: '/images/chimi-lhakhang.jpg',
    highlight: 'A sacred site of fertility and blessings',
  },
  {
    id: 4,
    title: 'Punakha Dzong',
    subtitle: 'FINISH - 1,200M',
    description:
      "Your descent ends at arguably the most beautiful building in all of Bhutan. Built in 1637, Punakha Dzong — the 'Palace of Great Happiness' — sits at the sacred confluence of the Mo Chhu and Po Chhu rivers like a vision from another world. This six-storey fortress has been the site of royal coronations since 1907 and remains a living administrative and religious centre. Standing here at the end of your ride, you'll understand exactly why Bhutan is called the Last Shangri-La.",
    icon: Heart,
    image: '/Images/stop-punakha-dzong (2).jpg',
    highlight: 'A UNESCO Tentative World Heritage Site',
  },
];

export default function Culture() {
  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <span className="tag mb-4">Culture</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            600 Years of Living History
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Bhutan is the world's last great Himalayan Buddhist kingdom. This
            ride takes you right through the heart of it — ancient temples,
            sacred chortens, and stories that have been passed down for
            generations.
          </p>

          {/* Cards with image on top and hover effect */}
          <div className="mt-12 space-y-12">
            {cultureData.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Image with hover zoom and overlay – now with rounded corners on all sides */}
                  <div className="w-full h-64 md:h-80 overflow-hidden relative bg-gray-200 rounded-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://via.placeholder.com/800x400/cccccc/666666?text=No+Image';
                      }}
                    />
                    {/* Dark overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-3 mb-2">
                      <Icon className="w-5 h-5 text-[#F5A623] flex-shrink-0 mt-1" />
                      <div>
                        {item.subtitle && (
                          <span className="text-xs font-black text-[#F5A623] uppercase tracking-wider">
                            {item.subtitle}
                          </span>
                        )}
                        <h3 className="text-2xl font-bold text-gray-900">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mt-2">
                      {item.description}
                    </p>
                    {item.highlight && (
                      <span className="inline-block mt-4 text-xs font-semibold text-[#F5A623] bg-[#F5A623]/10 px-3 py-1.5 rounded-full">
                        ★ {item.highlight}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-[#F5A623]/5 rounded-2xl p-8 border border-[#F5A623]/20">
            <div className="flex items-start gap-4">
              <BookOpen className="w-6 h-6 text-[#F5A623] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900">
                  Your Guide Brings It to Life
                </h3>
                <p className="text-gray-600 mt-1">
                  Every stop becomes a story. Your guide shares history, legend,
                  spiritual significance, and local insight that you won't find
                  in any book. You'll leave knowing far more about this
                  incredible country than when you arrived.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link to="/book-now" className="btn-primary">
              Experience the Culture
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}