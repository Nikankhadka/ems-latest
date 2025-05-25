'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type EventRegistrationProps = {
  params: {
    id: string;
  };
};

export default function EventRegistration({ params }: EventRegistrationProps) {
  const router = useRouter();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleRegister = () => {
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    router.push('/attendee/dashboard');
  };

  // Sample event data - replace with actual data from your backend
  const event = {
    id: params.id,
    title: 'Tech Conference 2024',
    description: 'Join us for the biggest tech conference of the year featuring industry leaders and innovative workshops.',
    date: '2024-03-15',
    time: '09:00 AM',
    location: 'Convention Center',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  };

  return (
    <div className="fixed inset-0 bg-white/90">
      {/* Background Event Details */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative h-full">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover opacity-10"
          />
        </div>
      </div>

      {/* Modal Content */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 border border-gray-100">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Register for {event.title}</h1>
            <div className="space-y-2 text-gray-600">
              <p className="flex items-center">
                <span className="font-medium">Date:</span>
                <span className="ml-2">{event.date}</span>
              </p>
              <p className="flex items-center">
                <span className="font-medium">Time:</span>
                <span className="ml-2">{event.time}</span>
              </p>
              <p className="flex items-center">
                <span className="font-medium">Location:</span>
                <span className="ml-2">{event.location}</span>
              </p>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <Link
              href={`/events/${params.id}`}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Cancel
            </Link>
            <button
              onClick={handleRegister}
              className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-blue-500 border border-transparent rounded-md shadow-sm hover:from-pink-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 border border-gray-100">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Confirm Registration</h2>
              <p className="text-gray-600">
                Are you sure you want to register for {event.title}?
              </p>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowConfirmation(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-blue-500 border border-transparent rounded-md shadow-sm hover:from-pink-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                Confirm Registration
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 