export const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

export const randomBetween = (min: number, max: number) =>
  Math.random() * (max - min) + min

type Animator = {
  start: () => void
  pause: () => void
  play: () => void
  cancel: () => void
}

export function createBlobAnimator(element: HTMLDivElement | null): Animator {
  let mounted = true;
  let lastAnimation: Animation | null = null;

  const runSequence = () => {
    if (!mounted || !element || document.hidden) return;

    const nextTX = `${randomBetween(10, 90)}%`;
    const nextTY = `${randomBetween(10, 90)}%`;
    const nextScale = randomBetween(0.8, 1.3);
    const durationMs = Math.round(randomBetween(4000, 7000));

    // Fast: read current value directly from the style object (avoiding getComputedStyle)
    const currentTranslate = element.style.translate || "50% 50%";
    const currentScale = element.style.scale || "1";

    const anim = element.animate(
      [
        { translate: currentTranslate, scale: currentScale },
        { translate: `${nextTX} ${nextTY}`, scale: String(nextScale) }
      ],
      { 
        duration: durationMs, 
        easing: "cubic-bezier(.22,.9,.24,1)",
        fill: "both" // Safe here because we only have ONE active animation
      }
    );

    lastAnimation = anim;

    anim.onfinish = () => {
      if (!mounted) return;
      // Commit final values so the browser can stop tracking the animation object
      element.style.translate = `${nextTX} ${nextTY}`;
      element.style.scale = String(nextScale);
      anim.cancel(); // Free up memory immediately

      setTimeout(runSequence, Math.round(randomBetween(250, 1200)));
    };
  };

  return {
    start: runSequence,
    pause: () => lastAnimation?.pause(),
    play: () => lastAnimation?.play(),
    cancel: () => { mounted = false; lastAnimation?.cancel(); }
  };
}

/**
 * Install a scroll listener that pauses/plays provided animators during scroll.
 * Returns a cleanup function.
 */
export function scrollPauseAnimation(animators: Animator[]) {
  let rafRequestId = 0
  let isScrolling = false

  const onScroll = () => {
    if (!isScrolling) {
      isScrolling = true
      document.documentElement.classList.add("user-is-scrolling")
      animators.forEach((a) => a.pause())
    }
    cancelAnimationFrame(rafRequestId)
    rafRequestId = requestAnimationFrame(() => {
      isScrolling = false
      document.documentElement.classList.remove("user-is-scrolling")
      animators.forEach((a) => a.play())
    })
  }

  window.addEventListener("scroll", onScroll, { passive: true })

  return () => {
    window.removeEventListener("scroll", onScroll)
    cancelAnimationFrame(rafRequestId)
  }
}
