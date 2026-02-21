const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-0">
      <div className="max-w-7xl mx-auto px-10 py-16 grid md:grid-cols-4 gap-12">

       
        <div>
          <h2 className="text-2xl font-extrabold text-primary mb-4">
            BookMyEvent
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Discover unforgettable experiences near you. From music festivals
            to tech summits, find events that match your passion.
          </p>

          <div className="flex gap-4 text-xl">
            <span className="cursor-pointer hover:text-primary"></span>
            <span className="cursor-pointer hover:text-primary"></span>
            <span className="cursor-pointer hover:text-primary"></span>
            <span className="cursor-pointer hover:text-primary"></span>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4">Explore</h4>
          <ul className="space-y-3 text-gray-500 text-sm">
            <li className="hover:text-primary cursor-pointer">All Events</li>
            <li className="hover:text-primary cursor-pointer">Music</li>
            <li className="hover:text-primary cursor-pointer">Technology</li>
            <li className="hover:text-primary cursor-pointer">Sports</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-3 text-gray-500 text-sm">
            <li className="hover:text-primary cursor-pointer">About Us</li>
            <li className="hover:text-primary cursor-pointer">Careers</li>
            <li className="hover:text-primary cursor-pointer">Blog</li>
            <li className="hover:text-primary cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Stay Updated</h4>
          <p className="text-gray-500 text-sm mb-4">
            Get event updates straight to your inbox.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-l-lg border outline-none text-sm"
            />
            <button className="bg-primary text-white px-4 py-2 rounded-r-lg text-sm font-semibold hover:opacity-90 transition">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="border-t py-6">
        <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2024 Evently. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:text-primary cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-primary cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-primary cursor-pointer">
              Cookies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;