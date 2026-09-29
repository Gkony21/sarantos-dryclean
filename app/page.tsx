export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-4xl font-extrabold text-brand-lime">
        ΣΑΡΑΝΤΟΣ Dry Clean
      </h1>
      <p className="text-lg font-bold tracking-wide text-brand-blue">
        ΤΑΠΗΤΟΚΑΘΑΡΙΣΤΗΡΙΑ · ΠΛΥΝΤΗΡΙΑ
      </p>

      <a
        href="tel:+306932238223"
        className="rounded-md bg-brand-green px-4 py-2 font-bold text-white hover:bg-brand-ink"
      >
        Καλέστε μας
      </a>
    </main>
  );
}
