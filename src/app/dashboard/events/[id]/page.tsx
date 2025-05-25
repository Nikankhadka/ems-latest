'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  capacity: number;
  registered: number;
  category: string;
  organizer: string;
  organizerEmail: string;
  agenda: {
    time: string;
    title: string;
    speaker: string;
  }[];
};

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  // Sample event data - in a real app, this would be fetched from an API
  const event: Event = {
    id: params.id,
    title: 'Tech Conference 2024',
    description: 'Join us for the biggest tech conference of the year! Learn from industry experts, network with peers, and discover the latest trends in technology.',
    date: '2024-04-15',
    time: '09:00 AM',
    location: 'Convention Center',
    status: 'upcoming',
    capacity: 500,
    registered: 350,
    category: 'conference',
    organizer: 'Tech Events Inc.',
    organizerEmail: 'contact@techevents.com',
    agenda: [
      {
        time: '09:00 AM',
        title: 'Opening Keynote',
        speaker: 'John Smith',
      },
      {
        time: '10:30 AM',
        title: 'Future of AI',
        speaker: 'Sarah Johnson',
      },
      {
        time: '12:00 PM',
        title: 'Lunch Break',
        speaker: '',
      },
      {
        time: '01:30 PM',
        title: 'Web Development Trends',
        speaker: 'Mike Brown',
      },
      {
        time: '03:00 PM',
        title: 'Networking Session',
        speaker: '',
      },
    ],
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'ongoing':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
          >
            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Events
          </button>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{event.title}</h1>
              <p className="mt-2 text-sm text-gray-600">
                {event.date} at {event.time} • {event.location}
              </p>
            </div>
            <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getStatusBadgeColor(event.status)}`}>
              {event.status}
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {['overview', 'agenda', 'attendees', 'settings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab
                    ? 'border-pink-500 text-pink-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === 'overview' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Event Overview</h2>
                <p className="text-gray-600 mb-6">{event.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-gray-900 mb-2">Registration Status</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900">
                        {event.registered} / {event.capacity}
                      </span>
                      <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-pink-500"
                          style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-gray-900 mb-2">Event Category</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
                      {event.category}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'agenda' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Event Agenda</h2>
                <div className="space-y-4">
                  {event.agenda.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-24 text-sm text-gray-500">
                        {item.time}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900">{item.title}</h4>
                        {item.speaker && (
                          <p className="text-sm text-gray-500">Speaker: {item.speaker}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'attendees' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Attendees</h2>
                <p className="text-gray-600">Attendee list will be available here.</p>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Event Settings</h2>
                <p className="text-gray-600">Event settings will be available here.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={() => router.push(`/dashboard/events/${event.id}/edit`)}
                  className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  Edit Event
                </button>
                <button
                  onClick={() => router.push(`/dashboard/events/${event.id}/check-in`)}
                  className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  Manage Check-ins
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Organizer Details</h3>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Name:</span> {event.organizer}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Email:</span> {event.organizerEmail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 