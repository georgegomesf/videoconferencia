/* Cria a sala via rota de servidor (/api/rooms), que guarda a chave da Daily. */
async function createRoom() {
  const response = await fetch('/api/rooms', { method: 'POST' });
  if (!response.ok) throw new Error(`Falha ao criar sala (${response.status})`);
  return response.json();
}

export default { createRoom };
