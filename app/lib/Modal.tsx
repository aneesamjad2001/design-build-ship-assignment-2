"use client";

import { useEffect, useRef } from "react";

/**
 * Shared modal built on the native <dialog> element, used by the Landmarks
 * detail panel and the design-system panel demos, so all three systems share
 * one interaction behavior:
 *
 * - showModal() makes the rest of the page inert and moves focus inside.
 * - Escape closes (native `cancel` → `close`), as does a backdrop click.
 * - Focus returns to the element that was focused when the dialog opened
 *   (native behavior, plus an explicit fallback for safety).
 * - Tab / Shift+Tab wrap inside the dialog as a guarantee on top of the
 *   native top-layer containment.
 * - Body scrolling is locked while open and restored on close.
 */
export default function Modal({
  open,
  onClose,
  label,
  className = "",
  backdropClassName = "",
  children,
}: {
  open: boolean;
  onClose: () => void;
  /** Accessible name for the dialog (or use aria-labelledby via children ids). */
  label: string;
  className?: string;
  backdropClassName?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      openerRef.current =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    const handleClose = () => {
      document.body.style.overflow = "";
      const opener = openerRef.current;
      // Native <dialog> restores focus itself in modern browsers; this is an
      // explicit fallback so restoration is guaranteed and testable.
      if (opener && document.contains(opener)) opener.focus();
      onClose();
    };

    const handleClick = (e: MouseEvent) => {
      if (e.target === dialog) dialog.close(); // backdrop click
    };

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusables = dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || active === dialog)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    dialog.addEventListener("close", handleClose);
    dialog.addEventListener("click", handleClick);
    dialog.addEventListener("keydown", handleKeydown);
    return () => {
      dialog.removeEventListener("close", handleClose);
      dialog.removeEventListener("click", handleClick);
      dialog.removeEventListener("keydown", handleKeydown);
    };
  }, [onClose]);

  return (
    <dialog
      ref={ref}
      aria-label={label}
      className={`${className} ${backdropClassName}`}
    >
      {children}
    </dialog>
  );
}
