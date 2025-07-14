export const rooms = [
  { id: 'A101', name: 'Room A101', capacityPct: 85, items: [
      { id: 'ITM-1001', name: 'Steel Bolts (5mm)', category: 'Hardware', qty: 120, loc: 'A101-S1', status: 'In Stock' },
      { id: 'ITM-1002', name: 'Plastic Tubing (1m)', category: 'Plumbing', qty: 85, loc: 'A101-S2', status: 'Low Stock' },
    ]},
  { id: 'B205', name: 'Room B205', capacityPct: 62, items: [
      { id: 'ITM-2001', name: 'Packaging Tape', category: 'Shipping', qty: 200, loc: 'B205-S1', status: 'In Stock' },
      { id: 'ITM-2002', name: 'Boxes (M)', category: 'Shipping', qty: 150, loc: 'B205-S2', status: 'In Stock' },
    ]},
  { id: 'C301', name: 'Room C301', capacityPct: 45, items: [
      { id: 'ITM-3001', name: 'Ice Packs', category: 'Cold Storage', qty: 50, loc: 'C301-S1', status: 'In Stock' },
      { id: 'ITM-3002', name: 'Frozen Food', category: 'Cold Storage', qty: 80, loc: 'C301-S2', status: 'Low Stock' },
    ]},
  { id: 'D410', name: 'Room D410', capacityPct: 78, items: [
      { id: 'ITM-4001', name: 'Acid Bottles', category: 'Hazardous', qty: 30, loc: 'D410-S1', status: 'In Stock' },
    ]},
  { id: 'E512', name: 'Room E512', capacityPct: 20, items: []},
];
