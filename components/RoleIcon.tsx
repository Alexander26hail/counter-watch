import type { Role } from "@/lib/types";

/** Iconos originales y simples por rol; siempre acompañados de texto. */
export function RoleIcon({
  role,
  className = "h-4 w-4",
}: {
  role: Role;
  className?: string;
}) {
  const common = {
    className,
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": true as const,
  };
  if (role === "tank") {
    return (
      <svg {...common}>
        <path d="M10 1 3 4v5c0 4.6 3 8.4 7 10 4-1.6 7-5.4 7-10V4l-7-3Z" />
      </svg>
    );
  }
  if (role === "damage") {
    return (
      <svg {...common}>
        <path d="M10 1 12.4 7.6 19 10l-6.6 2.4L10 19l-2.4-6.6L1 10l6.6-2.4L10 1Z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M8 2h4v6h6v4h-6v6H8v-6H2V8h6V2Z" />
    </svg>
  );
}
