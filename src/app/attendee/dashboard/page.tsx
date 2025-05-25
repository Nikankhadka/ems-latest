'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CalendarIcon, TicketIcon, BellIcon } from '@heroicons/react/24/outline';

type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  ticketType: string;
  ticketId: string;
  qrCode: string;
};

type Reminder = {
  id: string;
  eventId: string;
  eventTitle: string;
  date: string;
  time: string;
  message: string;
};

export default function AttendeeDashboard() {
  const [activeTab, setActiveTab] = useState('events');

  // Sample data - replace with actual data from your backend
  const registeredEvents: Event[] = [
    {
      id: '1',
      title: 'Tech Conference 2024',
      date: '2024-03-15',
      time: '09:00 AM',
      location: 'Convention Center',
      ticketType: 'VIP Pass',
      ticketId: 'TC2024-VIP-001',
      qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=TC2024-VIP-001',
    },
    {
      id: '2',
      title: 'Workshop: Web Development',
      date: '2024-03-20',
      time: '02:00 PM',
      location: 'Tech Hub',
      ticketType: 'Standard Pass',
      ticketId: 'WD2024-STD-001',
      qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=WD2024-STD-001',
    },
  ];

  const reminders: Reminder[] = [
    {
      id: '1',
      eventId: '1',
      eventTitle: 'Tech Conference 2024',
      date: '2024-03-15',
      time: '09:00 AM',
      message: 'Don\'t forget to bring your laptop and charger!',
    },
    {
      id: '2',
      eventId: '2',
      eventTitle: 'Workshop: Web Development',
      date: '2024-03-20',
      time: '02:00 PM',
      message: 'Please complete the pre-workshop assignments.',
    },
  ];

  const handleDownloadTicket = (eventId: string) => {
    // Implement ticket download logic
    console.log(`Downloading ticket for event ${eventId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab('events')}
                className={`px-4 py-2 rounded-md ${
                  activeTab === 'events'
                    ? 'bg-pink-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <CalendarIcon className="h-5 w-5 inline-block mr-2" />
                Events
              </button>
              <button
                onClick={() => setActiveTab('tickets')}
                className={`px-4 py-2 rounded-md ${
                  activeTab === 'tickets'
                    ? 'bg-pink-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <TicketIcon className="h-5 w-5 inline-block mr-2" />
                Tickets
              </button>
              <button
                onClick={() => setActiveTab('reminders')}
                className={`px-4 py-2 rounded-md ${
                  activeTab === 'reminders'
                    ? 'bg-pink-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <BellIcon className="h-5 w-5 inline-block mr-2" />
                Reminders
              </button>
            </div>
          </div>

          {activeTab === 'events' && (
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Registered Events</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {registeredEvents.map((event) => (
                    <div key={event.id} className="border rounded-lg p-4">
                      <h3 className="text-lg font-medium text-gray-900">{event.title}</h3>
                      <div className="mt-2 space-y-2">
                        <p className="text-sm text-gray-500">
                          <span className="font-medium">Date:</span> {event.date}
                        </p>
                        <p className="text-sm text-gray-500">
                          <span className="font-medium">Time:</span> {event.time}
                        </p>
                        <p className="text-sm text-gray-500">
                          <span className="font-medium">Location:</span> {event.location}
                        </p>
                        <p className="text-sm text-gray-500">
                          <span className="font-medium">Ticket Type:</span> {event.ticketType}
                        </p>
                      </div>
                      <div className="mt-4 flex space-x-3">
                        <button
                          onClick={() => handleDownloadTicket(event.id)}
                          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                        >
                          Download Ticket
                        </button>
                        <Link
                          href={`/events/${event.id}`}
                          className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tickets' && (
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">My Tickets</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {registeredEvents.map((event) => (
                    <div key={event.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">{event.title}</h3>
                          <p className="text-sm text-gray-500 mt-1">Ticket ID: {event.ticketId}</p>
                        </div>
                        <img
                          src={event.qrCode}
                          alt="Ticket QR Code"
                          className="w-24 h-24"
                        />
                      </div>
                      <div className="mt-4">
                        <button
                          onClick={() => handleDownloadTicket(event.id)}
                          className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                        >
                          Download Ticket
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reminders' && (
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Event Reminders</h2>
                <div className="space-y-4">
                  {reminders.map((reminder) => (
                    <div key={reminder.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">{reminder.eventTitle}</h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {reminder.date} at {reminder.time}
                          </p>
                          <p className="text-sm text-gray-700 mt-2">{reminder.message}</p>
                        </div>
                        <Link
                          href={`/events/${reminder.eventId}`}
                          className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                        >
                          View Event
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 