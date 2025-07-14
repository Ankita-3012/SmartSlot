// import { Configuration, OpenAIApi } from 'openai';
// import { rooms } from '../../../lib/rooms';

// const ai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));

// export default async function handler(req, res) {
//   const { roomId } = req.query;
//   const room = rooms.find(r => r.id === roomId);
//   if (!room) return res.status(404).json({ error: 'Room not found' });
//   try {
//     const prompt = `Suggest 3 improvements for warehouse room ${room.name} with ${room.items.length} items.`;
//     const completion = await ai.createChatCompletion({
//       model: 'gpt-4o-mini',
//       messages: [{ role: 'user', content: prompt }],
//       max_tokens: 150,
//       temperature: 0.7
//     });
//     const text = completion.data.choices[0].message.content;
//     const suggestions = text.split('\n').filter(l => l.trim()).slice(0,3);
//     res.status(200).json({ ...room, suggestions });
//   } catch {
//     res.status(200).json({ ...room, suggestions: ['No AI suggestions available'] });
//   }
// }

import { rooms } from '../../../lib/rooms';

export default function handler(req, res) {
  const { roomId } = req.query;
  const room = rooms.find(r => r.id === roomId);
  if (!room) {
    return res.status(404).json({ error: 'Room not found' });
  }

  // Hard‑coded suggestions for now:
  const suggestions = [
    'Move high‑turnover items to front shelf for quicker access',
    'Group small parts into labeled bins on shelf A to reduce picking time',
    'Optimize aisle spacing to allow forklifts to navigate more efficiently'
  ];

  // Return the room data plus our static suggestions
  res.status(200).json({ ...room, suggestions });
}

