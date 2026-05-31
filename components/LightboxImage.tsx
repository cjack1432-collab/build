'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import type { CSSProperties } from 'react'

type LightboxImageProps = {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  imageClassName?: string
  imageStyle?: CSSProperties
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
  imageStyle,
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

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onEscape)

    return () => {
      document.body.style.overflow = ''
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
          style={imageStyle}
        />
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Image preview: ${alt}`}
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            padding: '1rem',
            cursor: 'zoom-out',
          }}
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close image preview"
            style={{
              position: 'absolute',
              right: '1rem',
              top: '1rem',
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '4px',
              padding: '0.5rem 0.75rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: '#ffffff',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            Close
          </button>
          <div
            onClick={(event) => event.stopPropagation()}
            style={{
              maxHeight: '90vh',
              maxWidth: '95vw',
              cursor: 'default',
            }}
          >
            <img
              src={src}
              alt={alt}
              style={{
                maxHeight: '90vh',
                maxWidth: '95vw',
                objectFit: 'contain',
                width: 'auto',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>
        </div>
      )}
    </>
  )
}
