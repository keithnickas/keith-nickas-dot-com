"use client"

import { SyntheticEvent, useCallback, useEffect, useState } from "react"
import { copy } from "clipboard"
import { Check } from "lucide-react"

interface CopyToClipboardProps {
  interval: number
}

interface HandleCopyProps {
  event: SyntheticEvent
  code: string
}

export function copyToClipboard({ code, event }: HandleCopyProps) {
  if (typeof code === "string") {
    copy(code, { container: event.currentTarget })
  } else {
    console.error(`Copy button error: ${typeof code}`)
  }
}

export const CopyButton = ({
  snippet,
  className,
  label,
}: {
  snippet: string
  className?: string
  label?: string
}) => {
  const [isCopied, handleCopy] = useCopytoClipboard({ interval: 2000 })
  return (
    <div className="flex items-center gap-2">
      {isCopied ? <Check color="green" /> : <div className="w-6 h-6"></div>}
      <button
        onClick={(event) => handleCopy({ event, code: snippet })}
        className={`text-xs${isCopied ? " text-slate-200" : " text-slate-400"} hover:text-slate-200 transition-colors ${className}`}
      >
        {label || (isCopied ? "Copied" : "Copy")}
      </button>
    </div>
  )
}

export const useCopytoClipboard = ({ interval }: CopyToClipboardProps) => {
  // React State
  const [isCopied, setCopied] = useState<boolean>(false)
  const [timerIdState, setTimerIdState] = useState<number | undefined>()

  const handleCopy = useCallback((item: HandleCopyProps) => {
    const { code, event } = item
    if (typeof code === "string") {
      copy(code, { container: event.currentTarget })
      setCopied(true)
    } else {
      setCopied(false)
      console.error(`Copy button error: ${typeof item}`)
    }
  }, [])

  useEffect(() => {
    if (isCopied && interval) {
      const timerId: number = window.setTimeout(
        () => setCopied(false),
        interval
      )
      setTimerIdState(timerId)
    }

    return () => {
      window.clearTimeout(timerIdState)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCopied, interval])

  return [isCopied, handleCopy] as const
}
