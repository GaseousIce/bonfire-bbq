import { gsap } from 'gsap';

export function initHoverButtons(): void {
  const buttons = document.querySelectorAll('.hover-button');
  if (buttons.length === 0) return;

  const mediaMatcher = gsap.matchMedia();

  mediaMatcher.add('(min-width: 1024px)', () => {
    const cleanups: (() => void)[] = [];

    buttons.forEach((button) => {
      const circle = button.querySelector('.hover-circle') as HTMLElement | null;
      if (!circle) return;

      const isPrimary = button.classList.contains('variant-primary');

      if (isPrimary) {
        gsap.set(circle, { backgroundColor: '#ffffff' });
      } else {
        gsap.set(circle, { backgroundColor: '#3cffd0' });
      }

      const updateSize = () => {
        const buttonRectangle = button.getBoundingClientRect();
        const diagonal = Math.sqrt(
          buttonRectangle.width * buttonRectangle.width +
            buttonRectangle.height * buttonRectangle.height,
        );
        gsap.set(circle, { width: diagonal * 2, height: diagonal * 2 });
      };

      updateSize();
      window.addEventListener('resize', updateSize);

      let hoverTween: gsap.core.Timeline | null = null;
      let enterDelay: gsap.core.Tween | null = null;
      let isHovered = false;
      let startX = 0;
      let startY = 0;

      const onMouseEnter = (mouseEvent: MouseEvent) => {
        isHovered = true;
        const buttonRectangle = button.getBoundingClientRect();
        startX = mouseEvent.clientX - buttonRectangle.left;
        startY = mouseEvent.clientY - buttonRectangle.top;

        if (enterDelay) enterDelay.kill();
        if (hoverTween) hoverTween.kill();

        enterDelay = gsap.delayedCall(0.2, () => {
          if (!isHovered) return;

          gsap.set(circle, { left: startX, top: startY, scale: 0 });

          hoverTween = gsap.timeline();

          hoverTween.to(
            circle,
            {
              scale: 1,
              duration: 0.6,
              ease: 'power3.out',
              force3D: true,
            },
            0,
          );

          if (!isPrimary) {
            hoverTween.to(
              button,
              {
                color: '#131313',
                duration: 0.35,
                ease: 'power2.out',
              },
              0.15,
            );
          }
        });
      };

      const onMouseMove = (mouseEvent: MouseEvent) => {
        if (isHovered && (!hoverTween || !hoverTween.isActive())) {
          const buttonRectangle = button.getBoundingClientRect();
          startX = mouseEvent.clientX - buttonRectangle.left;
          startY = mouseEvent.clientY - buttonRectangle.top;
        }
      };

      const onMouseLeave = (mouseEvent: MouseEvent) => {
        isHovered = false;
        if (enterDelay) enterDelay.kill();

        const buttonRectangle = button.getBoundingClientRect();
        const exitX = mouseEvent.clientX - buttonRectangle.left;
        const exitY = mouseEvent.clientY - buttonRectangle.top;

        if (hoverTween) hoverTween.kill();
        hoverTween = gsap.timeline();

        hoverTween.to(
          circle,
          {
            left: exitX,
            top: exitY,
            scale: 0,
            duration: 0.5,
            ease: 'power3.inOut',
            force3D: true,
          },
          0,
        );

        if (!isPrimary) {
          hoverTween.to(
            button,
            {
              color: '#ffffff',
              duration: 0.3,
              ease: 'power2.in',
            },
            0.15,
          );
        }
      };

      button.addEventListener('mouseenter', onMouseEnter as EventListener);
      button.addEventListener('mousemove', onMouseMove as EventListener);
      button.addEventListener('mouseleave', onMouseLeave as EventListener);

      cleanups.push(() => {
        window.removeEventListener('resize', updateSize);
        button.removeEventListener('mouseenter', onMouseEnter as EventListener);
        button.removeEventListener('mousemove', onMouseMove as EventListener);
        button.removeEventListener('mouseleave', onMouseLeave as EventListener);
        if (enterDelay) enterDelay.kill();
        if (hoverTween) hoverTween.kill();
        gsap.set(button, { clearProps: 'color,borderColor' });
        gsap.set(circle, { clearProps: 'all' });
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  });
}
