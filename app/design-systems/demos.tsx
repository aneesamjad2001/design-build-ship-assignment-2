"use client";

import { useId, useRef, useState } from "react";
import Modal from "../lib/Modal";

/** Functioning examples for the design-system pages. Each system passes its
 *  own classes; the behavior (and the Modal) is shared, so all three systems
 *  demonstrate the same interaction contract the final site uses. */

export function SwitchDemo({
  label,
  trackOn,
  trackOff,
  knobOn,
  knobOff,
  labelClass,
}: {
  label: string;
  trackOn: string;
  trackOff: string;
  knobOn: string;
  knobOff: string;
  labelClass: string;
}) {
  const [on, setOn] = useState(true);
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={() => setOn(!on)}
      className="flex items-center gap-3"
    >
      <span className={on ? trackOn : trackOff}>
        <span className={on ? knobOn : knobOff} />
      </span>
      <span className={labelClass}>
        {label} · {on ? "on" : "off"}
      </span>
    </button>
  );
}

export function TabsDemo({
  tabs,
  listClass,
  activeClass,
  idleClass,
  panelClass,
}: {
  tabs: { name: string; content: string }[];
  listClass: string;
  activeClass: string;
  idleClass: string;
  panelClass: string;
}) {
  const [active, setActive] = useState(0);
  const id = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const onKeyDown = (e: React.KeyboardEvent) => {
    let target = -1;
    if (e.key === "ArrowRight") target = (active + 1) % tabs.length;
    else if (e.key === "ArrowLeft") target = (active - 1 + tabs.length) % tabs.length;
    if (target >= 0) {
      e.preventDefault();
      setActive(target);
      refs.current[target]?.focus();
    }
  };
  return (
    <div className="w-full max-w-[280px]">
      <div role="tablist" aria-label="Demo tabs" className={listClass} onKeyDown={onKeyDown}>
        {tabs.map((t, i) => (
          <button
            key={t.name}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="tab"
            id={`${id}-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`${id}-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={i === active ? activeClass : idleClass}
          >
            {t.name}
          </button>
        ))}
      </div>
      <p
        role="tabpanel"
        id={`${id}-panel-${active}`}
        aria-labelledby={`${id}-tab-${active}`}
        className={panelClass}
      >
        {tabs[active].content}
      </p>
    </div>
  );
}

export function ModalDemo({
  openLabel,
  openClass,
  dialogClass,
  children,
}: {
  openLabel: string;
  openClass: string;
  dialogClass: string;
  children: (close: () => void) => React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={openClass}>
        {openLabel}
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        label="Design-system panel demo"
        className={dialogClass}
      >
        {children(() => setOpen(false))}
      </Modal>
    </>
  );
}

export function MarkReadDemo({
  primaryClass,
  doneClass,
}: {
  primaryClass: string;
  doneClass: string;
}) {
  const [read, setRead] = useState(false);
  return read ? (
    <button type="button" aria-pressed="true" onClick={() => setRead(false)} className={doneClass}>
      ✓ Read · undo
    </button>
  ) : (
    <button type="button" aria-pressed="false" onClick={() => setRead(true)} className={primaryClass}>
      Mark as read
    </button>
  );
}
