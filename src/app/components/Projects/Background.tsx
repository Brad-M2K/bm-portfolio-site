export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 w-screen h-screen">
      {/* base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1116] to-[#07080b]" />

      {/* subtle dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff11_3px,transparent_1px)] bg-[size:40px_40px]" />

      {/* vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
    </div>
  );
}
