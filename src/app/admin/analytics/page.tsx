'use client';

import React, { useState } from 'react';
import {
  ChartBarIcon,
  UsersIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  TicketIcon,
} from '@heroicons/react/24/outline';

type TimeRange = 'week' | 'month' | 'year';

type StatCard = {
  title: string;
  value: string | number;
  change: string;
  icon: React.ElementType;
  color: string;
};

type ChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
  }[];
};

export default function Analytics() {
  const [timeRange, setTimeRange] = useState<TimeRange>('week');

  // Sample data - replace with actual data from your backend
  const stats: StatCard[] = [
    {
      title: 'Total Users',
      value: '1,234',
      change: '+12%',
      icon: UsersIcon,
      color: 'bg-blue-500',
    },
    {
      title: 'Active Events',
      value: '45',
      change: '+5%',
      icon: CalendarIcon,
      color: 'bg-green-500',
    },
    {
      title: 'Total Revenue',
      value: '$45,678',
      change: '+8%',
      icon: CurrencyDollarIcon,
      color: 'bg-yellow-500',
    },
    {
      title: 'Tickets Sold',
      value: '3,456',
      change: '+15%',
      icon: TicketIcon,
      color: 'bg-purple-500',
    },
  ];

  const revenueData: ChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Revenue',
        data: [1200, 1900, 1500, 2100, 1800, 2400, 2200],
        backgroundColor: 'rgba(219, 39, 119, 0.2)',
        borderColor: 'rgb(219, 39, 119)',
      },
    ],
  };

  const userGrowthData: ChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'New Users',
        data: [100, 150, 200, 180, 250, 300],
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgb(59, 130, 246)',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
            <div className="flex space-x-4">
              <button
                onClick={() => setTimeRange('week')}
                className={`px-4 py-2 rounded-md ${
                  timeRange === 'week'
                    ? 'bg-pink-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                This Week
              </button>
              <button
                onClick={() => setTimeRange('month')}
                className={`px-4 py-2 rounded-md ${
                  timeRange === 'month'
                    ? 'bg-pink-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                This Month
              </button>
              <button
                onClick={() => setTimeRange('year')}
                className={`px-4 py-2 rounded-md ${
                  timeRange === 'year'
                    ? 'bg-pink-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                This Year
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <stat.icon
                        className={`h-6 w-6 ${stat.color} text-white rounded-md p-1`}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          {stat.title}
                        </dt>
                        <dd>
                          <div className="text-lg font-medium text-gray-900">
                            {stat.value}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3">
                  <div className="text-sm">
                    <span className="text-green-600 font-medium">
                      {stat.change}
                    </span>
                    <span className="text-gray-500"> from last {timeRange}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {/* Revenue Chart */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Revenue Overview
                </h2>
                <div className="h-64 flex items-center justify-center">
                  <div className="text-center">
                    <ChartBarIcon className="h-12 w-12 text-gray-400 mx-auto" />
                    <p className="mt-2 text-sm text-gray-500">
                      Revenue chart will be displayed here
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* User Growth Chart */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  User Growth
                </h2>
                <div className="h-64 flex items-center justify-center">
                  <div className="text-center">
                    <ChartBarIcon className="h-12 w-12 text-gray-400 mx-auto" />
                    <p className="mt-2 text-sm text-gray-500">
                      User growth chart will be displayed here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Analytics */}
          <div className="mt-8">
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Event Performance
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {['Tech Conference', 'Workshop', 'Networking Mixer'].map((event) => (
                    <div key={event} className="border rounded-lg p-4">
                      <h3 className="text-lg font-medium text-gray-900">{event}</h3>
                      <div className="mt-2 space-y-2">
                        <p className="text-sm text-gray-500">
                          <span className="font-medium">Attendance:</span> 85%
                        </p>
                        <p className="text-sm text-gray-500">
                          <span className="font-medium">Revenue:</span> $12,500
                        </p>
                        <p className="text-sm text-gray-500">
                          <span className="font-medium">Rating:</span> 4.5/5
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 