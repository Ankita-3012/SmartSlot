import Link from 'next/link';

export default function RoomCard({ room }) {
  return (
    <Link href={`/rooms/${room.id}`}>
      <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition mb-4">
        <h3 className="text-2xl font-bold text-blue-600 mb-1">{room.name}</h3>
        <p>Capacity: <span className="font-medium">{room.capacityPct}%</span></p>
        <p>Items:    <span className="font-medium">{room.items.length}</span></p>
      </div>
    </Link>
  );
}
