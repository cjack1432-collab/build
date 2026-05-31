'use client'

import React, { useState } from 'react'

const SystemAuditor: React.FC = () => {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    businessName: '',
    websiteLinks: '',
    mainFrustration: '',
    immediateGoal: '',
    contactMethod: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent('Foundational Review Request')
    const body = encodeURIComponent(
      `Business Name: ${form.businessName}\n\nWebsite or Current Links: ${form.websiteLinks}\n\nMain Frustration: ${form.mainFrustration}\n\nImmediate Goal: ${form.immediateGoal}\n\nBest Contact Method: ${form.contactMethod}`
    )

    window.location.href = `mailto:mrnamaslay@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <div className="container-custom">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-4">Request Foundational Review</h2>
          <p className="text-sm opacity-60 max-w-lg mx-auto leading-relaxed">
            Provide a few details about your business. We will review your current digital setup, identify friction points, and share clear next steps.
          </p>
        </div>

        {submitted ? (
          <div
            style={{
              backgroundColor: '#faf9f6',
              border: '1px solid #e6e9ef',
              padding: '3rem',
              textAlign: 'center',
            }}
          >
            <p className="text-base font-serif mb-4">Your request has been sent.</p>
            <p className="text-sm opacity-60 leading-relaxed mb-6">
              We will follow up to schedule your foundational review conversation.
            </p>
            <button
              onClick={() => {
                setSubmitted(false)
                setForm({ businessName: '', websiteLinks: '', mainFrustration: '', immediateGoal: '', contactMethod: '' })
              }}
              style={{
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                fontWeight: 'bold',
                opacity: 0.5,
                cursor: 'pointer',
                textDecoration: 'underline',
                background: 'none',
                border: 'none',
              }}
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    opacity: 0.5,
                  }}
                >
                  Business Name
                </label>
                <input
                  type="text"
                  required
                  style={{
                    width: '100%',
                    backgroundColor: '#faf9f6',
                    border: '1px solid #e6e9ef',
                    padding: '0.75rem',
                    fontSize: '0.9rem',
                  }}
                  placeholder="e.g. Acme Studio"
                  value={form.businessName}
                  onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                />
              </div>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    opacity: 0.5,
                  }}
                >
                  Website or Current Links
                </label>
                <input
                  type="text"
                  style={{
                    width: '100%',
                    backgroundColor: '#faf9f6',
                    border: '1px solid #e6e9ef',
                    padding: '0.75rem',
                    fontSize: '0.9rem',
                  }}
                  placeholder="e.g. yourbusiness.com or Instagram URL"
                  value={form.websiteLinks}
                  onChange={(e) => setForm({ ...form, websiteLinks: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
                  opacity: 0.5,
                }}
              >
                Main Frustration
              </label>
              <textarea
                required
                rows={3}
                style={{
                  width: '100%',
                  backgroundColor: '#faf9f6',
                  border: '1px solid #e6e9ef',
                  padding: '0.75rem',
                  fontSize: '0.9rem',
                }}
                placeholder="What feels messy, disconnected, or unclear right now?"
                value={form.mainFrustration}
                onChange={(e) => setForm({ ...form, mainFrustration: e.target.value })}
              />
            </div>
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
                  opacity: 0.5,
                }}
              >
                Immediate Goal
              </label>
              <input
                type="text"
                style={{
                  width: '100%',
                  backgroundColor: '#faf9f6',
                  border: '1px solid #e6e9ef',
                  padding: '0.75rem',
                  fontSize: '0.9rem',
                }}
                placeholder="e.g. Launch a new service, clean up my online presence"
                value={form.immediateGoal}
                onChange={(e) => setForm({ ...form, immediateGoal: e.target.value })}
              />
            </div>
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
                  opacity: 0.5,
                }}
              >
                Best Contact Method
              </label>
              <input
                type="text"
                style={{
                  width: '100%',
                  backgroundColor: '#faf9f6',
                  border: '1px solid #e6e9ef',
                  padding: '0.75rem',
                  fontSize: '0.9rem',
                }}
                placeholder="e.g. Email, phone number, or preferred time to connect"
                value={form.contactMethod}
                onChange={(e) => setForm({ ...form, contactMethod: e.target.value })}
              />
            </div>
            <div style={{ textAlign: 'center', paddingTop: '1rem' }}>
              <button
                type="submit"
                style={{
                  backgroundColor: '#1a1a1a',
                  color: '#fff',
                  padding: '0.75rem 3rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Request Foundational Review
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default SystemAuditor
