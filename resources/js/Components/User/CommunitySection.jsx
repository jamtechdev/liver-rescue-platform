export default function CommunitySection() {
  return (
    <section className="bg-[#f6f8fc] py-20 px-6">
      <div className="max-w-7xl mx-auto border border-blue-200 rounded-xl p-10 md:p-16">
        
        <div className="grid md:grid-cols-2 items-center gap-10">

          {/* Left Illustration */}
          <div className="flex justify-center">
            <img
              src="/images/community.png"
              alt="Community discussion"
              className="w-full max-w-md"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl font-bold text-[#2c2350] leading-tight mb-6">
              Your Medical Medium <br />
              Community for <br />
              Connection
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              At Liver Rescue Co., we believe no one should face chronic illness
              alone. Our platform is a safe, vibrant hub for those embracing a
              Medical Medium lifestyle, designed to help you find friends, a
              partner, or a supportive community. Connect, share, and grow with
              others who truly understand your healing journey.
            </p>

            <button className="bg-indigo-500 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-600 transition">
              Learn More About Us
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}