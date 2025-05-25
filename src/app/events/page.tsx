'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EventsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDate, setSelectedDate] = useState('all');

  // Sample events data
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
    },
    {
      id: '2',
      title: 'Web Development Workshop',
      description: 'Learn modern web development techniques and best practices in this hands-on workshop.',
      date: '2024-03-20',
      time: '10:00',
      location: 'Tech Hub, New York',
      category: 'workshop',
      price: '$99',
      capacity: 50,
      registered: 35,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
    },
    {
      id: '3',
      title: 'Design Thinking Seminar',
      description: 'Explore the principles of design thinking and how to apply them to solve complex problems.',
      date: '2024-03-25',
      time: '14:00',
      location: 'Design Center, Boston',
      category: 'seminar',
      price: '$149',
      capacity: 100,
      registered: 78,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      id: '4',
      title: 'Networking Mixer',
      description: 'Connect with industry professionals and expand your network in a casual setting.',
      date: '2024-04-01',
      time: '18:00',
      location: 'Skyline Lounge, Chicago',
      category: 'networking',
      price: '$49',
      capacity: 200,
      registered: 156,
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'conference', name: 'Conference' },
    { id: 'workshop', name: 'Workshop' },
    { id: 'seminar', name: 'Seminar' },
    { id: 'networking', name: 'Networking' },
  ];

  const dateFilters = [
    { id: 'all', name: 'All Dates' },
    { id: 'today', name: 'Today' },
    { id: 'this-week', name: 'This Week' },
    { id: 'this-month', name: 'This Month' },
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesDate = selectedDate === 'all'; // Add date filtering logic here
    return matchesSearch && matchesCategory && matchesDate;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Upcoming Events</h1>
          <p className="mt-2 text-sm text-gray-600">
            Discover and join exciting events in your area
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700">
                Search Events
              </label>
              <input
                type="text"
                id="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title or description"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <select
                id="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              >
                {dateFilters.map(filter => (
                  <option key={filter.id} value={filter.id}>
                    {filter.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-1 text-xs font-medium bg-pink-100 text-pink-800 rounded-full">
                    {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                  </span>
                  <span className="text-sm font-medium text-gray-900">{event.price}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {new Date(event.date).toLocaleDateString()} at {event.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    {event.registered} / {event.capacity} registered
                  </div>
                  <button
                    onClick={() => router.push(`/events/${event.id}`)}
                    className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-blue-500 rounded-md hover:from-pink-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                  >
                    View Details
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