'use client'

import React, { useState } from 'react'

const SystemAuditor: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [form, setForm] = useState({
    businessName: '',
    techStack: '',
    painPoints: '',
    goals: ''
  })

  const generateAudit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setResult('')

    try {
      const response = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        const error = await response.json()
        setResult(error.error || 'Failed to generate audit')
        setLoading(false)
        return
      }

      const data = await response.json()
      setResult(data.text)
    } catch (error) {
      console.error('Audit failed:', error)
      setResult('We encountered a small technical hurdle while generating your audit. Please try again or reach out directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container-custom">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-4 italic">The Foundational Audit</h2>
          <p className="text-sm opacity-60 max-w-lg mx-auto leading-relaxed">
            Provide a few details about your current system. Our AI-assisted framework will provide a preliminary review of your digital foundations.
          </p>
        </div>

        {!result && !loading ? (
          <form onSubmit={generateAudit} style={{display:'flex', flexDirection:'column', gap:'1.5rem'}}>
            <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:'1.5rem'}}>
              <div>
                <label style={{display:'block', fontSize:'10px', textTransform:'uppercase', letterSpacing:'0.2em', fontWeight:'bold', marginBottom:'0.5rem', opacity:0.5}}>Business Name</label>
                <input 
                  type="text" 
                  required
                  style={{width:'100%', backgroundColor:'#faf9f6', border:'1px solid #e6e9ef', padding:'0.75rem', fontSize:'0.9rem'}}
                  placeholder="e.g. Acme Studio"
                  value={form.businessName}
                  onChange={e => setForm({...form, businessName: e.target.value})}
                />
              </div>
              <div>
                <label style={{display:'block', fontSize:'10px', textTransform:'uppercase', letterSpacing:'0.2em', fontWeight:'bold', marginBottom:'0.5rem', opacity:0.5}}>Current Tools</label>
                <input 
                  type="text"
                  style={{width:'100%', backgroundColor:'#faf9f6', border:'1px solid #e6e9ef', padding:'0.75rem', fontSize:'0.9rem'}}
                  placeholder="e.g. Wix, Gmail, Instagram"
                  value={form.techStack}
                  onChange={e => setForm({...form, techStack: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label style={{display:'block', fontSize:'10px', textTransform:'uppercase', letterSpacing:'0.2em', fontWeight:'bold', marginBottom:'0.5rem', opacity:0.5}}>Main Frustration or Pain Point</label>
              <textarea 
                required
                rows={3}
                style={{width:'100%', backgroundColor:'#faf9f6', border:'1px solid #e6e9ef', padding:'0.75rem', fontSize:'0.9rem'}}
                placeholder="What feels messy or disconnected right now?"
                value={form.painPoints}
                onChange={e => setForm({...form, painPoints: e.target.value})}
              />
            </div>
            <div>
              <label style={{display:'block', fontSize:'10px', textTransform:'uppercase', letterSpacing:'0.2em', fontWeight:'bold', marginBottom:'0.5rem', opacity:0.5}}>What is the immediate goal?</label>
              <input 
                type="text"
                style={{width:'100%', backgroundColor:'#faf9f6', border:'1px solid #e6e9ef', padding:'0.75rem', fontSize:'0.9rem'}}
                placeholder="e.g. Launch a new service, professionalize my image"
                value={form.goals}
                onChange={e => setForm({...form, goals: e.target.value})}
              />
            </div>
            <div style={{textAlign:'center', paddingTop:'1rem'}}>
              <button type="submit" style={{backgroundColor:'#1a1a1a', color:'#fff', padding:'0.75rem 3rem', textTransform:'uppercase', letterSpacing:'0.2em', fontSize:'0.75rem', fontWeight:'bold', border:'none', cursor:'pointer'}}>
                Generate Audit
              </button>
            </div>
          </form>
        ) : (
          <div style={{backgroundColor:'#faf9f6', border:'1px solid #e6e9ef', padding:'2rem', minHeight:'400px'}}>
            {loading && !result && (
              <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100%', gap:'1rem', paddingTop:'5rem', paddingBottom:'5rem'}}>
                <div style={{width:'3rem', height:'1px', backgroundColor:'#1a1a1a', opacity:0.5}}></div>
                <p style={{fontSize:'10px', textTransform:'uppercase', letterSpacing:'0.3em', fontWeight:'bold', opacity:0.4}}>
                  Analyzing foundations...
                </p>
              </div>
            )}
            
            {result && (
              <div>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'2rem', borderBottom:'1px solid #e6e9ef', paddingBottom:'1rem'}}>
                  <span style={{fontSize:'10px', textTransform:'uppercase', letterSpacing:'0.2em', fontWeight:'bold', opacity:0.3}}>Audit Summary: {form.businessName}</span>
                  <button 
                    onClick={() => {setResult(null); setForm({businessName: '', techStack: '', painPoints: '', goals: ''})}}
                    style={{fontSize:'10px', textTransform:'uppercase', letterSpacing:'0.2em', fontWeight:'bold', opacity:0.5, cursor:'pointer', textDecoration:'underline', background:'none', border:'none'}}
                  >
                    Start Over
                  </button>
                </div>
                <div style={{whiteSpace:'pre-wrap', fontFamily:'serif', fontSize:'1rem', lineHeight:1.6, color:'#333'}}>
                  {result}
                </div>
                
                {!loading && (
                  <div style={{marginTop:'3rem', paddingTop:'2rem', borderTop:'1px solid #e6e9ef', textAlign:'center'}}>
                    <p style={{fontSize:'0.9rem', fontStyle:'italic', opacity:0.6, marginBottom:'1.5rem'}}>
                      This is an initial perspective. Real clarity comes from a conversation.
                    </p>
                    <a href="mailto:hello@dcfbwellness.com" style={{backgroundColor:'#1a1a1a', color:'#fff', padding:'0.75rem 1.5rem', textTransform:'uppercase', letterSpacing:'0.2em', fontSize:'0.75rem', fontWeight:'bold', textDecoration:'none', display:'inline-block'}}>
                      Discuss this audit with us
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default SystemAuditor
