export default function BackGround() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none">
      {/* base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1116] to-[#07080b]" />
      {/* subtle dot grid overlay */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-[size:22px_22px]"
      />
    </div>
  );
}