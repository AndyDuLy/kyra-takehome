import { animationDurationInMs } from "../types/counting-animation";

function animateValue(
  element: HTMLElement,
  start: number,
  end: number,
  duration: number
): void {
  let startTimestamp: number | null = null;

  const step = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);

    const value =
      progress < 1 && end > 1
        ? String(Math.floor(progress * (end - start) + start))
        : (progress * (end - start) + start).toFixed(2);

    element.textContent = parseFloat(value).toLocaleString();

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
}

export const startCounting = () => {
  const counters = document.querySelectorAll<HTMLElement>(".counter");

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target")!;
    animateValue(counter, 0, target, animationDurationInMs);
  });
};
