'use client';

import React from 'react';
import Link from 'next/link';
import {
  UsersIcon,
  CalendarIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  TicketIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

type StatCard = {
  title: string;
  value: string | number;
  change: string;
  icon: React.ElementType;
  color: string;
};

export default function AdminDashboard() {
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

  const recentActivities = [
    {
      id: 1,
      type: 'user',
      action: 'New user registration',
      user: 'John Doe',
      time: '2 minutes ago',
    },
    {
      id: 2,
      type: 'event',
      action: 'New event created',
      user: 'Jane Smith',
      time: '1 hour ago',
    },
    {
      id: 3,
      type: 'ticket',
      action: 'Bulk ticket purchase',
      user: 'Company XYZ',
      time: '3 hours ago',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <div className="flex space-x-4">
              <Link
                href="/admin/users"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                <UserGroupIcon className="h-5 w-5 mr-2" />
                Manage Users
              </Link>
              <Link
                href="/admin/events"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                <CalendarIcon className="h-5 w-5 mr-2" />
                Manage Events
              </Link>
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
                    <span className="text-gray-500"> from last month</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="mt-8">
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Recent Activity
                </h2>
                <div className="flow-root">
                  <ul className="-mb-8">
                    {recentActivities.map((activity, activityIdx) => (
                      <li key={activity.id}>
                        <div className="relative pb-8">
                          {activityIdx !== recentActivities.length - 1 ? (
                            <span
                              className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                              aria-hidden="true"
                            />
                          ) : null}
                          <div className="relative flex space-x-3">
                            <div>
                              <span className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
                                <UsersIcon
                                  className="h-5 w-5 text-white"
                                  aria-hidden="true"
                                />
                              </span>
                            </div>
                            <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                              <div>
                                <p className="text-sm text-gray-500">
                                  {activity.action}{' '}
                                  <span className="font-medium text-gray-900">
                                    {activity.user}
                                  </span>
                                </p>
                              </div>
                              <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                <time dateTime={activity.time}>{activity.time}</time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/admin/analytics"
              className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <ChartBarIcon
                      className="h-6 w-6 text-pink-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <h3 className="text-lg font-medium text-gray-900">
                      View Analytics
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Detailed system statistics and reports
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="/admin/users"
              className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <UserGroupIcon
                      className="h-6 w-6 text-pink-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <h3 className="text-lg font-medium text-gray-900">
                      User Management
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Manage user accounts and permissions
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="/admin/events"
              className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <CalendarIcon
                      className="h-6 w-6 text-pink-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <h3 className="text-lg font-medium text-gray-900">
                      Event Management
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Manage events and their settings
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 