import React, { useState } from 'react';

export default function App() {
  // State to control opening and closing the mobile menu drawer
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // State to control the active user dropdown profile menu
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // List of tools matching your platform screenshots
  const tools = [
    {
      title: "Receipt Generator",
      desc: "Generate realistic digital receipts and transactional records instantly.",
      icon: "📄",
      tag: "Popular"
    },
    {
      title: "Tracking Page",
      desc: "Get a shipment tracking code and control the location details yourself.",
      icon: "📦",
      tag: "Logistics"
    },
    {
      title: "Support Sites",
      desc: "Get customer support landing pages for different platforms in under 60 seconds!",
      icon: "🌐",
      tag: "Management"
    }
  ];

  // System activity simulation log history
  const activities = [
    { id: 1, action: "Receipt created - cashapp", time: "41 minutes ago" },
    { id: 2, action: "Receipt created - cashapp", time: "43 minutes ago" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col antialiased font-sans text-gray-900">
      
      {/* 1. TOP NAVBAR */}
      <header className="h-16 bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          {/* Mobile Sidebar Hamburger Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 md:hidden text-xl"
          >
            ☰
          </button>
          <span className="text-xl font-bold tracking-tight text-gray-900 flex items-center gap-1">
            ⚡ Blazedoom<span className="text-blue-600">.</span>
          </span>
        </div>

        {/* Global Widgets Right Side */}
        <div className="flex items-center gap-2">
          {/* Darkmode Icon Toggle button lookalike */}
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg hidden sm:block text-lg">🌙</button>
          
          {/* Balance Component Widget */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5 flex items-center gap-2 text-xs font-semibold text-gray-500">
            <span className="w-4 h-4 bg-blue-600 rounded-full text-white flex items-center justify-center text-[10px] font-bold">+</span>
            BALANCE <span className="text-gray-900 font-bold">$0.00</span>
          </div>

          {/* User Profile Action Trigger Button */}
          <div className="relative">
            <button 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors font-bold text-xs flex items-center justify-center border-2 border-blue-600"
            >
              SM
            </button>

            {/* Profile Dropdown Menu Frame */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-40 animate-in fade-in zoom-in-95 duration-100">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Logged in as</p>
                  <p className="text-sm font-bold text-gray-800 truncate">Scottsdale Margaret</p>
                </div>
                <div className="p-1">
                  <button className="w-full text-left px-3 py-2 text-xs font-medium rounded-lg hover:bg-gray-50 flex items-center gap-2">👤 Profile</button>
                  <button className="w-full text-left px-3 py-2 text-xs font-medium rounded-lg hover:bg-gray-50 flex items-center gap-2">📈 Transactions</button>
                  <button className="w-full text-left px-3 py-2 text-xs font-medium rounded-lg hover:bg-gray-50 flex items-center gap-2">⚙️ Settings</button>
                  <div className="h-px bg-gray-100 my-1"></div>
                  <button className="w-full text-left px-3 py-2 text-xs font-bold text-red-600 rounded-lg hover:bg-red-50 flex items-center gap-2">🚪 Sign Out</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* VIEWPORT CONTROLLER GRID STRATIFICATION */}
      <div className="flex flex-1 pt-16">
        
        {/* 2. SIDEBAR NAVIGATION CONTROLLER */}
        <aside className={`
          fixed inset-y-0 left-0 pt-16 z-20 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out flex flex-col justify-between
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static md:pt-4
        `}>
          <div className="p-4 space-y-6">
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-2 mb-2">Navigation Menu</p>
              <nav className="space-y-1">
                <button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-bold rounded-lg bg-blue-600 text-white shadow-sm">📊 Dashboard</button>
                <button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50 rounded-lg">🌐 Support Page</button>
                <button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50 rounded-lg">📦 Tracking Page</button>
                <button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50 rounded-lg">📄 Receipts Generator</button>
                <button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50 rounded-lg">🐷 Fund Wallet</button>
              </nav>
            </div>
          </div>

          {/* Sidebar Footer Identity Card */}
          <div className="p-4 border-t border-gray-100 flex items-center gap-3 bg-gray-50/50">
            <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center font-bold text-xs">SM</div>
            <div className="overflow-hidden">
              <p className="text-xs font-bold text-gray-800 truncate">Scottsdale Margaret</p>
              <p className="text-[10px] text-gray-400 truncate">muhammedjunior378@gmail.com</p>
            </div>
          </div>
        </aside>

        {/* Gray translucent background shadow block when mobile navigation sidebar menu opens */}
        {isMobileMenuOpen && (
          <div onClick={() => setIsMobileMenuOpen(false)} className="fixed inset-0 bg-black/30 z-10 md:hidden" />
        )}

        {/* 3. MAIN APP WORKSPACE CONTAINER PANEL */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 max-w-5xl mx-auto w-full space-y-8">
          
          {/* Welcome Intro Section */}
          <div>
            <h1 className="text-xl sm:text-2xl font-black tracking-tight text-gray-900">Workspace Dashboard</h1>
            <p className="text-xs text-gray-500 mt-0.5">Deploy, operate, and control dynamic operational tool configurations.</p>
          </div>

          {/* Cards Tool Operations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl font-bold group-hover:scale-105 transition-transform">
                    {tool.icon}
                  </div>
                  <div>
                    <span className="text-[9px] font-black tracking-widest text-blue-600 uppercase bg-blue-50 px-2 py-0.5 rounded-md">
                      {tool.tag}
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 mt-2">{tool.title}</h3>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{tool.desc}</p>
                  </div>
                </div>
                <button className="mt-5 w-full py-2 bg-gray-50 hover:bg-blue-600 text-gray-700 hover:text-white border border-gray-200 hover:border-blue-600 font-semibold text-xs rounded-xl transition-all flex items-center justify-center gap-1">
                  Open Module <span className="text-[10px]">➔</span>
                </button>
              </div>
            ))}
          </div>

          {/* 4. RECENT SYSTEM LOG CONTAINER FEED PANEL */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-wider">Recent System Activity</h3>
              <button className="text-xs font-bold text-blue-600 hover:underline">View All</button>
            </div>
            
            <div className="divide-y divide-gray-100">
              {activities.map((item) => (
                <div key={item.id} className="py-3 flex justify-between items-center first:pt-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-xs">🧾</div>
                    <div>
                      <p className="text-xs font-bold text-gray-800">{item.action}</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">{item.time}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-green-700 bg-green-50 border border-green-100 px-2.5 py-0.5 rounded-full">
                    COMPLETED
                  </span>
                </div>
              ))}
            </div>
          </div>

        </main>

      </div>
    </div>
  );
}
