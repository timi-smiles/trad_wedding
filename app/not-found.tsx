import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
        <p className="text-muted-foreground mb-6">Could not find the requested page.</p>
        <Link
          href="/"
          className="bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors inline-block"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
