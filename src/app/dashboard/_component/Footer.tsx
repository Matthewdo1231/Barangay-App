export default function Footer() {
  return (
    <footer className="bg-[#233353] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-green-600 text-white font-bold rounded-md w-10 h-10 flex items-center justify-center">
              BG
            </div>
            <span className="text-white font-semibold text-lg">
             Government Hub
            </span>
          </div>
          <p className="text-sm text-white">
            Empowering our community with digital access to services, news, and
            opportunities. Together for a stronger, greener future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-green-400">Home</a></li>
            <li><a href="/news" className="hover:text-green-400">News</a></li>
            <li><a href="/request" className="hover:text-green-400">Request</a></li>
            <li><a href="/jobs" className="hover:text-green-400">Find Jobs</a></li>
            <li><a href="/login" className="hover:text-green-400">Login</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Government Hub, City, Province</li>
            <li>📞 (123) 456-7890</li>
            <li>✉️ info@barangaygreenhub.gov.ph</li>
            <li>🕒 Mon-Fri 8:00 AM - 5:00 PM</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-green-400">🌐</a>
            <a href="#" className="hover:text-green-400">📘</a>
            <a href="#" className="hover:text-green-400">🐦</a>
            <a href="#" className="hover:text-green-400">📸</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-white">
        © {new Date().getFullYear()} Government Hub. All rights reserved.
      </div>
    </footer>
  );
}
