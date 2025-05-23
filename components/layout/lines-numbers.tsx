"use client";

export default function LinesNumber() {
  return (
    <div className="w-fit px-5 py-5 text-muted-foreground/70 text-sm hidden sm:flex flex-col items-end gap-1 flex-shrink-0">
      {Array(150)
        .fill(0)
        .map((_, i) => (
          <div key={i}>{`${i + 1}`}</div>
        ))}
    </div>
  );
}
