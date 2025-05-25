'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

type UserRole = 'admin' | 'organizer' | 'attendee' | null;

export default function Navigation() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path: string) => pathname === path;

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle escape key to close dropdown
  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsProfileOpen(false);
      }
    }

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
    setIsProfileOpen(false);
    switch (role) {
      case 'admin':
        router.push('/admin/dashboard');
        break;
      case 'organizer':
        router.push('/dashboard');
        break;
      case 'attendee':
        router.push('/attendee/dashboard');
        break;
    }
  };

  const handleLogout = () => {
    setUserRole(null);
    setIsProfileOpen(false);
    router.push('/');
  };

  const getRoleBasedMenuItems = () => {
    if (!userRole) {
      return (
        <>
          <button
            onClick={() => handleLogin('admin')}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            role="menuitem"
          >
            Admin Sign In
          </button>
          <button
            onClick={() => handleLogin('organizer')}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            role="menuitem"
          >
            Organizer Sign In
          </button>
          <button
            onClick={() => handleLogin('attendee')}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            role="menuitem"
          >
            Attendee Sign In
          </button>
          <Link
            href="/auth/register"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsProfileOpen(false)}
            role="menuitem"
          >
            Sign up
          </Link>
        </>
      );
    }

    switch (userRole) {
      case 'admin':
        return (
          <>
            <Link
              href="/admin/dashboard"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsProfileOpen(false)}
              role="menuitem"
            >
              Dashboard
            </Link>
            <Link
              href="/admin/users"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsProfileOpen(false)}
              role="menuitem"
            >
              User Management
            </Link>
            <Link
              href="/admin/events"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsProfileOpen(false)}
              role="menuitem"
            >
              Event Management
            </Link>
            <Link
              href="/admin/analytics"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsProfileOpen(false)}
              role="menuitem"
            >
              Analytics
            </Link>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              role="menuitem"
            >
              Sign out
            </button>
          </>
        );
      case 'organizer':
        return (
          <>
            <Link
              href="/dashboard"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsProfileOpen(false)}
              role="menuitem"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/tickets"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsProfileOpen(false)}
              role="menuitem"
            >
              My Tickets
            </Link>
            <Link
              href="/dashboard/check-in"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsProfileOpen(false)}
              role="menuitem"
            >
              Check-In
            </Link>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              role="menuitem"
            >
              Sign out
            </button>
          </>
        );
      case 'attendee':
        return (
          <>
            <Link
              href="/attendee/dashboard"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsProfileOpen(false)}
              role="menuitem"
            >
              Dashboard
            </Link>
            <Link
              href="/attendee/tickets"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsProfileOpen(false)}
              role="menuitem"
            >
              My Tickets
            </Link>
            <Link
              href="/attendee/reminders"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsProfileOpen(false)}
              role="menuitem"
            >
              Event Reminders
            </Link>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              role="menuitem"
            >
              Sign out
            </button>
          </>
        );
    }
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-pink-600">
                EMS
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/')
                    ? 'border-pink-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Home
              </Link>
              <Link
                href="/events"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/events')
                    ? 'border-pink-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Events
              </Link>
              {userRole === 'organizer' && (
                <Link
                  href="/dashboard/create-event"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    isActive('/dashboard/create-event')
                      ? 'border-pink-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  Create Event
                </Link>
              )}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="ml-3 relative" ref={dropdownRef}>
              <div>
                <button
                  type="button"
                  className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors duration-200"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  aria-expanded={isProfileOpen}
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <div className="h-8 w-8 rounded-full bg-pink-600 flex items-center justify-center text-white hover:bg-pink-700 transition-colors duration-200">
                    {userRole ? userRole[0].toUpperCase() : '?'}
                  </div>
                </button>
              </div>
              {isProfileOpen && (
                <div 
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  {getRoleBasedMenuItems()}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 