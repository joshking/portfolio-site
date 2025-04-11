"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
}

export function Modal({ isOpen, onClose, children, className }: ModalProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Prevent hydration errors by only rendering on the client
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
      setTimeout(() => {
        setIsVisible(false)
      }, 300)
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Don't render anything on the server
  if (!isMounted) return null
  if (!isVisible) return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80",
        isOpen ? "opacity-100" : "opacity-0",
        "transition-opacity duration-300",
        className,
      )}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={cn(
          "bg-white rounded-lg p-4 max-w-4xl max-h-[90vh] overflow-auto",
          isOpen ? "scale-100" : "scale-95",
          "transition-transform duration-300",
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  )
}
