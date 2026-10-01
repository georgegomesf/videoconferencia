import './globals.css';

export const metadata = {
  title: 'Videoconferência',
  description: 'Videoconferência própria integrada ao Daily.co',
  icons: { icon: '/favicon.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
