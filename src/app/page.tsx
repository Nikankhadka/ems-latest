'use client';

import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  const features = [
    {
      title: 'Event Creation',
      description: 'Create and manage your events with ease',
      icon: '🎉',
    },
    {
      title: 'Registration & Ticketing',
      description: 'Handle registrations and ticket sales seamlessly',
      icon: '🎫',
    },
    {
      title: 'Event Marketing',
      description: 'Promote your events effectively',
      icon: '📢',
    },
    {
      title: 'Check-In & Badges',
      description: 'Streamline check-in process and print badges',
      icon: '🎪',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
            Event Management System
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Create, manage, and attend events with ease. Our platform makes event organization and participation seamless and enjoyable.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/auth/register"
              className="rounded-md bg-gradient-to-r from-pink-500 to-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-pink-600 hover:to-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
            >
              Get started
            </Link>
            <Link href="/events" className="text-sm font-semibold leading-6 text-gray-900">
              Browse events <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-pink-600">Everything you need</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Powerful features for event management
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From creating events to managing attendees, our platform provides all the tools you need for successful event management.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="relative group rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-x-4">
                    <div className="text-3xl">{feature.icon}</div>
                    <h3 className="text-lg font-semibold leading-7 text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 