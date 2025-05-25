'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ResetPasswordPage() {
  const [step, setStep] = useState<'email' | 'reset'>('email');
  const [formData, setFormData] = useState({
    email: '',
    token: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Email submission logic will be added later
    console.log('Reset email requested for:', formData.email);
    setStep('reset');
  };

  const handleResetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Password reset logic will be added later
    console.log('Password reset submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
          Reset Password
        </h1>

        {step === 'email' ? (
          <form onSubmit={handleEmailSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Send Reset Link
            </button>
          </form>
        ) : (
          <form onSubmit={handleResetSubmit} className="space-y-6">
            <div>
              <label htmlFor="token" className="block text-sm font-medium text-gray-700">
                Reset Token
              </label>
              <input
                type="text"
                id="token"
                value={formData.token}
                onChange={(e) => setFormData({ ...formData, token: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                required
              />
            </div>

            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                value={formData.newPassword}
                onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Reset Password
            </button>
          </form>
        )}

        <p className="mt-8 text-center text-sm text-gray-600">
          Remember your password?{' '}
          <Link href="/auth/login" className="font-medium text-pink-600 hover:text-pink-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
} 