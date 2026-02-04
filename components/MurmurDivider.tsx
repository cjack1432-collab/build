'use client'

import { useState, useEffect } from 'react'

export default function MurmurDivider() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsOpen(false)
        }
      }
      
      document.addEventListener('keydown', handleEscape)
      
      return () => {
        document.body.style.overflow = ''
        document.removeEventListener('keydown', handleEscape)
      }
    }
  }, [isOpen])

  return (
    <>
      <div
        aria-hidden="true"
        onClick={() => setIsOpen(true)}
        style={{
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          width: "100vw",
          background: "transparent",
          lineHeight: 0,
          padding: 0,
          marginTop: "32px",
          marginBottom: "32px",
          overflowX: "clip",
          cursor: "pointer",
          height: "clamp(160px, 20vw, 280px)",
        }}
      >
        <img
          src="/murmur-strip-1x.webp"
          srcSet="/murmur-strip-1x.webp 1x, /murmur-strip-2x.webp 2x"
          sizes="100vw"
          alt=""
          loading="lazy"
          decoding="async"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: "contain",
            objectPosition: "center",
            imageRendering: "auto",
            transform: "scaleX(3.40)",
          }}
        />
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Murmuration image preview"
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px',
          }}
        >
          <img
            src="/murmur-strip-2x.webp"
            alt=""
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '95vw',
              maxHeight: '90vh',
              width: 'auto',
              height: 'auto',
              display: 'block',
            }}
          />
        </div>
      )}
    </>
  )
}
