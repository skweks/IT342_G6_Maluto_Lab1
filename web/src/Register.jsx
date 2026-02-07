import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { UserPlus, User, Lock, ArrowLeft } from 'lucide-react';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/auth/register', { username, password });
      alert("Registration Successful!");
      navigate('/');
    } catch (err) {
      alert("Failed to register. Username might already be taken.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-900 p-4 font-sans">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
        <Link to="/" className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800 mb-6 font-medium">
          <ArrowLeft size={16} className="mr-1" /> Back to Login
        </Link>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
            <UserPlus size={32} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
          <p className="text-gray-500 mt-2">Join the AuthSystem community today</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Choose Username</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <User size={18} />
              </span>
              <input
                type="text"
                required
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                placeholder="e.g. john_lloyd"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Set Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <Lock size={18} />
              </span>
              <input
                type="password"
                required
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg shadow-lg shadow-green-200 transition transform active:scale-95"
          >
            Register Now
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-500">
          By registering, you agree to our terms and conditions.
        </p>
      </div>
    </div>
  );
}

export default Register;