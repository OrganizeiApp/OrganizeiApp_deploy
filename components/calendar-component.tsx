'use client';

import { useState, useEffect } from 'react';
import { format } from 'date-fns';

type Event = {
  summary: string;
  description: string;
  start: {
    dateTime: string;
  };
};


export const FetchCalendarEvents = () => {
  const [events, setEvents] = useState<Event[] | null>(null);

  const fetchCalendarEvents = async () => {
    const response = await fetch('/api/fetch-calendar-events');
    const data: { events: Event[] } = await response.json();
    console.log('Events ', data);
    setEvents(data.events);
  };

  // Usando useEffect para chamar fetchCalendarEvents quando a página carregar
  useEffect(() => {
    fetchCalendarEvents();
  }, []); // A lista de dependências vazia garante que isso só execute uma vez, na montagem

  return (
    <>
      {events && (
        <ul className="space-y-4">
          {events.map((event, index) => (
            <li key={index} className="bg-green-500 border-green-600 border-b-2 rounded p-4 lg:max-w-[50vw] overflow-x-auto">
              <h2 className="text-xl font-extrabold uppercase text-white">{event.summary} - {event.start.dateTime}</h2>
              <p className="text-white">{event.description}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
