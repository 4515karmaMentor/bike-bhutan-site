import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react'; // You'll need to import this if not already

export default function Home() {
  return (
    <div>
      {/* ===== HERO with Background Video ===== */}
      <section className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center">
        {/* Background Video */}
       <video
  autoPlay
  loop
  muted
  playsInline
  className="absolute top-0 left-0 w-full h-full object-cover"
>
  <source src="/vedios/bhutan-ride.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Content on top of video */}
        <div className="container-custom relative z-20 py-12 md:py-20 lg:py-28 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <span className="tag bg-white/20 text-white border border-white/30 inline-block mb-6">
              ALL SALES
            </span>

            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight">
              downhill
            </h1>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight text-[#F5A623] mt-2">
              Bhutan
            </h2>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-white">30km</div>
                <div className="text-xs text-gray-200 font-medium uppercase tracking-wider mt-1">
                  Total Descent
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-white">5hrs</div>
                <div className="text-xs text-gray-200 font-medium uppercase tracking-wider mt-1">
                  Duration
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-white">9,100ft</div>
                <div className="text-xs text-gray-200 font-medium uppercase tracking-wider mt-1">
                  Starting Elevation
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-[#F5A623]">100%</div>
                <div className="text-xs text-gray-200 font-medium uppercase tracking-wider mt-1">
                  Pure Downhill
                </div>
              </div>
            </div>

            <p className="mt-6 text-lg md:text-xl text-white/90 font-medium">
              OF PURE JOY <span className="text-[#F5A623]">✦</span> GUARANTEED
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link to="/book-now" className="btn-primary bg-[#F5A623] hover:bg-[#e0991f] text-white border-0">
                Book Your Ride
              </Link>
              <Link to="/ride" className="btn-outline border-white text-white hover:bg-white hover:text-gray-900">
                See the Routes
              </Link>
            </div>

            <div className="mt-12 flex flex-col items-center text-white/60 text-sm font-medium tracking-widest uppercase">
              <span>SCROLL DOWN</span>
              <ChevronDown className="w-5 h-5 mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== REST OF YOUR HOME PAGE (all other sections) ===== */}
      {/* ... keep everything else unchanged ... */}
    </div>
  );
}