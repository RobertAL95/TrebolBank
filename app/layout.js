// app/layout.js
import './globals.css';

export const metadata = {
  title: 'TrebolBank',
  description: 'Banking made simple.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}