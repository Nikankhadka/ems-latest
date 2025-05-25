'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckInPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('all');

  // Sample data - replace with actual data from your backend
  const events = [
    { id: '1', name: 'Tech Conference 2024' },
    { id: '2', name: 'Workshop: Web Development' },
  ];

  const attendees = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      ticketType: 'VIP',
      status: 'checked-in',
      checkInTime: '2024-03-15 09:00 AM',
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      ticketType: 'Regular',
      status: 'not-checked-in',
      checkInTime: null,
    },
  ];

  const filteredAttendees = attendees.filter(attendee => {
    const matchesSearch = attendee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         attendee.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesEvent = selectedEvent === 'all' || attendee.eventId === selectedEvent;
    return matchesSearch && matchesEvent;
  });

  const handleCheckIn = (attendeeId: string) => {
    // Handle check-in logic
    console.log('Checking in attendee:', attendeeId);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Check-In Management</h1>
            <p className="mt-1 text-sm text-gray-600">
              Manage attendee check-ins for your events
            </p>
          </div>

          {/* Filters */}
          <div className="p-6 border-b border-gray-200">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700">
                  Search Attendees
                </label>
                <input
                  type="text"
                  id="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name or email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                />
              </div>
              <div>
                <label htmlFor="event" className="block text-sm font-medium text-gray-700">
                  Select Event
                </label>
                <select
                  id="event"
                  value={selectedEvent}
                  onChange={(e) => setSelectedEvent(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                >
                  <option value="all">All Events</option>
                  {events.map(event => (
                    <option key={event.id} value={event.id}>
                      {event.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Attendee List */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Attendee
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ticket Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Check-In Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredAttendees.map((attendee) => (
                  <tr key={attendee.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{attendee.name}</div>
                          <div className="text-sm text-gray-500">{attendee.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{attendee.ticketType}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        attendee.status === 'checked-in'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {attendee.status === 'checked-in' ? 'Checked In' : 'Not Checked In'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{attendee.checkInTime || '-'}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {attendee.status === 'not-checked-in' && (
                        <button
                          onClick={() => handleCheckIn(attendee.id)}
                          className="text-pink-600 hover:text-pink-900"
                        >
                          Check In
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 