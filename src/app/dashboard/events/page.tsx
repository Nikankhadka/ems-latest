'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  capacity: number;
  registered: number;
  category: string;
};

export default function EventsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  // Sample event data
  const events: Event[] = [
    {
      id: '1',
      title: 'Tech Conference 2024',
      date: '2024-04-15',
      time: '09:00 AM',
      location: 'Convention Center',
      status: 'upcoming',
      capacity: 500,
      registered: 350,
      category: 'conference',
    },
    {
      id: '2',
      title: 'Web Development Workshop',
      date: '2024-03-20',
      time: '02:00 PM',
      location: 'Tech Hub',
      status: 'upcoming',
      capacity: 50,
      registered: 45,
      category: 'workshop',
    },
    {
      id: '3',
      title: 'Design Thinking Seminar',
      date: '2024-03-10',
      time: '10:00 AM',
      location: 'Innovation Center',
      status: 'completed',
      capacity: 100,
      registered: 98,
      category: 'seminar',
    },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || event.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || event.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

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

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'conference':
        return 'bg-purple-100 text-purple-800';
      case 'workshop':
        return 'bg-yellow-100 text-yellow-800';
      case 'seminar':
        return 'bg-pink-100 text-pink-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Event Management</h1>
            <p className="mt-2 text-sm text-gray-600">
              Manage your events and registrations
            </p>
          </div>
          <button
            onClick={() => router.push('/dashboard/create-event')}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            Create Event
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700">
                Search
              </label>
              <input
                type="text"
                id="search"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                placeholder="Search by title or location"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                id="status"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="upcoming">Upcoming</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                id="category"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="conference">Conference</option>
                <option value="workshop">Workshop</option>
                <option value="seminar">Seminar</option>
              </select>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadgeColor(event.status)}`}>
                    {event.status}
                  </span>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getCategoryBadgeColor(event.category)}`}>
                    {event.category}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{event.title}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center">
                    <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date} at {event.time}
                  </p>
                  <p className="flex items-center">
                    <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <p className="text-sm text-gray-500">
                      {event.registered} / {event.capacity} registered
                    </p>
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-pink-500"
                        style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex space-x-3">
                  <button
                    onClick={() => router.push(`/dashboard/events/${event.id}`)}
                    className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => router.push(`/dashboard/events/${event.id}/edit`)}
                    className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 