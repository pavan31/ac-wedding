// components/ContactInfo.js
export default function ContactInfo() {
    return (
      <section className="px-4 py-16 text-center bg-white/5 rounded-xl max-w-3xl mx-auto mt-10">
        <h2 className="text-3xl font-bold mb-4">Need Help or Directions?</h2>
        <p className="text-lg mb-2">Feel free to contact our families for assistance.</p>
        <div className="mt-4 space-y-2">
          <p>👰 Bride's Side: <span className="font-medium">+91 98765 43210</span></p>
          <p>🤵 Groom's Side: <span className="font-medium">+91 91234 56789</span></p>
          <p>
            📍 Location Help:{" "}
            <a href="https://maps.google.com" target="_blank" className="underline text-blue-300">
              Open Google Maps
            </a>
          </p>
        </div>
      </section>
    );
  }
  