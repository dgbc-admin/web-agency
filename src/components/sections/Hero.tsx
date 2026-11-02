import LetsTalkButton from "../ui/LetsTalkButton";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10">
      <div className="py-20 lg:py-28">
        <p className="mb-6 text-sm font-semibold text-slate-900">
          We Are Digital Agency
        </p>

        <h1 className="max-w-5xl text-6xl leading-[0.95] tracking-tight text-slate-950 md:text-7xl lg:text-8xl">
          Be <strong>Better</strong> &amp;
          <br />
          <strong>Build</strong> Different.
        </h1>
      </div>

      <div className="relative min-h-105 bg-slate-950">
        <div className="absolute inset-x-0 top-0 h-[70%] bg-linear-to-br from-blue-500 via-indigo-500 to-slate-900" />

        <div className="absolute bottom-8 left-8 text-white lg:left-12">
          <p className="text-2xl font-bold">
            CRAFT<span className="text-blue-400">.</span>
          </p>
        </div>

        <div className="absolute bottom-8 right-8 hidden gap-14 text-sm text-slate-300 md:flex lg:right-48">
          <div>
            <p className="text-slate-500">Based in</p>
            <p>Spain · Europe</p>
          </div>

          <div>
            <p className="text-slate-500">We build</p>
            <p>Digital Experiences.</p>
          </div>
        </div>

        <LetsTalkButton />
      </div>
    </section>
  );
}
