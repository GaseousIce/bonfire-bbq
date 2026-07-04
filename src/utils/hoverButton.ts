import { gsap } from 'gsap';

export function initHoverButtons(): void {
  const buttons = document.querySelectorAll('.hover-button');
  if (buttons.length === 0) return;

  const mm = gsap.matchMedia();

  mm.add('(min-width: 1024px)', () => {
    const cleanups: (() => void)[] = [];

    const buttonData: { button: Element; circle: HTMLElement; isPrimary: boolean }[] = [];

    buttons.forEach((button) => {
      const circle = button.querySelector('.hover-circle') as HTMLElement | null;
      if (!circle) return;

      const isPrimary = button.classList.contains('variant-primary');
      buttonData.push({ button, circle, isPrimary });
    });

    buttonData.forEach(({ circle, isPrimary }) => {
      if (isPrimary) {
        gsap.set(circle, { backgroundColor: '#ffffff' });
      } else {
        gsap.set(circle, { backgroundColor: '#3cffd0' });
      }
    });

    const updateAllSizes = () => {
      const rects = buttonData.map(({ button }) => button.getBoundingClientRect());

      buttonData.forEach(({ circle }, i) => {
        const rect = rects[i];
        const diagonal = Math.sqrt(rect.width * rect.width + rect.height * rect.height);
        gsap.set(circle, { width: diagonal * 2, height: diagonal * 2 });
      });
    };

    updateAllSizes();

    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    const onResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateAllSizes, 150);
    };

    window.addEventListener('resize', onResize);
    cleanups.push(() => {
      window.removeEventListener('resize', onResize);
      if (resizeTimer) clearTimeout(resizeTimer);
    });

    buttonData.forEach(({ button, circle, isPrimary }) => {
      let hoverTween: gsap.core.Timeline | null = null;
      let enterDelay: gsap.core.Tween | null = null;
      let isHovered = false;
      let startX = 0;
      let startY = 0;
      let cachedRect: DOMRect | null = null;

      const onMouseEnter = (e: MouseEvent) => {
        isHovered = true;
        cachedRect = button.getBoundingClientRect();
        startX = e.clientX - cachedRect.left;
        startY = e.clientY - cachedRect.top;

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
              force3D: false,
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

      const onMouseMove = (e: MouseEvent) => {
        if (isHovered && (!hoverTween || !hoverTween.isActive())) {
          if (cachedRect) {
            startX = e.clientX - cachedRect.left;
            startY = e.clientY - cachedRect.top;
          }
        }
      };

      const onMouseLeave = (e: MouseEvent) => {
        isHovered = false;
        if (enterDelay) enterDelay.kill();

        let x = e.clientX;
        let y = e.clientY;

        if (cachedRect) {
          x -= cachedRect.left;
          y -= cachedRect.top;
        } else {
          const rect = button.getBoundingClientRect();
          x -= rect.left;
          y -= rect.top;
        }

        cachedRect = null;

        if (hoverTween) hoverTween.kill();
        hoverTween = gsap.timeline();

        hoverTween.to(
          circle,
          {
            left: x,
            top: y,
            scale: 0,
            duration: 0.5,
            ease: 'power3.inOut',
            force3D: false,
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
