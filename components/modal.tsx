"use client"

import { Fragment, useRef, useState } from "react"
import type { ReactNode, RefObject } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { Expand } from "lucide-react"

interface ModalProps {
  isOpen?: boolean
  onClose?: () => void
  children: ReactNode
  initialFocus?: RefObject<HTMLElement>
  size?: "sm" | "md" | "lg" | "xl" | "full"
  showCloseButton?: boolean
  className?: string
}

export default function Modal({
  isOpen,
  onClose,
  children,
  initialFocus,
  size = "md",
  showCloseButton = true,
  className = "",
}: ModalProps) {
  const defaultFocus = useRef<HTMLDivElement>(null)
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const sizeMap: Record<string, string> = {
    sm: "max-w-lg",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-6xl",
    full: "w-full h-full",
  }

  return (
    <>
      <div>
        <div
          className="relative flex justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <button
            className="flex group text-purple-600 gap-2 dark:text-purple-400"
            onClick={() => {
              setModalOpen(true)
            }}
            aria-label="Open modal"
          >
            View Fullscreen
            <Expand />
          </button>
        </div>
      </div>
      <Transition show={modalOpen} as={Fragment}>
        <Dialog
          initialFocus={initialFocus ?? defaultFocus}
          onClose={() => setModalOpen(false)}
          className="fixed inset-0 z-[99999] overflow-hidden"
        >
          <Transition.Child
            className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />
          <div className="fixed inset-0 overflow-hidden flex items-center justify-center px-4 sm:px-6">
            <Transition.Child
              className={`transform transition-all ${size === "full" ? "h-full" : "max-h-full"} w-full ${sizeMap[size]} mx-auto`}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`bg-white dark:bg-black rounded-md overflow-auto relative ${className}`}
                ref={defaultFocus}
              >
                {showCloseButton && (
                  <button
                    aria-label="Close modal"
                    onClick={() => setModalOpen(false)  }
                    className="absolute top-3 right-3 text-purple-600 dark:text-purple-400"
                  >
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
