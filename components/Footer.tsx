export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 py-6 mt-10">
      <div className="container mx-auto text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Better Clone. All rights reserved.
      </div>
    </footer>
  );
}
