'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

type Attendee = {
  id: string;
  name: string;
  email: string;
  ticketType: string;
  checkInStatus: 'checked-in' | 'not-checked-in';
  checkInTime?: string;
};

export default function CheckInPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('all');

  // Sample event data
  const event = {
    id: params.id,
    title: 'Tech Conference 2024',
    date: '2024-04-15',
    time: '09:00 AM',
    location: 'Convention Center',
  };

  // Sample attendees data
  const attendees: Attendee[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      ticketType: 'VIP Pass',
      checkInStatus: 'checked-in',
      checkInTime: '2024-04-15 08:45 AM',
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      ticketType: 'Regular Pass',
      checkInStatus: 'not-checked-in',
    },
    {
      id: '3',
      name: 'Mike Johnson',
      email: 'mike@example.com',
      ticketType: 'Student Pass',
      checkInStatus: 'checked-in',
      checkInTime: '2024-04-15 09:15 AM',
    },
  ];

  const filteredAttendees = attendees.filter((attendee) => {
    const matchesSearch = attendee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      attendee.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const handleCheckIn = async (attendeeId: string) => {
    // In a real app, this would be an API call
    console.log('Checking in attendee:', attendeeId);
    // Update the attendee's check-in status
  };

  const getStatusBadgeColor = (status: string) => {
    return status === 'checked-in'
      ? 'bg-green-100 text-green-800'
      : 'bg-yellow-100 text-yellow-800';
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
            Back to Event
          </button>
          <div className="mt-4">
            <h1 className="text-3xl font-bold text-gray-900">Check-in Management</h1>
            <p className="mt-2 text-sm text-gray-600">
              {event.title} • {event.date} at {event.time}
            </p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700">
                Search Attendees
              </label>
              <input
                type="text"
                id="search"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                placeholder="Search by name or email"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="event" className="block text-sm font-medium text-gray-700">
                Event
              </label>
              <select
                id="event"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                value={selectedEvent}
                onChange={(e) => setSelectedEvent(e.target.value)}
              >
                <option value="all">All Events</option>
                <option value={event.id}>{event.title}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Attendees Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
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
                  Check-in Time
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {attendee.ticketType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(attendee.checkInStatus)}`}>
                      {attendee.checkInStatus === 'checked-in' ? 'Checked In' : 'Not Checked In'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {attendee.checkInTime || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {attendee.checkInStatus === 'not-checked-in' && (
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

        {/* Quick Actions */}
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={() => {
              // Handle bulk check-in
              console.log('Bulk check-in');
            }}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            Bulk Check-in
          </button>
          <button
            onClick={() => {
              // Handle export
              console.log('Export attendees');
            }}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            Export List
          </button>
        </div>
      </div>
    </div>
  );
} 