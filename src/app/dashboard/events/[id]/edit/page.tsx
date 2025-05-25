'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  capacity: number;
  category: string;
  organizer: string;
  organizerEmail: string;
  agenda: {
    time: string;
    title: string;
    speaker: string;
  }[];
};

export default function EditEventPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sample event data - in a real app, this would be fetched from an API
  const initialEvent: Event = {
    id: params.id,
    title: 'Tech Conference 2024',
    description: 'Join us for the biggest tech conference of the year! Learn from industry experts, network with peers, and discover the latest trends in technology.',
    date: '2024-04-15',
    time: '09:00 AM',
    location: 'Convention Center',
    status: 'upcoming',
    capacity: 500,
    category: 'conference',
    organizer: 'Tech Events Inc.',
    organizerEmail: 'contact@techevents.com',
    agenda: [
      {
        time: '09:00 AM',
        title: 'Opening Keynote',
        speaker: 'John Smith',
      },
      {
        time: '10:30 AM',
        title: 'Future of AI',
        speaker: 'Sarah Johnson',
      },
    ],
  };

  const [event, setEvent] = useState<Event>(initialEvent);
  const [agenda, setAgenda] = useState(initialEvent.agenda);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real app, this would be an API call
      console.log('Updating event:', { ...event, agenda });
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      router.push(`/dashboard/events/${event.id}`);
    } catch (error) {
      console.error('Error updating event:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEvent(prev => ({ ...prev, [name]: value }));
  };

  const handleAgendaChange = (index: number, field: string, value: string) => {
    const newAgenda = [...agenda];
    newAgenda[index] = { ...newAgenda[index], [field]: value };
    setAgenda(newAgenda);
  };

  const addAgendaItem = () => {
    setAgenda([...agenda, { time: '', title: '', speaker: '' }]);
  };

  const removeAgendaItem = (index: number) => {
    setAgenda(agenda.filter((_, i) => i !== index));
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
          <h1 className="mt-4 text-3xl font-bold text-gray-900">Edit Event</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Event Details</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Event Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={event.title}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={event.category}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                  required
                >
                  <option value="conference">Conference</option>
                  <option value="workshop">Workshop</option>
                  <option value="seminar">Seminar</option>
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={event.date}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={event.time}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={event.location}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="capacity" className="block text-sm font-medium text-gray-700">
                  Capacity
                </label>
                <input
                  type="number"
                  id="capacity"
                  name="capacity"
                  value={event.capacity}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                  required
                  min="1"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={event.description}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                  required
                />
              </div>
            </div>
          </div>

          {/* Agenda Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium text-gray-900">Event Agenda</h2>
              <button
                type="button"
                onClick={addAgendaItem}
                className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-pink-700 bg-pink-100 hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                Add Item
              </button>
            </div>

            <div className="space-y-4">
              {agenda.map((item, index) => (
                <div key={index} className="grid grid-cols-1 gap-4 sm:grid-cols-4 items-start">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Time</label>
                    <input
                      type="time"
                      value={item.time}
                      onChange={(e) => handleAgendaChange(index, 'time', e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => handleAgendaChange(index, 'title', e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div className="flex items-end space-x-2">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700">Speaker</label>
                      <input
                        type="text"
                        value={item.speaker}
                        onChange={(e) => handleAgendaChange(index, 'speaker', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => removeAgendaItem(index)}
                      className="inline-flex items-center p-1.5 border border-transparent rounded-full text-red-600 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => router.back()}
              className="mr-4 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50"
            >
              {isSubmitting ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 