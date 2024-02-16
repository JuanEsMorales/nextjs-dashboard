import { monserrat } from './ui/fonts';
import './ui/global.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${monserrat.className} antialiased`}>
        {children}
        <footer className='py-10 flex justify-center align-center'>
          <h2>Esto aparecera en todas las rutas 🤷‍♂️</h2>
        </footer>
      </body>
    </html>
  );
}
