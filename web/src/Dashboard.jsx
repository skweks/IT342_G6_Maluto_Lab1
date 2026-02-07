import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, User, LogOut, ShieldCheck, Activity, Users } from 'lucide-react';

function Dashboard() {
  const navigate = useNavigate();
  const username = "John Lloyd"; // This would normally come from your backend

  const handleLogout = () => {
    // For now, just navigate back to login
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* SIDEBAR */}
      <aside className="w-64 bg-indigo-900 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-indigo-800">
          AuthSystem
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="flex items-center space-x-3 p-3 bg-indigo-800 rounded-lg">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 hover:bg-indigo-800 rounded-lg transition">
            <User size={20} />
            <span>Profile</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 hover:bg-indigo-800 rounded-lg transition">
            <ShieldCheck size={20} />
            <span>Security</span>
          </a>
        </nav>
        <button
          onClick={handleLogout}
          className="p-6 border-t border-indigo-800 flex items-center space-x-3 hover:bg-red-600 transition"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* HEADER */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center px-8">
          <h1 className="text-xl font-semibold text-gray-800">Overview</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Welcome, <strong>{username}</strong></span>
            <div className="h-10 w-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
              JL
            </div>
          </div>
        </header>

        {/* CONTENT AREA */}
        <div className="p-8 overflow-y-auto">
          {/* STAT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                <Activity size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase font-bold">Account Status</p>
                <p className="text-2xl font-bold text-gray-800">Active</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
              <div className="p-3 bg-green-100 text-green-600 rounded-lg">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase font-bold">Security Level</p>
                <p className="text-2xl font-bold text-gray-800">High</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
                <Users size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase font-bold">Session ID</p>
                <p className="text-lg font-mono text-gray-800">#23-6927-565</p>
              </div>
            </div>
          </div>

          {/* MAIN SECTION */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-lg font-bold text-gray-800 mb-4">User Details</h2>
            <div className="space-y-4">
              <div className="flex border-b pb-2">
                <span className="w-32 text-gray-500">Student Name:</span>
                <span className="font-medium">John Lloyd</span>
              </div>
              <div className="flex border-b pb-2">
                <span className="w-32 text-gray-500">Course:</span>
                <span className="font-medium">BSIT - 3rd Year</span>
              </div>
              <div className="flex">
                <span className="w-32 text-gray-500">Assignment:</span>
                <span className="font-medium text-indigo-600">IT342 Lab 1 - Auth System</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;