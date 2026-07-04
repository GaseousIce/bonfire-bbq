import { gsap } from 'gsap';

export function initCustomDropdown(dropdownContainer: HTMLElement, signal: AbortSignal): void {
  if (dropdownContainer.dataset.initialized) return;
  dropdownContainer.dataset.initialized = 'true';

  const dropdownTriggerButton = dropdownContainer.querySelector(
    '.custom-select-trigger',
  ) as HTMLElement;
  const dropdownOptionsPanel = dropdownContainer.querySelector(
    '.custom-select-options',
  ) as HTMLElement;
  const dropdownLabelElement = dropdownContainer.querySelector(
    '.custom-select-label',
  ) as HTMLElement;
  const dropdownArrowIcon = dropdownContainer.querySelector('.custom-select-arrow') as HTMLElement;
  const hiddenInput = dropdownContainer.querySelector(
    'input[type="hidden"]',
  ) as HTMLInputElement | null;
  const optionElements = dropdownContainer.querySelectorAll(
    '.custom-select-option',
  ) as NodeListOf<HTMLElement>;

  if (!dropdownTriggerButton || !dropdownOptionsPanel) return;

  let isDropdownOpen = false;

  const openTween = gsap.fromTo(
    dropdownOptionsPanel,
    { opacity: 0, y: -6 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.4)',
      easeReverse: 'power2.in',
      paused: true,
      onReverseComplete: () => {
        dropdownOptionsPanel.style.display = 'none';
      },
    },
  );

  const arrowTween = dropdownArrowIcon
    ? gsap.to(dropdownArrowIcon, {
        rotation: 180,
        duration: 0.3,
        ease: 'power2.out',
        paused: true,
      })
    : null;

  function openDropdown() {
    if (isDropdownOpen) return;
    isDropdownOpen = true;

    const event = new CustomEvent('bonfire:dropdown-opened', {
      detail: { target: dropdownContainer },
    });
    document.dispatchEvent(event);

    dropdownTriggerButton.setAttribute('aria-expanded', 'true');
    dropdownOptionsPanel.style.display = dropdownOptionsPanel.classList.contains('grid')
      ? 'grid'
      : 'block';
    openTween.restart();
    if (arrowTween) arrowTween.play();
  }

  function closeDropdown() {
    if (!isDropdownOpen) return;
    isDropdownOpen = false;
    dropdownTriggerButton.setAttribute('aria-expanded', 'false');
    openTween.timeScale(2).reverse();
    if (arrowTween) arrowTween.timeScale(2).reverse();
  }

  dropdownTriggerButton.addEventListener('click', (clickEvent) => {
    clickEvent.stopPropagation();
    isDropdownOpen ? closeDropdown() : openDropdown();
  });

  optionElements.forEach((optionElement) => {
    optionElement.addEventListener('click', () => {
      if ((optionElement as HTMLButtonElement).disabled) return;
      const value = optionElement.dataset.value;
      const selectedOptionText = optionElement.textContent;
      if (dropdownLabelElement) {
        dropdownLabelElement.textContent = selectedOptionText;
        dropdownLabelElement.classList.remove('text-secondary-text');
      }
      if (hiddenInput) hiddenInput.value = value || '';
      dropdownContainer.dataset.value = value || '';
      dropdownContainer.dispatchEvent(new Event('change'));
      closeDropdown();
    });
  });

  document.addEventListener(
    'click',
    (clickEvent) => {
      if (!dropdownContainer.contains(clickEvent.target as Node) && isDropdownOpen) {
        closeDropdown();
      }
    },
    { signal },
  );

  document.addEventListener(
    'bonfire:dropdown-opened',
    ((e: CustomEvent) => {
      if (isDropdownOpen && !dropdownContainer.contains(e.detail.target as Node)) {
        closeDropdown();
      }
    }) as EventListener,
    { signal },
  );
}
