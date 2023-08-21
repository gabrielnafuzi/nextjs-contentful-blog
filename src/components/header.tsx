import Link from 'next/link'

import { ThemeToggle } from './theme-toggle'

export const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between">
        <ThemeToggle />

        <nav className="ml-auto space-x-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  )
}
