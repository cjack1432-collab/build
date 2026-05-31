'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

type LightboxImageProps = {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  imageClassName?: string
  priority?: boolean
  sizes?: string
}

export default function LightboxImage({
  src,
  alt,
  width,
  height,
  className,
  imageClassName,
  priority = false,
  sizes,
}: LightboxImageProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onEscape)
    }
  }, [isOpen])

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`View full-size image: ${alt}`}
        className={className}
        style={{ cursor: 'zoom-in', background: 'transparent', border: 'none', padding: 0 }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes}
          className={imageClassName}
        />
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Image preview: ${alt}`}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4 md:p-8"
          style={{ cursor: 'zoom-out' }}
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close image preview"
            className="absolute right-4 top-4 rounded border border-white/30 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-white/10"
            style={{ cursor: 'pointer' }}
          >
            Close
          </button>
          <div
            onClick={(event) => event.stopPropagation()}
            className="max-h-[90vh] max-w-[95vw]"
            style={{ cursor: 'default' }}
          >
            <img
              src={src}
              alt={alt}
              className="max-h-[90vh] max-w-[95vw] object-contain"
              style={{ width: 'auto', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      )}
    </>
  )
}
