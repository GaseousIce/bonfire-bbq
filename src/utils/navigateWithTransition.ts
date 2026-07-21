declare global {
  interface Window {
    __pageTransition?: (
      destinationHref: string,
      clickOriginX?: number,
      clickOriginY?: number,
    ) => void;
  }
}

export function handleNavClick(event: Event): void {
  event.preventDefault();
  const mouseEvent = event as MouseEvent;
  const targetElement = event.currentTarget as HTMLElement | null;
  let clickX = mouseEvent.clientX;
  let clickY = mouseEvent.clientY;
  if (clickX === 0 && clickY === 0 && (event as MouseEvent).detail === 0 && targetElement) {
    const boundingRectangle = targetElement.getBoundingClientRect();
    clickX = boundingRectangle.left + boundingRectangle.width / 2;
    clickY = boundingRectangle.top + boundingRectangle.height / 2;
  }
  const destinationHref = targetElement?.getAttribute('href');
  if (destinationHref && window.__pageTransition) {
    window.__pageTransition(destinationHref, clickX, clickY);
  }
}
