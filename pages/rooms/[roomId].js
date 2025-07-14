import { useRouter } from 'next/router';
import useSWR from 'swr';
import Sidebar from '../../components/Sidebar';
import ItemTable from '../../components/ItemTable';
import { rooms } from '../../lib/rooms';

const fetcher = url => fetch(url).then(res => res.json());

export default function RoomDetail() {
  const { query } = useRouter();
  const roomId = query.roomId;
  const { data, error } = useSWR(() => roomId ? `/api/suggestions/${roomId}` : null, fetcher);

  if (!roomId) return <p>Loading...</p>;
  if (error) return <p>Error loading suggestions.</p>;
  if (!data) return <p>Loading data...</p>;

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8 bg-gray-100 min-h-screen">
        <button onClick={() => history.back()} className="mb-4 text-blue-600">← Back</button>
        <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
        <p className="mb-2"><strong>Capacity:</strong> {data.capacityPct}%</p>
        <p className="mb-6"><strong>Items:</strong> {data.items.length}</p>
        <div className="mb-6 p-4 bg-white shadow rounded">
          <h2 className="text-xl font-semibold mb-2">AI Suggestions</h2>
          <ul className="list-disc list-inside">
            {data.suggestions.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
        <ItemTable items={data.items} />
      </main>
    </div>
  )
}
