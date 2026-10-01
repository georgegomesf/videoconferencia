import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

/*
  Cria uma sala no Daily.co. A chave da API fica só no servidor (DAILY_API_KEY).
  Salas expiram em ROOM_EXPIRY_MINUTES (padrão 30) para não se acumularem na conta.
  Outras opções: https://docs.daily.co/reference/rest-api/rooms/create-room
 */
export async function POST() {
  const apiKey = process.env.DAILY_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'DAILY_API_KEY não configurada' }, { status: 500 });
  }

  const minutes = Number(process.env.ROOM_EXPIRY_MINUTES) || 30;
  const exp = Math.round(Date.now() / 1000) + 60 * minutes;

  const response = await fetch('https://api.daily.co/v1/rooms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ properties: { exp } }),
    cache: 'no-store',
  });

  const data = await response.json();
  return NextResponse.json(data, { status: response.status });
}
