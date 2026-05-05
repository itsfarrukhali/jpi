import Image from "next/image";
import Link from "next/link";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/923001234567?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20JPI%20programs."
      target="_blank"
      rel="noopener noreferrer"
      id="whatsapp-float-btn"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <Image
        src={"/social/whatsapp.svg"}
        alt="WhatsApp"
        width={20}
        height={20}
      />
    </Link>
  );
}
