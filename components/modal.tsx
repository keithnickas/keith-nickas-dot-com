"use client"

import { Fragment, useRef, useState } from "react"
import type { ReactNode, RefObject } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { Expand } from "lucide-react"

interface ModalProps {
  isOpen?: boolean
  onClose?: () => void
  buttonText?: string
  children: ReactNode
  initialFocus?: RefObject<HTMLElement>
  size?: "sm" | "md" | "lg" | "xl" | "full"
  showCloseButton?: boolean
  className?: string
  dialogClassName?: string
}

export default function Modal({
  isOpen,
  onClose,
  buttonText,
  children,
  initialFocus,
  size = "md",
  showCloseButton = true,
  className = "",
  dialogClassName = "",
}: ModalProps) {
  const defaultFocus = useRef<HTMLDivElement>(null)
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const sizeMap: Record<string, string> = {
    sm: "w-full max-w-lg",
    md: "w-full max-w-2xl",
    lg: "w-full max-w-4xl",
    xl: "w-full max-w-6xl",
    full: "w-full h-full",
  }

  return (
    <>
      <div className={`${className}`}>
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
            aria-label={buttonText ? `Open modal to ${buttonText.toLowerCase()}` : "Open modal"}
          >
            {buttonText ?? "View Fullscreen"}
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
              className={`transform transition-all ${sizeMap[size]} max-h-svh mx-auto`}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`bg-white dark:bg-black rounded-md overflow-auto relative ${dialogClassName} border border-gray-300 dark:border-gray-700`}
                ref={defaultFocus}
              >
                {showCloseButton && (
                  <button
                    aria-label="Close modal"
                    onClick={() => setModalOpen(false)  }
                    className="absolute top-3 right-3 text-purple-600 dark:text-purple-400 fixed top-6 right-6 z-[60] p-3 rounded-xl transition-all hover:scale-110 bg-white/80 dark:bg-slate-900/80 hover:bg-gray-100 dark:hover:bg-slate-800 backdrop-blur-lg border border-gray-200 dark:border-slate-700 shadow-lg"
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
