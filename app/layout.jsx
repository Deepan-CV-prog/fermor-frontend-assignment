import './globals.css'

export const metadata = {
  title: 'Fermor — Make better money decisions',
  description: 'Understand, plan and grow your money with Fermor.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
