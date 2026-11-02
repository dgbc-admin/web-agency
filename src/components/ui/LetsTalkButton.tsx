import Link from "next/link";

export default function LetsTalkButton() {
  return (
    <Link
      href="#contact"
      className="
        absolute -top-16 right-8
        flex h-32 w-32
        items-center justify-center
        rounded-full
        border-4 border-white
        bg-blue-600
        text-center text-xl font-medium
        text-white
        transition-transform duration-300
        hover:scale-105
        lg:right-24
      "
    >
      Let&apos;s
      <br />
      Talk
    </Link>
  );
}
