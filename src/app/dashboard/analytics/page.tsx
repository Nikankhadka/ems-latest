'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AnalyticsPage() {
  const router = useRouter();
  const [timeRange, setTimeRange] = useState('week');

  // Sample analytics data
  const analyticsData = {
    ticketSales: {
      total: 1234,
      change: '+12%',
      data: [
        { date: '2024-03-01', sales: 150 },
        { date: '2024-03-02', sales: 200 },
        { date: '2024-03-03', sales: 180 },
        { date: '2024-03-04', sales: 250 },
        { date: '2024-03-05', sales: 220 },
        { date: '2024-03-06', sales: 300 },
        { date: '2024-03-07', sales: 280 },
      ],
    },
    revenue: {
      total: '$45,678',
      change: '+23%',
      data: [
        { date: '2024-03-01', amount: 4500 },
        { date: '2024-03-02', amount: 6000 },
        { date: '2024-03-03', amount: 5400 },
        { date: '2024-03-04', amount: 7500 },
        { date: '2024-03-05', amount: 6600 },
        { date: '2024-03-06', amount: 9000 },
        { date: '2024-03-07', amount: 8400 },
      ],
    },
    attendance: {
      total: 3456,
      change: '+15%',
      data: [
        { date: '2024-03-01', count: 450 },
        { date: '2024-03-02', count: 600 },
        { date: '2024-03-03', count: 540 },
        { date: '2024-03-04', count: 750 },
        { date: '2024-03-05', count: 660 },
        { date: '2024-03-06', count: 900 },
        { date: '2024-03-07', count: 840 },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="mt-2 text-sm text-gray-600">
            Track your event performance and metrics
          </p>
        </div>

        {/* Time Range Selector */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex space-x-4">
            <button
              onClick={() => setTimeRange('week')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                timeRange === 'week'
                  ? 'bg-pink-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              This Week
            </button>
            <button
              onClick={() => setTimeRange('month')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                timeRange === 'month'
                  ? 'bg-pink-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              This Month
            </button>
            <button
              onClick={() => setTimeRange('year')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                timeRange === 'year'
                  ? 'bg-pink-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              This Year
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Ticket Sales</h3>
              <span className="text-sm font-medium text-green-600">{analyticsData.ticketSales.change}</span>
            </div>
            <p className="mt-2 text-3xl font-bold text-gray-900">{analyticsData.ticketSales.total}</p>
            <div className="mt-4 h-32 bg-gray-50 rounded-lg">
              {/* Add chart component here */}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Revenue</h3>
              <span className="text-sm font-medium text-green-600">{analyticsData.revenue.change}</span>
            </div>
            <p className="mt-2 text-3xl font-bold text-gray-900">{analyticsData.revenue.total}</p>
            <div className="mt-4 h-32 bg-gray-50 rounded-lg">
              {/* Add chart component here */}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Attendance</h3>
              <span className="text-sm font-medium text-green-600">{analyticsData.attendance.change}</span>
            </div>
            <p className="mt-2 text-3xl font-bold text-gray-900">{analyticsData.attendance.total}</p>
            <div className="mt-4 h-32 bg-gray-50 rounded-lg">
              {/* Add chart component here */}
            </div>
          </div>
        </div>

        {/* Detailed Analytics */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Event Performance */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Event Performance</h3>
            <div className="space-y-4">
              {['Tech Conference 2024', 'Web Development Workshop', 'Design Thinking Seminar'].map((event) => (
                <div key={event} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{event}</h4>
                    <p className="text-sm text-gray-600">March 15, 2024</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">$12,500</p>
                    <p className="text-sm text-green-600">+15%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Demographics */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Attendee Demographics</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Age Groups</span>
                <div className="w-48 h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-pink-500" style={{ width: '60%' }} />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Gender</span>
                <div className="w-48 h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: '45%' }} />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Location</span>
                <div className="w-48 h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500" style={{ width: '75%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 