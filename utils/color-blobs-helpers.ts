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
  let mounted = true
  let lastAnimation: Animation | null = null

  const play = () => {
    if (lastAnimation && lastAnimation.play) lastAnimation.play()
  }

  const pause = () => {
    if (lastAnimation && lastAnimation.pause) lastAnimation.pause()
  }

  const cancel = () => {
    mounted = false
    if (lastAnimation) {
      try {
        lastAnimation.cancel()
      } catch {}
      lastAnimation = null
    }
  }

  const runSequence = () => {
    if (!mounted || !element) return
    if (document.hidden) return

    const translateX = `${randomBetween(10, 90)}%`
    const translateY = `${randomBetween(10, 90)}%`
    const scaleFactor = randomBetween(288, 480) / 360
    const durationMs = Math.round(randomBetween(4000, 7000))

    element.style.setProperty("--blob-tx", translateX)
    element.style.setProperty("--blob-ty", translateY)
    element.style.setProperty("--blob-scale", String(scaleFactor))
    element.style.setProperty("--blob-duration", `${durationMs}ms`)
    element.style.setProperty("--blob-pulse-duration", `${durationMs}ms`)

    const computed = getComputedStyle(element).transform
    const from = computed === "none" ? "translate(50%,50%) scale(1)" : computed
    const to = `translate(${translateX}, ${translateY}) scale(${scaleFactor})`

    try {
      const anim = element.animate(
        [{ transform: from }, { transform: to }],
        { duration: durationMs, easing: "cubic-bezier(.22,.9,.24,1)", fill: "forwards" }
      )

      lastAnimation = anim
      // schedule next when finished
      anim.onfinish = () => {
        if (!mounted) return
        const pauseMs = Math.round(randomBetween(250, 1200))
        setTimeout(() => runSequence(), pauseMs)
      }
    } catch {
      // fallback: set CSS vars and re-run after duration
      const pauseMs = Math.round(randomBetween(250, 1200)) + durationMs
      setTimeout(() => runSequence(), pauseMs)
    }
  }

  return {
    start: runSequence,
    pause,
    play,
    cancel,
  }
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
