'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';

// Use environment variable with fallback
const PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5050';
const IMAGE_API_URL = process.env.NEXT_PUBLIC_IMAGE_URL || 'http://backend:5050'

export default function Home() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${PUBLIC_API_URL}/events`);
        setEvents(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError(err.message || 'Failed to load events');
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-black">Loading events...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-red-600">Error</h1>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden min-h-screen bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-black">Upcoming Events</h1>
          <p className="text-xl text-black">Discover our curated experiences</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {events.map((event, index) => (
            <Link
              key={index}
              href={`/events/${generateSlug(event.title)}`}
              className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Event Image */}
              <div className="aspect-video relative overflow-hidden shrink-0">
                  <Image
                    src={`${IMAGE_API_URL}${event.picture}`}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 3}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."
                  />
                {event.speakers && event.speakers[0] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="text-white text-center p-6">
                      <div className="text-3xl sm:text-4xl font-bold">
                        {event.title.split(':')[0]}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col grow">
                <h2 className="text-2xl font-semibold mb-3 text-black group-hover:text-blue-600 transition-colors">
                  {event.title}
                </h2>

                <div className="flex items-center gap-2 text-black mb-2">
                  <span>Calendar</span>
                  <span className="text-sm">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-black mb-4">
                  <span>Location</span>
                  <span className="text-sm">{event.location}</span>
                </div>

                <p className="text  text-black line-clamp-3 grow">{event.description}</p>

                {/* Footer */}
                <div
                  data-component="event-footer"
                  className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200"
                >
                  <div className="flex -space-x-2">\
                    {event.speakers?.slice(0, 3).map((speaker, idx) =>
                        <Image
                          key={idx}
                          src={`${IMAGE_API_URL}${speaker.picture}`}
                          width={32}
                          height={32}
                          className="w-8 h-8 rounded-full border-2 border-white object-cover ring-2 ring-white"
                          title={speaker.name}
                          alt={speaker.name}
                        />
                    )}

                  </div>

                  <span className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                    View Details
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}