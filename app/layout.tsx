import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Link href="/">
          <Image alt="logo" src="/logo.png" width={40} height={40} className="mx-auto" />
          <h1 className="text-3xl text-white mb-2 font-bold">Harn's Blog</h1>
        </Link>
        <p className="text-slate-300">Warmly welcome to my blog</p>
      </div>
    </header>
  )

  const footer = (
    <footer className="border-t border-slate-400 mt-6 py-6 text-center text-slate-400">
      <div>
        <h3>Developed by Harn</h3>
      </div>
    </footer>
  )
  return (
    <html>
      <head />
      <body>
        <div className="mx-auto max-w-2xl px-4">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}
