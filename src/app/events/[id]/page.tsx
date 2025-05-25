'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Sample events data - in a real app, this would come from an API
const events = [
  {
    id: '1',
    title: 'Tech Conference 2024',
    description: 'Join us for the biggest tech conference of the year featuring industry leaders and innovative workshops.',
    date: '2024-03-15',
    time: '09:00',
    location: 'Convention Center, San Francisco',
    category: 'conference',
    price: '$199',
    capacity: 500,
    registered: 234,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    organizer: 'Tech Events Inc.',
    organizerEmail: 'contact@techevents.com',
    agenda: [
      { time: '09:00', title: 'Registration and Welcome Coffee' },
      { time: '10:00', title: 'Keynote Speech: Future of Technology' },
      { time: '11:30', title: 'Panel Discussion: AI and Machine Learning' },
      { time: '13:00', title: 'Lunch Break' },
      { time: '14:30', title: 'Workshop Sessions' },
      { time: '16:30', title: 'Networking Session' },
      { time: '18:00', title: 'Closing Remarks' },
    ],
  },
  // Add other events here...
];

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const event = events.find(e => e.id === params.id);

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Event not found</h1>
          <Link
            href="/events"
            className="mt-4 inline-block text-pink-600 hover:text-pink-500"
          >
            Back to events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Event Header */}
          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="relative h-64">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h1 className="text-3xl font-bold text-white">{event.title}</h1>
                <p className="mt-2 text-white/90">{event.description}</p>
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Event Info */}
              <div className="bg-white shadow-sm rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Event Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Date & Time</h3>
                    <p className="mt-1 text-sm text-gray-900">
                      {new Date(event.date).toLocaleDateString()} at {event.time}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Location</h3>
                    <p className="mt-1 text-sm text-gray-900">{event.location}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Category</h3>
                    <p className="mt-1 text-sm text-gray-900 capitalize">{event.category}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Registration</h3>
                    <p className="mt-1 text-sm text-gray-900">
                      {event.registered} / {event.capacity} registered
                    </p>
                  </div>
                </div>
              </div>

              {/* Agenda */}
              <div className="bg-white shadow-sm rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Event Agenda</h2>
                <div className="space-y-4">
                  {event.agenda.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-24 text-sm text-gray-500">
                        {item.time}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900">{item.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white shadow-sm rounded-lg p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">{event.price}</div>
                  <div className="text-sm text-gray-600 mb-4">
                    {event.registered} / {event.capacity} registered
                  </div>
                  <button
                    onClick={() => router.push(`/events/${event.id}/register`)}
                    className="w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-blue-500 rounded-md hover:from-pink-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                  >
                    Register Now
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Organizer</h3>
                  <div className="text-sm text-gray-600">
                    <p>{event.organizer}</p>
                    <p>{event.organizerEmail}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 