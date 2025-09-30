import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

/**
 * 🎯 Purpose: Service category cards with animated visuals
 * - Three main service paths for different business stages
 * - Animated SVG graphics and CSS animations
 * - Hover effects and floating animations
 */
export default function ServiceCategories() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Where Are You in Your <span className="text-gradient-animated">Advertising Journey?</span>
        </h2>
        <p className="text-xl text-slate-300 max-w-4xl mx-auto">
          We start by pinpointing exactly where you are in your advertising journey. Every business is unique, and your
          challenges require tailored solutions.
        </p>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Looking to Scale Card */}
        <Card className="service-card scale-card glass-morphism p-8 border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-500">
          {/* Visual Container */}
          <div className="h-40 mb-8 flex items-center justify-center bg-emerald-500/10 rounded-xl border border-emerald-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent"></div>

            {/* Scale Visual - Growth Charts */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <svg width="120" height="80" viewBox="0 0 120 80" className="text-emerald-400">
                <defs>
                  <linearGradient id="scaleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                {/* Growth Line */}
                <path
                  d="M10,60 Q30,45 60,30 T110,15"
                  stroke="#10b981"
                  strokeWidth="3"
                  fill="none"
                  className="animate-pulse"
                />

                {/* Data Points */}
                <circle cx="110" cy="15" r="4" fill="#10b981" className="animate-pulse" />
                <circle cx="60" cy="30" r="3" fill="#10b981" className="animate-pulse" />
                <circle cx="30" cy="45" r="3" fill="#10b981" className="animate-pulse" />

                {/* Bar Chart */}
                <g transform="translate(10, 50)">
                  <rect x="0" y="10" width="6" height="10" fill="#10b981" opacity="0.7" />
                  <rect x="8" y="5" width="6" height="15" fill="#10b981" opacity="0.8" />
                  <rect x="16" y="0" width="6" height="20" fill="#10b981" opacity="0.9" />
                  <rect x="24" y="-5" width="6" height="25" fill="#10b981" />
                </g>
              </svg>

              {/* Floating Metrics */}
              <div className="absolute top-2 right-2 bg-emerald-500/20 backdrop-blur-sm rounded-lg px-3 py-1 text-xs text-emerald-300">
                +250% ROAS
              </div>
              <div className="absolute bottom-2 left-2 bg-emerald-500/20 backdrop-blur-sm rounded-lg px-3 py-1 text-xs text-emerald-300">
                $30K Daily
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-3">Looking to Scale?</h3>
          <p className="text-emerald-300 mb-4 font-medium">Ready to scale above $25K-$30K daily</p>
          <p className="text-slate-300 mb-6 leading-relaxed">
            If you're ready to scale your campaign above 25k - 30k a day, we can do it by following our proven 6 step
            scaling strategy.
          </p>

          <Button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
            Learn More →
          </Button>
        </Card>

        {/* Spending Consistently Card */}
        <Card className="service-card consistent-card glass-morphism p-8 border-blue-500/30 hover:border-blue-500/60 transition-all duration-500">
          {/* Visual Container */}
          <div className="h-40 mb-8 flex items-center justify-center bg-blue-500/10 rounded-xl border border-blue-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>

            {/* Factory/Optimization Visual */}
            <div className="relative z-10 w-full h-full flex items-center justify-center gap-6">
              {/* Gear System */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 border-2 border-blue-400 rounded-full relative animate-spin">
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
                <div
                  className="w-6 h-6 border-2 border-blue-300 rounded-full relative animate-spin"
                  style={{ animationDirection: "reverse", animationDuration: "2s" }}
                >
                  <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-300 rounded-full"></div>
                  <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-300 rounded-full"></div>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="flex flex-col gap-2">
                <div className="w-16 h-2 bg-blue-500/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full animate-pulse"
                    style={{ width: "70%" }}
                  ></div>
                </div>
                <div className="w-16 h-2 bg-blue-500/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full animate-pulse"
                    style={{ width: "85%", animationDelay: "0.5s" }}
                  ></div>
                </div>
                <div className="w-16 h-2 bg-blue-500/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full animate-pulse"
                    style={{ width: "60%", animationDelay: "1s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-3">Spending Consistently But Not Seeing Results</h3>
          <p className="text-blue-300 mb-4 font-medium">Already spending but need better performance</p>
          <p className="text-slate-300 mb-6 leading-relaxed">
            If you're spending consistently on ads but the performance has dropped, we can help you with our customized
            6 step process.
          </p>

          <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
            Learn More →
          </Button>
        </Card>

        {/* Just Starting Out Card */}
        <Card className="service-card starting-card glass-morphism p-8 border-pink-500/30 hover:border-pink-500/60 transition-all duration-500">
          {/* Visual Container */}
          <div className="h-40 mb-8 flex items-center justify-center bg-pink-500/10 rounded-xl border border-pink-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent"></div>

            {/* Stressed Person Visual */}
            <div className="relative z-10 w-full h-full flex items-center justify-center gap-4">
              {/* Papers Stack */}
              <div className="flex flex-col gap-1">
                <div className="w-4 h-3 bg-white rounded-sm animate-float" style={{ animationDelay: "0s" }}></div>
                <div className="w-4 h-3 bg-gray-100 rounded-sm animate-float" style={{ animationDelay: "0.3s" }}></div>
                <div className="w-4 h-3 bg-gray-200 rounded-sm animate-float" style={{ animationDelay: "0.6s" }}></div>
              </div>

              {/* Person */}
              <div className="flex flex-col items-center">
                {/* Head */}
                <div className="w-4 h-4 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full mb-1 animate-pulse"></div>
                {/* Body */}
                <div className="w-5 h-6 bg-gradient-to-br from-pink-400 to-pink-500 rounded-sm relative">
                  {/* Arms */}
                  <div className="absolute -left-1 top-1 w-2 h-1 bg-orange-300 rounded-full animate-pulse"></div>
                  <div className="absolute -right-1 top-1 w-2 h-1 bg-orange-300 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Computer Setup */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-6 h-4 bg-gradient-to-br from-gray-600 to-gray-700 rounded-sm relative">
                  <div className="absolute inset-1 bg-gradient-to-br from-blue-500 to-blue-600 rounded-sm animate-pulse"></div>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-red-400 rounded-sm animate-bounce" style={{ animationDelay: "0s" }}></div>
                  <div
                    className="w-2 h-2 bg-green-400 rounded-sm animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-blue-400 rounded-sm animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-3">Just Starting Out</h3>
          <p className="text-pink-300 mb-4 font-medium">New to advertising and need guidance</p>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Ready to launch your first Facebook ad campaign but unsure where to begin? We'll guide you through the
            entire process step by step.
          </p>

          <Button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
            Learn More →
          </Button>
        </Card>
      </div>
    </div>
  )
}
