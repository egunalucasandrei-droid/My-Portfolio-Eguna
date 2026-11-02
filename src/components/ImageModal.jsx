import { useEffect, useRef } from 'react';

export default function ImageModal({ open, source, alt, theme, onClose, triggerRef }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) {
      dialog.close();
      triggerRef.current?.focus({ preventScroll: true });
    }
  }, [open, triggerRef]);

  const containFocus = (event) => {
    if (event.key !== 'Tab') return;
    const controls = [...event.currentTarget.querySelectorAll('button, a[href], [tabindex="0"]')];
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  };

  return (
    <dialog ref={dialogRef} aria-label={alt || 'Image preview'} onKeyDown={containFocus} onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === event.currentTarget) onClose(); }} className={`image-modal fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none border-0 p-4 text-white backdrop-blur-md ${theme === 'dark' ? 'bg-black/90' : 'bg-black/70'}`}>
      <div className="relative mx-auto flex w-full max-w-5xl items-center justify-center rounded-lg">
        <button type="button" onClick={onClose} className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white transition-colors hover:bg-black" aria-label="Close image preview">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="m6 6 12 12M18 6 6 18" /></svg>
        </button>
        {source && <img src={source} alt={alt || 'Full View'} decoding="async" className="max-h-[85dvh] w-full rounded-lg object-contain" />}
      </div>
    </dialog>
  );
}
