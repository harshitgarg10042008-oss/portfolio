import ChatRoom from "./ChatRoom";
import ContactForm from "./ContactForm";

export default function ContactChat() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="font-poppins font-bold text-[clamp(1.6rem,3vw,2.2rem)] text-white mb-4">
            Contact & Chat
          </h2>
          <p className="font-inter text-white/70">
            Get in touch with me or chat in real-time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ChatRoom />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
