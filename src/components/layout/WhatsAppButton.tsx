import Image from "next/image";
import Link from "next/link";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/923300370660?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20JPI%20programs."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed 
        bottom-4 
        right-4 
        z-50 
        flex 
        items-center 
        justify-center
        w-12 
        h-12 
        sm:w-14 
        sm:h-14
        rounded-full 
        bg-green-500 
        hover:bg-green-600 
        shadow-lg 
        transition-all 
        duration-300 
        hover:scale-110
      "
    >
      <Image
        src="/social/whatsapp.svg"
        alt="WhatsApp"
        width={24}
        height={24}
        className="object-contain"
      />
    </Link>
  );
}
