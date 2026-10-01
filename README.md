# Videoconferência (Next.js + Daily.co)

Base de videoconferência própria, integrada a uma conta [Daily.co](https://www.daily.co). Fork de
[daily-demos/custom-video-daily-react-hooks](https://github.com/daily-demos/custom-video-daily-react-hooks),
migrado de Create React App para **Next.js (App Router)**, usando [Daily React](https://docs.daily.co/reference/daily-react).

## Recursos

- Tiles de vídeo customizados para chamadas com vários participantes
- Tela de pré-entrada (teste de câmera/microfone e nome de usuário)
- Bandeja de controles, compartilhamento de tela e chat
- Criação de salas pela rota de servidor `/api/rooms` (a chave da Daily nunca vai ao navegador)

## Como rodar

1. Crie uma conta no [Daily](https://dashboard.daily.co/signup) e copie a chave em [Developers](https://dashboard.daily.co/developers).
2. `cp example.env .env.local` e preencha `DAILY_API_KEY`.
3. `npm install`
4. `npm run dev` e abra http://localhost:3000

Também é possível entrar em uma sala existente colando a URL `https://seu-dominio.daily.co/sala`.

## Variáveis de ambiente

| Variável | Descrição |
| --- | --- |
| `DAILY_API_KEY` | Chave da API Daily (somente servidor) |
| `ROOM_EXPIRY_MINUTES` | Minutos até a sala expirar (padrão 30) |

## Estrutura

- `src/app/` — layout, página e rota `api/rooms`
- `src/App.js` — máquina de estados da chamada (client component)
- `src/components/` — Call, Tile, Tray, Chat, HairCheck etc.

## Deploy

Qualquer host de Next.js (Vercel, etc.); defina `DAILY_API_KEY` nas variáveis de ambiente.

## Atualizar a partir do original

`git fetch upstream` (o remote `upstream` aponta para o repositório da Daily).
