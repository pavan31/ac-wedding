// components/ContactInfo.js
export default function ContactInfo() {
  return (
    <section
      className="px-4 py-16 text-center rounded-lg bg-white/20 shadow-lg w-full sm:w-4/5"
      style={{ marginTop: "20px", padding: "20px" }}
    >
      <p className="text-3xl sm:text-3xl font-lora font-bold ">
        Need Help or Directions?
      </p>
      <p className="text-lg font-lora" style={{ marginTop: "20px" }}>
        Feel free to contact our families for assistance.
      </p>
      <div
        className="mt-4 space-y-2 flex flex-col sm:flex-row items-center justify-between font-lora"
        style={{ marginTop: "20px" }}
      >
        <p style={{ marginBottom: "20px" }}>
          👰 Bride&apos;s Side:
          <span className=" text-2xl font-medium font-lora"> +1 (234) 296-2485</span>
        </p>
        <p style={{ marginBottom: "20px" }}>
          🤵 Groom&apos;s Side:
          <span className="text-2xl font-medium font-lora"> +1 (234) 296-2484</span>
        </p>
        <p style={{ marginBottom: "20px" }}>
          📍 Location Help:
          <a
            href="https://g.co/kgs/iGQ5qHp"
            target="_blank"
            className="underline text-2xl text-blue-300 font-lora"
            style={{ paddingLeft: "5px", textDecoration: "underline" }}
          >
            Open Google Maps
          </a>
        </p>
      </div>
    </section>
  );
}
