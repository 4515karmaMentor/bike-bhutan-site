// src/pages/Home.tsx
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  Bike,
  Mountain,
  Clock,
  Award,
  MapPin,
  Star,
  Users,
  Camera,
  Heart,
  Shield,
  BookOpen,
} from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        <div className="container-custom relative z-10 py-12 md:py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <span className="tag mb-6 inline-block">All Sales</span>

            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight text-gray-900">
              downhill
            </h1>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight text-[#F5A623] mt-2">
              Bhutan
            </h2>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-gray-900">30km</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">
                  Total Descent
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-gray-900">5hrs</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">
                  Duration
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-gray-900">9,100ft</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">
                  Starting Elevation
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-[#F5A623]">100%</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">
                  Pure Downhill
                </div>
              </div>
            </div>

            <p className="mt-6 text-lg md:text-xl text-gray-600 font-medium">
              OF PURE JOY <span className="text-[#F5A623]">✦</span> GUARANTEED
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link to="/book-now" className="btn-primary">
                Book Your Ride
              </Link>
              <Link to="/ride" className="btn-outline">
                See the Routes
              </Link>
            </div>

            <div className="mt-12 flex flex-col items-center text-gray-400 text-sm font-medium tracking-widest uppercase">
              <span>SCROLL DOWN</span>
              <ChevronDown className="w-5 h-5 mt-2 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Decorative blobs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#F5A623]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#F5A623]/5 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-gray-900 text-white py-8 border-t border-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-black text-[#F5A623]">All Year</div>
              <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-1">
                Round Season
              </div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#F5A623]">Zero</div>
              <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-1">
                Uphill. Ever.
              </div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#F5A623]">14%</div>
              <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-1">
                Smiles Delivered
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="tag mb-4">The Bike Bhutan Experience</span>
            <h2 className="section-title">One Ultra Experience</h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We don't make you choose between adrenaline and culture — you get
              both. The thrill of a 30-kilometre downhill descent, paired with
              stops at some of Bhutan's most sacred and stunning sites. One
              ride. One unforgettable day.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#F5A623]/10 rounded-full flex items-center justify-center mb-4">
                <Bike className="w-6 h-6 text-[#F5A623]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Nature Ride</h3>
              <p className="mt-2 text-gray-600">
                Adrenaline + Ancient Bhutan, All in One Descent
              </p>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                Clip in at 9,100 feet. Feel the wind. Roll past forests and
                prayer flags. Stop where the centuries-old temples are. Then
                keep flying. By the time you reach Punakha Valley, you'll have
                done something almost no traveller ever gets to do.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#F5A623]/10 rounded-full flex items-center justify-center mb-4">
                <Mountain className="w-6 h-6 text-[#F5A623]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">The Thrill</h3>
              <p className="mt-2 text-gray-600">Pure Downhill, Zero Uphill</p>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                30 kilometres of winding mountain road. Gravity does the work.
                You just lean in, let go, and grin the whole way down.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THRILL & CULTURE ===== */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <div className="w-12 h-12 bg-[#F5A623]/10 rounded-full flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-[#F5A623]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">The Thrill</h3>
              <p className="text-lg text-[#F5A623] font-semibold mt-1">
                Pure Downhill, Zero Uphill
              </p>
              <p className="mt-3 text-gray-600 leading-relaxed">
                30 kilometres of winding mountain road. Gravity does the work.
                You just lean in, let go, and grin the whole way down.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-[#F5A623]/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-[#F5A623]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">The Culture</h3>
              <p className="text-lg text-[#F5A623] font-semibold mt-1">
                600 Years of Living History
              </p>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Stop at ancient chortens, sacred temples, and Bhutan's most
                beautiful fortress. Your guide brings every site to life with
                stories you won't find in any book.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT THIS RIDE DELIVERS ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">What This Ride Delivers</h2>
            <p className="mt-4 text-gray-600">
              Every Bike Bhutan ride includes the descent AND the cultural
              stops. One price. One incredible day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-[#F5A623]/10 rounded-full flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5 text-[#F5A623]" />
              </div>
              <h4 className="font-bold text-gray-900">Start at Dochula Pass</h4>
              <p className="text-sm text-gray-500 mt-1">
                9,100 ft of jaw-dropping Himalayan views and 108 sacred chortens
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-[#F5A623]/10 rounded-full flex items-center justify-center mb-3">
                <Mountain className="w-5 h-5 text-[#F5A623]" />
              </div>
              <h4 className="font-bold text-gray-900">Descend 1,900m</h4>
              <p className="text-sm text-gray-500 mt-1">
                Through ancient forests all the way to the warm Punakha Valley
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-[#F5A623]/10 rounded-full flex items-center justify-center mb-3">
                <Camera className="w-5 h-5 text-[#F5A623]" />
              </div>
              <h4 className="font-bold text-gray-900">Visit Chimi Lhakhang</h4>
              <p className="text-sm text-gray-500 mt-1">
                The 15th-century Fertility Temple set in golden rice paddy
                fields
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-[#F5A623]/10 rounded-full flex items-center justify-center mb-3">
                <Award className="w-5 h-5 text-[#F5A623]" />
              </div>
              <h4 className="font-bold text-gray-900">Punakha Suspension Bridge</h4>
              <p className="text-sm text-gray-500 mt-1">
                160m of prayer flags above the turquoise Po Chhu River
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-[#F5A623]/10 rounded-full flex items-center justify-center mb-3">
                <Clock className="w-5 h-5 text-[#F5A623]" />
              </div>
              <h4 className="font-bold text-gray-900">Finish at Punakha Dzong</h4>
              <p className="text-sm text-gray-500 mt-1">
                Bhutan's most beautiful fortress, built in 1637 at the river
                confluence
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-[#F5A623]/10 rounded-full flex items-center justify-center mb-3">
                <Users className="w-5 h-5 text-[#F5A623]" />
              </div>
              <h4 className="font-bold text-gray-900">Your Guide Rides With You</h4>
              <p className="text-sm text-gray-500 mt-1">
                Leading, narrating, and making sure you have a blast
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CULTURAL ROUTE HIGHLIGHTS ===== */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="tag mb-4">Cultural Route Highlights</span>
            <h2 className="section-title">Ride Through Living History</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Bhutan is the world's last great Himalayan Buddhist kingdom — and
              this route takes you right through the heart of it. Every stop is
              a story. Your guide will make sure you leave knowing far more
              about this incredible country than when you arrived.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-10">
            {/* Stop 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-1/3">
                  <span className="text-xs font-black text-[#F5A623] uppercase tracking-wider">
                    START — 3,100M (9,100 FT)
                  </span>
                  <h4 className="text-xl font-bold text-gray-900 mt-2">
                    Dochula Pass
                  </h4>
                  <p className="text-sm text-gray-500 italic">Where the Ride Begins</p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600 leading-relaxed">
                    Arrive to one of Bhutan's most iconic vistas. On a clear day,
                    you'll see over a dozen Himalayan peaks stretching across the
                    horizon — including Gangkar Puensum, Bhutan's highest
                    mountain. Surrounding you are the 108 white memorial chortens
                    (stupas), built by the Queen Mother in 2004, and the beautiful
                    Druk Wangyal Lhakhang temple adorned with paintings depicting
                    100 years of Bhutanese monarchy. Catch your breath. Then let
                    go.
                  </p>
                  <span className="inline-block mt-3 text-xs font-semibold text-[#F5A623] bg-[#F5A623]/10 px-3 py-1 rounded-full">
                    ★ Best photo stop of the entire route
                  </span>
                </div>
              </div>
            </div>

            {/* Stop 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-1/3">
                  <span className="text-xs font-black text-[#F5A623] uppercase tracking-wider">
                    DESCENT — ~2,400M
                  </span>
                  <h4 className="text-xl font-bold text-gray-900 mt-2">
                    Meet a Bhutanese Family
                  </h4>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600 leading-relaxed">
                    As you ride through forested switchbacks, you'll pass small
                    roadside villages where Bhutanese families live their daily
                    lives — much the way they have for generations. We stop to say
                    hello. Curious kids peek around doorways, mothers wave from
                    porches, and your guide — who knows these families —
                    translates the laughter both ways. These small, warm moments
                    are what travellers tell us they remember most. This is the
                    real Bhutan, not the postcard one.
                  </p>
                  <span className="inline-block mt-3 text-xs font-semibold text-[#F5A623] bg-[#F5A623]/10 px-3 py-1 rounded-full">
                    ❤️ The warmest people in the Himalayas
                  </span>
                </div>
              </div>
            </div>

            {/* Stop 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-1/3">
                  <span className="text-xs font-black text-[#F5A623] uppercase tracking-wider">
                    APPROACHING PUNAKHA — ~1,400M
                  </span>
                  <h4 className="text-xl font-bold text-gray-900 mt-2">
                    Punakha Suspension Bridge
                  </h4>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600 leading-relaxed">
                    Cross the longest suspension bridge in Bhutan — stretching 160
                    metres above the turquoise Po Chhu River, draped in thousands
                    of colourful prayer flags whose mantras are carried by the
                    wind to bless all who pass below. Built in 1997 to connect
                    remote villages to Punakha Dzong, today it's one of those
                    views you never want to leave. Take a deep breath. Look
                    upriver. Look down.
                  </p>
                  <span className="inline-block mt-3 text-xs font-semibold text-[#F5A623] bg-[#F5A623]/10 px-3 py-1 rounded-full">
                    👀 Don't look down... or do, it's stunning
                  </span>
                </div>
              </div>
            </div>

            {/* Stop 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-1/3">
                  <span className="text-xs font-black text-[#F5A623] uppercase tracking-wider">
                    PUNAKHA VALLEY — ~1,300M
                  </span>
                  <h4 className="text-xl font-bold text-gray-900 mt-2">
                    The Local Farmers' Market
                  </h4>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600 leading-relaxed">
                    Down in the warm valley floor, we pause at a local farmers'
                    market — where vendors arrive at sunrise with what their
                    families grew that morning. Stalls overflow with fiery red
                    chillies, fresh mustard greens, mountain cheese, wild ferns,
                    and red rice straight from the Punakha paddies. Try a snack
                    you've never heard of. Trade smiles with the auntie behind the
                    counter. This is everyday Bhutan at its most colourful, most
                    fragrant, and most delicious.
                  </p>
                  <span className="inline-block mt-3 text-xs font-semibold text-[#F5A623] bg-[#F5A623]/10 px-3 py-1 rounded-full">
                    🌶️ Chillies, mountain cheese, and stories
                  </span>
                </div>
              </div>
            </div>

            {/* Stop 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-1/3">
                  <span className="text-xs font-black text-[#F5A623] uppercase tracking-wider">
                    FINISH — 1,200M
                  </span>
                  <h4 className="text-xl font-bold text-gray-900 mt-2">
                    Punakha Dzong
                  </h4>
                  <p className="text-sm text-gray-500 italic">The Grand Finale</p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600 leading-relaxed">
                    Your descent ends at arguably the most beautiful building in
                    all of Bhutan. Built in 1637, Punakha Dzong — the "Palace of
                    Great Happiness" — sits at the sacred confluence of the Mo
                    Chhu and Po Chhu rivers like a vision from another world. This
                    six-storey fortress has been the site of royal coronations
                    since 1907 and remains a living administrative and religious
                    centre. Standing here at the end of your ride, you'll
                    understand exactly why Bhutan is called the Last Shangri-La.
                  </p>
                  <span className="inline-block mt-3 text-xs font-semibold text-[#F5A623] bg-[#F5A623]/10 px-3 py-1 rounded-full">
                    🏛️ A UNESCO Tentative World Heritage Site
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WE'VE GOT YOU COVERED ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">We've Got You Covered</h2>
            <p className="mt-4 text-gray-600">
              Show up ready to ride. We take care of everything else — so you
              can focus entirely on having the time of your life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#F5A623]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Bike className="w-7 h-7 text-[#F5A623]" />
              </div>
              <h4 className="font-bold text-gray-900">Premium Road Bike</h4>
              <p className="text-sm text-gray-500 mt-1">
                A quality road bike perfectly suited to this descent — smooth,
                fast, and built to handle every corner with confidence.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#F5A623]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-7 h-7 text-[#F5A623]" />
              </div>
              <h4 className="font-bold text-gray-900">Helmet</h4>
              <p className="text-sm text-gray-500 mt-1">
                A properly fitted helmet is yours for the ride. Safety is our
                foundation — we want you to finish as happy as you start, every
                single time.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#F5A623]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-7 h-7 text-[#F5A623]" />
              </div>
              <h4 className="font-bold text-gray-900">Expert Local Guide</h4>
              <p className="text-sm text-gray-500 mt-1">
                Your personal guide rides with you the entire way — leading the
                route, pointing out the highlights, and sharing stories about
                Bhutan that you'll be retelling for years.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#F5A623]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-7 h-7 text-[#F5A623]" />
              </div>
              <h4 className="font-bold text-gray-900">Start-to-Finish Support</h4>
              <p className="text-sm text-gray-500 mt-1">
                We handle the logistics from Dochula Pass all the way to
                Punakha. You just ride. No planning, no stress, no confusion.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#F5A623]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-7 h-7 text-[#F5A623]" />
              </div>
              <h4 className="font-bold text-gray-900">Cultural Narration</h4>
              <p className="text-sm text-gray-500 mt-1">
                On the Cultural Ride, your guide brings each stop to life —
                history, legend, spiritual significance, and local insight.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#F5A623]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-7 h-7 text-[#F5A623]" />
              </div>
              <h4 className="font-bold text-gray-900">Memories That Last</h4>
              <p className="text-sm text-gray-500 mt-1">
                The Himalayas above you, the valley below, prayer flags in the
                breeze — this ride delivers the kind of moments that stay with
                you long after you've gone home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== READY? LET'S DO THIS ===== */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold">Ready? Let's Do This</h2>
            <p className="mt-4 text-lg text-gray-300">
              You bring one thing: a smile — and the expectation of having an
              absolute blast. That's the only requirement for this ride. We'll
              handle everything else. 😊
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-[#F5A623]">Pick Your Time Slot & Ride</h3>
                <p className="text-sm text-gray-300 mt-2">
                  We run two departures daily — morning and afternoon. Both
                  start at Dochula Pass and finish in the Punakha Valley. Both
                  are completely downhill. Both are unforgettable.
                </p>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-3 bg-gray-700/30 rounded-lg px-4 py-2">
                    <span className="text-[#F5A623] font-bold">9:30 AM</span>
                    <span className="text-xs text-gray-400">
                      Morning rides often have the clearest Himalayan views from
                      Dochula Pass.
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-700/30 rounded-lg px-4 py-2">
                    <span className="text-[#F5A623] font-bold">1:00 PM</span>
                    <span className="text-xs text-gray-400">
                      Afternoon rides catch the golden light over the Punakha
                      Valley — incredible for photos.
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#F5A623]">Secure Your Spot</h3>
                  <p className="text-sm text-gray-300 mt-2">
                    Drop us a WhatsApp — tell us which ride and which time slot
                    and we'll sort everything out for you. Simple as that.
                  </p>
                  <ol className="mt-4 space-y-2 text-sm text-gray-300 list-decimal list-inside">
                    <li>
                      Send us a WhatsApp — tell us your preferred date and time
                      slot (9:30am or 1pm) and which ride you want (Thrill or
                      Cultural)
                    </li>
                    <li>
                      We confirm your spot — we'll send back a quick
                      confirmation and any details you need to know
                    </li>
                    <li>
                      Show up at Dochula Pass — we handle everything from here.
                      Bike. Helmet. Guide. All sorted.
                    </li>
                    <li>
                      Ride, grin, repeat — arrive in Punakha Valley wondering if
                      it's too soon to book again 😄
                    </li>
                  </ol>
                </div>
                <Link
                  to="/book-now"
                  className="mt-6 btn-primary w-full text-center"
                >
                  Book Your Ride Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}