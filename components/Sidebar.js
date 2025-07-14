import Link from 'next/link';

export default function Sidebar() {
  const zones = ['All Rooms','Receiving Area','Storage Area','Shipping Area','Cold Storage','Hazardous Materials'];
  return (
    <aside className="w-64 bg-white p-6 border-r h-screen">
      <h2 className="text-xl font-semibold mb-4">Warehouse Zones</h2>
      <ul className="space-y-3">
        {zones.map(zone => (
          <li key={zone}>
            <Link href={zone === 'All Rooms' ? '/' : '#'} className="hover:text-blue-600">
              {zone}
            </Link>
          </li>
        ))}
      </ul>
      <button className="mt-8 w-full py-2 bg-blue-600 text-white rounded">+ Add New Room</button>
    </aside>
  );
}
