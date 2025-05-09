// components/ContactInfo.js
export default function ContactInfo() {
  return (
    <section
      className="px-4 py-16 text-center rounded-lg bg-white/20 shadow-lg w-full sm:w-4/5"
      style={{ marginTop: "20px", padding: "20px" }}
    >
      <p className="text-3xl sm:text-3xl font-bold ">
        Need Help or Directions?
      </p>
      <p className="text-lg " style={{ marginTop: "20px" }}>
        Feel free to contact our families for assistance.
      </p>
      <div
        className="mt-4 space-y-2 flex flex-col sm:flex-row items-center justify-between"
        style={{ marginTop: "20px" }}
      >
        <p style={{ marginBottom: "20px" }}>
          👰 Bride&apos;s Side:
          <span className="font-medium">+91 9951737271</span>
        </p>
        <p style={{ marginBottom: "20px" }}>
          🤵 Groom&apos;s Side:
          <span className="font-medium">+91 8074897590</span>
        </p>
        <p style={{ marginBottom: "20px" }}>
          📍 Location Help:
          <a
            href="https://maps.app.goo.gl/n7TYXM2gYoxYiqMu5"
            target="_blank"
            className="underline text-blue-300"
            style={{ paddingLeft: "5px", textDecoration: "underline" }}
          >
            Open Google Maps
          </a>
        </p>
      </div>
    </section>
  );
}
