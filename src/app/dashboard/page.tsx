'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type UserRole = 'organizer' | 'attendee' | 'admin';

export default function DashboardPage() {
  const router = useRouter();
  // This would typically come from your auth context/state
  const userRole: UserRole = 'organizer'; // For demo purposes, we'll use 'organizer', 'attendee', or 'admin'

  const renderDashboard = () => {
    switch (userRole) {
      case 'organizer':
        return <OrganizerDashboard />;
      case 'attendee':
        return <AttendeeDashboard />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <div>Loading...</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-sm text-gray-600">
            Welcome to your {userRole} dashboard
          </p>
        </div>
        {renderDashboard()}
      </div>
    </div>
  );
}

function OrganizerDashboard() {
  const stats = [
    { title: 'Total Events', value: '24', change: '+12%', icon: '🎉' },
    { title: 'Active Tickets', value: '1,234', change: '+8%', icon: '🎫' },
    { title: 'Total Revenue', value: '$45,678', change: '+23%', icon: '💰' },
    { title: 'Attendees', value: '3,456', change: '+15%', icon: '👥' },
  ];

  const upcomingEvents = [
    {
      name: 'Tech Conference 2024',
      date: 'Mar 15, 2024',
      attendees: 234,
      status: 'Upcoming',
    },
    {
      name: 'Design Workshop',
      date: 'Mar 20, 2024',
      attendees: 89,
      status: 'Upcoming',
    },
    {
      name: 'Networking Mixer',
      date: 'Mar 25, 2024',
      attendees: 156,
      status: 'Upcoming',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Link
          href="/dashboard/create-event"
          className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="text-2xl mb-2">🎉</div>
          <h3 className="font-semibold text-gray-900">Create Event</h3>
          <p className="text-sm text-gray-600">Start a new event</p>
        </Link>
        <Link
          href="/dashboard/tickets"
          className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="text-2xl mb-2">🎫</div>
          <h3 className="font-semibold text-gray-900">View Tickets</h3>
          <p className="text-sm text-gray-600">Manage ticket sales</p>
        </Link>
        <Link
          href="/dashboard/check-in"
          className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="text-2xl mb-2">✓</div>
          <h3 className="font-semibold text-gray-900">Check-In</h3>
          <p className="text-sm text-gray-600">Manage attendee check-ins</p>
        </Link>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Events</h2>
        <div className="space-y-4">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div>
                <h3 className="font-medium text-gray-900">{event.name}</h3>
                <p className="text-sm text-gray-600">{event.date}</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">{event.attendees} attendees</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {event.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Analytics */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Analytics</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="p-4 bg-pink-50 rounded-lg">
            <p className="text-sm text-gray-600">Total Sales</p>
            <p className="text-2xl font-semibold text-gray-900">$12,500</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">Tickets Sold</p>
            <p className="text-2xl font-semibold text-gray-900">250</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <p className="text-sm text-gray-600">Attendance Rate</p>
            <p className="text-2xl font-semibold text-gray-900">85%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AttendeeDashboard() {
  return (
    <div className="space-y-6">
      {/* Registered Events */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Events</h2>
        <div className="space-y-4">
          {/* Sample event - replace with actual data */}
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900">Tech Conference 2024</h3>
                <p className="text-sm text-gray-600">March 15, 2024 • 9:00 AM</p>
              </div>
              <button className="px-3 py-1 text-sm font-medium text-pink-600 hover:text-pink-700">
                View Ticket
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* QR Code */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Your QR Code</h2>
        <div className="flex justify-center">
          <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">QR Code</span>
          </div>
        </div>
      </div>

      {/* Reminders */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Reminders</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl">🔔</div>
            <div>
              <p className="font-medium text-gray-900">Tech Conference 2024</p>
              <p className="text-sm text-gray-600">Starts in 2 days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* System Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Total Users</h3>
          <p className="text-3xl font-bold text-pink-600">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Active Events</h3>
          <p className="text-3xl font-bold text-blue-600">56</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Total Revenue</h3>
          <p className="text-3xl font-bold text-purple-600">$45,678</p>
        </div>
      </div>

      {/* User Management */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Users</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="text-sm font-medium text-gray-900">John Doe</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Organizer</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-pink-600 hover:text-pink-900">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Event Management */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Events</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Event
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Organizer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Tech Conference 2024</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">John Doe</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-pink-600 hover:text-pink-900">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 