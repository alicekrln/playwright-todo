export const metadata = { title: 'Att göra-lista' }

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='sv'>
      <body>{children}</body>
    </html>
  )
}
