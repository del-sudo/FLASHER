import React, { useState } from 'react';

export default function App() {
  // Navigation states
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard' or 'receipts'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // System Activity Feed State
  const [activities, setActivities] = useState([
    { id: 1, action: "Receipt created - cashapp", time: "41 minutes ago" },
    { id: 2, action: "Receipt created - cashapp", time: "43 minutes ago" }
  ]);

  // Receipt Form Builder Input State
  const [receiptForm, setReceiptForm] = useState({
    merchant: 'CashApp',
    amount: '150.00',
    referenceId: 'TXN-7738B21',
    status: 'COMPLETED',
    date: new Date().toISOString().split('T')[0]
  });
  const [generatedReceipt, setGeneratedReceipt] = useState(null);

  // Handle Form Submission
  const handleReceiptSubmit = (e) => {
    e.preventDefault();
    setGeneratedReceipt({ ...receiptForm });
    
    // Auto-inject a new action log into our dashboard history system feed
    const newLog = {
      id: Date.now(),
      action: `Receipt created - ${receiptForm.merchant.toLowerCase()}`,
      time: "Just now"
    };
    setActivities([newLog, ...activities]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col antialiased font-sans text-gray-900">
      
      {/* GLOBAL HEADER BAR */}
      <header className="h-16 bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-lg hover:bg-gray-100 md:hidden text-xl">☰</button>
          <span onClick={() => setCurrentView('dashboard')} className="text-xl font-bold tracking-tight cursor-pointer">
            ⚡ Blazedoom<span className="text-blue-600">.</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5 flex items-center gap-2 text-xs font-semibold text-gray-500">
            <span className="w-4 h-4 bg-blue-600 rounded-full text-white flex items-center justify-center text-[10px] font-bold">+</span>
            BALANCE <span className="text-gray-900 font-bold">$0.00</span>
          </div>

          <div className="relative">
            <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 font-bold text-xs flex items-center justify-center border-2 border-blue-600">SM</button>
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-40">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Logged in as</p>
                  <p className="text-sm font-bold text-gray-800 truncate">Scottsdale Margaret</p>
                </div>
                <div className="p-1">
                  <button className="w-full text-left px-3 py-2 text-xs font-medium rounded-lg hover:bg-gray-50">👤 Profile</button>
                  <button className="w-full text-left px-3 py-2 text-xs font-medium rounded-lg hover:bg-gray-50">⚙️ Settings</button>
                  <div className="h-px bg-gray-100 my-1"></div>
                  <button className="w-full text-left px-3 py-2 text-xs font-bold text-red-600 rounded-lg hover:bg-red-50">🚪 Sign Out</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="flex flex-1 pt-16">
        
        {/* SIDEBAR */}
        <aside className={`fixed inset-y-0 left-0 pt-16 z-20 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 md:translate-x-0 md:static md:pt-4 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-4 space-y-1">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-2 mb-2">Navigation Menu</p>
            <button onClick={() => { setCurrentView('dashboard'); setIsMobileMenuOpen(false); }} className={`w-full flex items-center gap-3 px-3 py-2 text-xs font-bold rounded-lg ${currentView === 'dashboard' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}>📊 Dashboard</button>
            <button onClick={() => { setCurrentView('receipts'); setIsMobileMenuOpen(false); }} className={`w-full flex items-center gap-3 px-3 py-2 text-xs font-bold rounded-lg ${currentView === 'receipts' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}>📄 Receipts Generator</button>
          </div>
        </aside>

        {isMobileMenuOpen && <div onClick={() => setIsMobileMenuOpen(false)} className="fixed inset-0 bg-black/30 z-10 md:hidden" />}

        {/* WORKSPACE APP VIEWS */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 max-w-5xl mx-auto w-full space-y-8">
          
          {/* VIEW A: MAIN GRID LANDING DASHBOARD */}
          {currentView === 'dashboard' && (
            <>
              <div>
                <h1 className="text-xl sm:text-2xl font-black tracking-tight text-gray-900">Workspace Dashboard</h1>
                <p className="text-xs text-gray-500 mt-0.5">Select an operational modular framework below to launch utility spaces.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Active Receipt Module Card Trigger */}
                <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl font-bold">📄</div>
                    <h3 className="text-sm font-bold text-gray-900">Receipt Generator</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">Configure user-defined text layouts to simulate records and transactional tracking receipts dynamically.</p>
                  </div>
                  <button onClick={() => setCurrentView('receipts')} className="mt-5 w-full py-2 bg-gray-50 hover:bg-blue-600 hover:text-white border border-gray-200 text-gray-700 text-xs font-bold rounded-xl transition-all">
                    Open Module ➔
                  </button>
                </div>

                {/* Locked Structural Placeholders */}
                <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm opacity-60">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 text-gray-400 flex items-center justify-center text-xl">📦</div>
                  <h3 className="text-sm font-bold text-gray-400 mt-3">Tracking Page</h3>
                  <p className="text-xs text-gray-400 mt-1">Logistics configuration workspace placeholder framework shell.</p>
                </div>
              </div>

              {/* LIVE RECENT ACTIVITY LOGGER DISPLAY PANEL */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-4">
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-wider">Recent System Activity</h3>
                <div className="divide-y divide-gray-100">
                  {activities.map((item) => (
                    <div key={item.id} className="py-3 flex justify-between items-center text-xs">
                      <div className="flex items-center gap-3">
                        <div className="text-base">🧾</div>
                        <div>
                          <p className="font-bold text-gray-800">{item.action}</p>
                          <p className="text-[10px] text-gray-400">{item.time}</p>
                        </div>
                      </div>
                      <span className="font-bold text-green-700 bg-green-50 border border-green-100 px-2.5 py-0.5 rounded-full">COMPLETED</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* VIEW B: INTERACTIVE ACTIVE RECEIPT GENERATION SPACE */}
          {currentView === 'receipts' && (
            <div className="space-y-6">
              <button onClick={() => setCurrentView('dashboard')} className="text-xs font-bold text-blue-600 hover:underline">← Back to Workspace Grid</button>
              <div>
                <h2 className="text-xl font-black tracking-tight text-gray-900">Receipt Generator Module</h2>
                <p className="text-xs text-gray-500 mt-0.5">Configure systemic variables inside forms to render real-time template layouts previews.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* CONFIGURATION FORM MODULE */}
                <form onSubmit={handleReceiptSubmit} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Select Platform</label>
                    <select value={receiptForm.merchant} onChange={(e) => setReceiptForm({...receiptForm, merchant: e.target.value})} className="w-full p-2.5 bg-gray-50 border border-gray-200 text-xs rounded-xl focus:ring-2 focus:ring-blue-600 outline-none">
                      <option value="CashApp">CashApp</option>
                      <option value="PayPal">PayPal</option>
                      <option value="Zelle">Zelle</option>
                      <option value="Coinbase">Coinbase</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Transaction Value ($)</label>
                    <input type="number" step="0.01" value={receiptForm.amount} onChange={(e) => setReceiptForm({...receiptForm, amount: e.target.value})} className="w-full p-2.5 bg-gray-50 border border-gray-200 text-xs rounded-xl outline-none focus:ring-2 focus:ring-blue-600" required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Reference Code / Transaction ID</label>
                    <input type="text" value={receiptForm.referenceId} onChange={(e) => setReceiptForm({...receiptForm, referenceId: e.target.value})} className="w-full p-2.5 bg-gray-50 border border-gray-200 text-xs rounded-xl outline-none focus:ring-2 focus:ring-blue-600" required />
                  </div>
                  <button type="submit" className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-all">Compile Layout Matrix</button>
                </form>

                {/* TEMPLATE VISUAL PREVIEW TERMINAL VIEWPORT */}
                <div className="bg-gray-100 rounded-2xl p-6 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center min-h-[300px]">
                  {generatedReceipt ? (
                    <div className="w-full max-w-xs bg-white p-5 rounded-xl shadow-md border border-gray-200 font-mono text-[11px] text-gray-700 space-y-4 border-t-4 border-t-blue-600">
                      <div className="text-center space-y-0.5">
                        <p className="text-sm font-black text-gray-900 tracking-tight uppercase">{generatedReceipt.merchant}</p>
                        <p className="text-[9px] text-gray-400">TRANSACTION VOUCHER RECORD</p>
                      </div>
                      <div className="border-t border-dashed border-gray-200 pt-3 space-y-2">
                        <div className="flex justify-between"><span>REF HASH:</span><span className="font-bold text-gray-900">{generatedReceipt.referenceId}</span></div>
                        <div className="flex justify-between"><span>DATE:</span><span className="text-gray-900">{generatedReceipt.date}</span></div>
                        <div className="flex justify-between"><span>METRIC:</span><span className="font-bold text-green-600 bg-green-50 px-1 rounded">{generatedReceipt.status}</span></div>
                      </div>
                      <div className="border-t border-dashed border-gray-200 pt-3 flex justify-between items-center">
                        <span className="font-bold text-gray-900">GRAND TOTAL:</span>
                        <span className="text-base font-black text-gray-900">${parseFloat(generatedReceipt.amount).toFixed(2)}</span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-xs text-gray-400 text-center font-medium">Configure properties on the form and run the compiler matrix to populate layout graphics.</p>
                  )}
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
