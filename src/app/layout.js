
import './globals.css';
import { League_Spartan } from 'next/font/google'

const LeagueSpartan = League_Spartan({ subsets: ['latin'], weight: '700' });

export default function RootLayout({ children, backgroundTheme = "bg-theme1-main-background" }) {

  return (
    <html lang="en">
      <body className={`${backgroundTheme}  flex items-center justify-center  w-full h-full text-4xl ${LeagueSpartan.className}`}>
        {children}
      </body>
    </html>
  )
}
