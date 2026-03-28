import { motion } from 'framer-motion';
import { Plus, Sparkles, Command, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFC] font-sans text-gray-900 relative flex flex-col items-center overflow-x-hidden selection:bg-purple-500/30">
      
      {/* Background Effects */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[400px] md:h-[600px] bg-purple-300/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-300/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-pink-300/30 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwgMCwgMCwgMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white_20%,transparent_80%)] opacity-100 z-0" />

      {/* Floating Navbar */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 z-50 flex items-center w-full justify-center px-4"
      >
        <div className="bg-white/70 backdrop-blur-xl border border-black/5 text-gray-900 rounded-full px-4 py-2 flex items-center gap-6 md:gap-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] max-w-full">
          <div className="flex items-center gap-2 pl-2">
            {/* Logo Icon */}
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <span className="text-white text-xs font-bold leading-none tracking-tighter">V</span>
            </div>
            <span className="font-bold tracking-tight text-sm hidden sm:block">Vynk</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">Components</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Snippets</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Templates</a>
          </div>
          
          <div className="flex sm:hidden items-center gap-4 text-sm font-medium text-gray-500">
             <a href="#" className="hover:text-gray-900 transition-colors">Docs</a>
          </div>
          
          <button className="text-sm font-semibold bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-black transition-colors shadow-[0_4px_14px_0_rgb(0,0,0,0.1)] ml-auto sm:ml-0">
            Get Started
          </button>
        </div>
      </motion.nav>

      {/* Hero Text Section */}
      <header className="relative z-10 flex flex-col items-center text-center mt-32 md:mt-48 px-4 w-full">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 px-4 sm:px-5 py-2 rounded-full border border-purple-200 bg-purple-50 text-xs sm:text-sm font-semibold flex items-center gap-2 backdrop-blur-md text-purple-700 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-purple-500" />
          <span>Vynk CLI 2.0 is now available</span>
          <ArrowRight className="w-3 h-3 ml-1" />
        </motion.div>
        
        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 max-w-5xl text-gray-900 leading-[1.1] md:leading-[1.1]"
        >
          Design perfectly. <br className="hidden sm:block" /> 
          Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">instantly.</span>
        </motion.h1>
        
        {/* Sub-heading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-gray-500 max-w-2xl text-base sm:text-lg md:text-xl mb-10 text-balance leading-relaxed font-normal px-4"
        >
          Generate beautiful, animated, and functional UI components effortlessly using the Vynk CLI. Focus on your product logic, we handle the pixels.
        </motion.p>
        
        {/* CTA Button & Output */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4"
        >
          <button className="w-full sm:w-auto group relative flex items-center justify-center gap-2 bg-gray-900 text-white rounded-full px-8 py-4 font-semibold text-base hover:bg-black transition-all shadow-xl shadow-gray-900/20 hover:shadow-2xl hover:shadow-gray-900/30 hover:scale-[1.02]">
            Start Building
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="hidden sm:flex items-center gap-3 px-6 py-4 bg-white border border-gray-200 rounded-full text-sm font-mono text-gray-700 backdrop-blur-md hover:bg-gray-50 transition-colors cursor-copy shadow-sm">
            <span><span className="text-purple-600">npm</span> create vynk@latest</span>
            <div className="p-1.5 bg-gray-100/80 rounded-md border border-gray-200">
              <Command className="w-3 h-3 text-gray-500" />
            </div>
          </div>
        </motion.div>
      </header>

      {/* Interactive Visuals (Phone Mockups) */}
      <section className="relative w-full max-w-5xl mx-auto h-[600px] md:h-[700px] mt-24 mb-32 flex justify-center items-start perspective-[2000px] z-20 overflow-visible">
        
        {/* Left Phone */}
        <motion.div
          className="hidden md:flex absolute top-10 w-[240px] h-[500px] lg:w-[320px] lg:h-[650px] bg-white border border-gray-100 rounded-[2.5rem] lg:rounded-[3rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1),_0_0_0_1px_rgba(0,0,0,0.02)] flex-col overflow-hidden z-10"
          initial={{ x: 0, rotateY: 0, rotateZ: 0, scale: 0.9, opacity: 0 }}
          whileInView={{ x: -160, rotateY: 15, rotateZ: -8, scale: 0.9, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: 'spring', bounce: 0.3, duration: 1.5, delay: 0.2 }}
        >
          {/* Glass Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/80 to-transparent pointer-events-none z-30" />
          
          {/* Dynamic Island Notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 lg:w-24 lg:h-7 bg-black rounded-full z-20"></div>
          
          {/* Mockup Content */}
          <div className="flex-1 bg-gray-50 p-4 pt-16 flex flex-col gap-3 lg:gap-4 relative overflow-hidden">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-xs lg:text-sm font-semibold text-gray-900">Analytics</h3>
              <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-purple-100 flex items-center justify-center">
                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-purple-500 rounded-full" />
              </div>
            </div>
            
            {/* Stat Card */}
            <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-3 lg:p-4 relative overflow-hidden">
              <p className="text-[9px] lg:text-[10px] text-gray-500 font-medium mb-1">Total Audience</p>
              <p className="text-lg lg:text-xl font-bold text-gray-900">2.4M</p>
              <div className="mt-2 lg:mt-3 flex items-end gap-1.5 h-8 lg:h-10 w-full">
                {[40, 70, 45, 90, 65, 80, 50, 100].map((h, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.8, type: "spring" }}
                    className="flex-1 bg-purple-500 rounded-t-sm"
                  />
                ))}
              </div>
            </div>

            {/* List items */}
            <div className="space-y-2 lg:space-y-3 mt-1">
              {[
                { name: "Pro Plan Subscription", price: "$49.00", color: "bg-blue-100", dot: "bg-blue-500" },
                { name: "Enterprise Update", price: "$299.00", color: "bg-emerald-100", dot: "bg-emerald-500" },
                { name: "UI Kit Purchase", price: "$89.00", color: "bg-pink-100", dot: "bg-pink-500" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 lg:gap-3 bg-white p-2 lg:p-3 rounded-xl border border-gray-100 shadow-sm">
                  <div className={`w-6 h-6 lg:w-8 lg:h-8 rounded-full ${item.color} flex items-center justify-center`}>
                    <div className={`w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full ${item.dot}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[9px] lg:text-[11px] font-semibold text-gray-900 leading-tight">{item.name}</p>
                    <p className="text-[8px] lg:text-[9px] text-gray-500 mt-0.5">Just now</p>
                  </div>
                  <p className="text-[9px] lg:text-[11px] font-bold text-gray-900">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Phone */}
        <motion.div
          className="hidden md:flex absolute top-10 w-[240px] h-[500px] lg:w-[320px] lg:h-[650px] bg-white border border-gray-100 rounded-[2.5rem] lg:rounded-[3rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1),_0_0_0_1px_rgba(0,0,0,0.02)] flex-col overflow-hidden z-10"
          initial={{ x: 0, rotateY: 0, rotateZ: 0, scale: 0.9, opacity: 0 }}
          whileInView={{ x: 160, rotateY: -15, rotateZ: 8, scale: 0.9, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: 'spring', bounce: 0.3, duration: 1.5, delay: 0.2 }}
        >
          {/* Glass Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tl from-white/80 to-transparent pointer-events-none z-30" />
          
          {/* Dynamic Island Notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 lg:w-24 lg:h-7 bg-black rounded-full z-20"></div>
          
          {/* Mockup Content */}
          <div className="flex-1 bg-gray-50 p-4 pt-16 flex flex-col gap-3 lg:gap-4 relative overflow-hidden">
             
             {/* Profile Card */}
             <div className="rounded-2xl bg-white p-3 lg:p-4 flex flex-col items-center border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-12 lg:h-16 bg-gradient-to-r from-blue-400 to-purple-500" />
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-white bg-gradient-to-tr from-rose-400 to-orange-400 mt-4 lg:mt-6 z-10 shadow-md flex items-center justify-center">
                   <span className="text-white font-bold text-sm lg:text-lg">SJ</span>
                </div>
                <h4 className="text-xs lg:text-sm font-bold text-gray-900 mt-2">Sarah Jenkins</h4>
                <p className="text-[9px] lg:text-[10px] text-gray-500 font-medium pb-1">Frontend Engineer</p>
             </div>

             {/* UI Toggles */}
             <div className="rounded-2xl bg-white p-3 lg:p-4 border border-gray-100 shadow-sm space-y-3 lg:space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[10px] lg:text-xs font-semibold text-gray-800">Dark Mode</p>
                    <p className="text-[8px] lg:text-[10px] text-gray-500 mt-0.5">Auto switch theme</p>
                  </div>
                  <div className="w-7 h-4 lg:w-8 lg:h-5 rounded-full bg-blue-500 relative flex items-center px-0.5">
                    <motion.div initial={{ x: 0 }} whileInView={{ x: 12 }} transition={{ delay: 1, type: "spring" }} className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-white shadow-sm" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[10px] lg:text-xs font-semibold text-gray-800">Notifications</p>
                    <p className="text-[8px] lg:text-[10px] text-gray-500 mt-0.5">Push & email</p>
                  </div>
                  <div className="w-7 h-4 lg:w-8 lg:h-5 rounded-full bg-gray-200 relative flex items-center px-0.5">
                    <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-white shadow-sm" />
                  </div>
                </div>
             </div>

             {/* Small Grid */}
             <div className="grid grid-cols-2 gap-2 lg:gap-3 mt-1">
                <div className="bg-gradient-to-br from-pink-500 to-rose-500 h-16 lg:h-20 rounded-xl p-2 lg:p-3 flex flex-col justify-end text-white shadow-md shadow-pink-500/20">
                   <p className="text-[10px] lg:text-xs font-bold leading-tight">Colors</p>
                   <p className="text-[8px] lg:text-[9px] opacity-80 mt-0.5">12 Palettes</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-400 to-teal-500 h-16 lg:h-20 rounded-xl p-2 lg:p-3 flex flex-col justify-end text-white shadow-md shadow-emerald-500/20">
                   <p className="text-[10px] lg:text-xs font-bold leading-tight">Icons</p>
                   <p className="text-[8px] lg:text-[9px] opacity-80 mt-0.5">450+ Vector</p>
                </div>
             </div>
          </div>
        </motion.div>

        {/* Center Phone (Main) */}
        <motion.div
          className="absolute top-0 w-[280px] h-[550px] sm:w-[320px] sm:h-[620px] md:w-[340px] md:h-[700px] bg-white border-[4px] md:border-[6px] border-gray-100 rounded-[2.5rem] md:rounded-[3rem] shadow-[0_25px_60px_-12px_rgba(0,0,0,0.25),_0_0_0_1px_rgba(0,0,0,0.05)] flex flex-col overflow-hidden z-30"
          initial={{ y: 50, scale: 0.95, opacity: 0 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: 'spring', bounce: 0.4, duration: 1.2, delay: 0.3 }}
        >
          {/* Detailed Reflection */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent pointer-events-none z-30 opacity-70" />
          
          {/* Dynamic Island Notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 md:w-28 h-6 md:h-7 bg-black rounded-full z-40 flex items-center justify-between px-2 shadow-sm">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-400" />
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-white/20" />
          </div>
          
          {/* Main App UI inside Center Phone */}
          <div className="flex-1 bg-white relative flex flex-col overflow-hidden pt-12 md:pt-14">
            {/* Header */}
            <div className="px-5 md:px-6 py-3 md:py-4 flex items-center justify-between border-b border-gray-100 z-20 bg-white/80 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 shadow-lg shadow-purple-500/20 flex items-center justify-center">
                  <Sparkles size={14} className="text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900 text-xs md:text-sm font-semibold tracking-wide">Vynk AI</h3>
                  <p className="text-emerald-500 text-[9px] md:text-[10px] font-semibold tracking-wider uppercase mt-0.5">Online</p>
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 md:p-5 flex flex-col gap-4 z-20 overflow-y-auto bg-gray-50/50">
              {/* Receiver Bubble */}
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="self-start max-w-[85%]"
              >
                <div className="bg-white border border-gray-100 p-3 md:p-3.5 rounded-2xl rounded-tl-none text-xs md:text-sm text-gray-700 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)]">
                  Hi! How can I accelerate your development today?
                </div>
              </motion.div>

              {/* Sender Bubble */}
              <motion.div 
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="self-end max-w-[85%]"
              >
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 md:p-3.5 rounded-2xl rounded-tr-none text-xs md:text-sm text-white shadow-md shadow-purple-500/20 font-medium tracking-wide">
                  Generate a stunning landing page.
                </div>
              </motion.div>

              {/* Generating State */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 }}
                className="w-full mt-2 flex flex-col items-center justify-center gap-3"
              >
                <div className="relative flex items-center justify-center w-full h-28 md:h-32 rounded-xl bg-white border border-purple-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    className="absolute w-40 h-40 bg-gradient-to-tr from-purple-200 to-blue-200 blur-2xl"
                  />
                  <div className="z-10 bg-white/90 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-purple-100 flex items-center gap-2 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-600" />
                    <span className="text-[10px] md:text-xs text-purple-700 font-semibold tracking-wide">Compiling components...</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Input Area */}
            <div className="p-3 md:p-4 bg-gradient-to-t from-white via-white/95 to-transparent z-20 w-full mt-auto">
              <div className="h-10 md:h-12 w-full bg-white border border-gray-200 rounded-full flex items-center px-3 md:px-4 gap-2 md:gap-3 backdrop-blur-xl shadow-sm">
                <Plus className="w-4 h-4 md:w-5 md:h-5 text-gray-500" />
                <div className="flex-1 h-full items-center flex">
                  <span className="text-gray-400 text-xs md:text-sm font-medium">Type your prompt...</span>
                </div>
                <div className="w-6 h-6 rounded-full bg-gray-900 text-white flex items-center justify-center shadow-md">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Background glowing orb for the phone inner */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-purple-300/30 blur-[50px] md:blur-[60px] rounded-full pointer-events-none z-0" />
          </div>
        </motion.div>

      </section>

    </div>
  );
}

export default App;
