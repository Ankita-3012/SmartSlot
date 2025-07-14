// pages/index.jsx

import Sidebar from '../components/Sidebar';
import RoomCard from '../components/RoomCard';
import ChatbotEmbed from '../components/ChatbotEmbed';
import { rooms } from '../lib/rooms';

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-8 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold mb-6">Warehouse Rooms</h1>

        <div
          className="
            grid gap-8
            sm:grid-cols-2
            lg:grid-cols-4
            auto-rows-fr
          "
        >
          {/* Rooms grid spans first 3 columns */}
          <div
            className="
              lg:col-span-3
              grid gap-8
              sm:grid-cols-2
              lg:grid-cols-3
              auto-rows-fr
            "
          >
            {rooms.map(room => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>

          <ChatbotEmbed />
        </div>
      </main>
    </div>
  );
}
