const Newsletter = () => {
  return (
    <div className="bg-primary mt-20 py-20">
      <div className="max-w-4xl mx-auto text-center px-6">

        {/* Title */}
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Stay in the Loop
        </h2>

        {/* Subtitle */}
        <p className="text-white/80 mb-8 text-lg">
          Get weekly updates on the best events happening near you.
        </p>

        {/* Input + Button */}
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">



          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-6 py-4 rounded-xl outline-none text-gray-800"
          />

          <button className="bg-white text-primary font-bold px-8 py-4 rounded-xl hover:opacity-90 transition whitespace-nowrap">
            Subscribe →
          </button>

        </form>

        {/* Small text */}
        <p className="text-white/60 text-sm mt-6">
          We respect your privacy. Unsubscribe anytime.
        </p>

      </div>
    </div>
  );
};

export default Newsletter;