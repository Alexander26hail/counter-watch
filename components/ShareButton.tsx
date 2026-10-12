"use client";

import { useState } from "react";

export function ShareButton() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Sin permiso de portapapeles: el usuario puede copiar la URL manualmente.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="rounded-lg border border-edge px-4 py-2 text-sm text-muted transition-colors hover:text-foreground"
    >
      {copied ? "¡Enlace copiado!" : "Compartir resultado"}
    </button>
  );
}
