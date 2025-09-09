export function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-16">
      <div className="container py-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} better.clone — For demo purposes only.</div>
        <div className="text-center text-sm">
          Built with <span className="font-semibold">Next.js</span> & Tailwind.
        </div>
        <div className="flex justify-end">
          <a href="https://vercel.com/new" className="btn-outline text-sm">Deploy to Vercel</a>
        </div>
      </div>
    </footer>
  );
}
