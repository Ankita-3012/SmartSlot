export default function ItemTable({ items }) {
  return (
    <table className="min-w-full bg-white rounded shadow overflow-hidden">
      <thead className="bg-gray-100">
        <tr>
          {['ID','Name','Category','Qty','Loc','Status'].map(h => (
            <th key={h} className="px-4 py-2 text-left text-sm text-gray-700">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id} className="border-b">
            <td className="px-4 py-2">{item.id}</td>
            <td className="px-4 py-2">{item.name}</td>
            <td className="px-4 py-2">{item.category}</td>
            <td className="px-4 py-2">{item.qty}</td>
            <td className="px-4 py-2">{item.loc}</td>
            <td className="px-4 py-2">{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
