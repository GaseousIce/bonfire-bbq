export function handleNavClick(event: Event): void {
  event.preventDefault();
  const mouseEvent = event as MouseEvent;
  const el = event.currentTarget as HTMLElement | null;
  let cx = mouseEvent.clientX;
  let cy = mouseEvent.clientY;
  if (cx === 0 && cy === 0 && (event as MouseEvent).detail === 0 && el) {
    const rect = el.getBoundingClientRect();
    cx = rect.left + rect.width / 2;
    cy = rect.top + rect.height / 2;
  }
  const href = el?.getAttribute('href');
  if (href && window.__pageTransition) window.__pageTransition(href, cx, cy);
}
