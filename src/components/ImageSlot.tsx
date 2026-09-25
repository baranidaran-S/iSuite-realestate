import Image from "next/image";

// Shows the image when a src is set, otherwise a dashed placeholder naming the slot.
export function ImageSlot({
  src,
  alt,
  label,
  width,
  height,
  className = "",
  dark = false,
  priority = false,
}: {
  src: string | null;
  alt: string;
  label: string;
  width: number;
  height: number;
  className?: string;
  dark?: boolean;
  priority?: boolean;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`h-auto w-full ${className}`}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        sizes="(min-width: 1024px) 900px, 100vw"
      />
    );
  }
  return (
    <div
      className={`flex w-full items-center justify-center rounded-3xl border-2 border-dashed p-6 text-center text-sm font-semibold ${
        dark ? "border-white/20 text-white/50" : "border-line text-muted"
      } ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {label}
    </div>
  );
}
