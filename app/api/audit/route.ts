import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { businessName, techStack, painPoints, goals } = await req.json()

  if (!process.env.GEMINI_API_KEY) {
    return NextResponse.json(
      { error: 'API key not configured. Audit service is temporarily unavailable.' },
      { status: 503 }
    )
  }

  try {
    const prompt = `
      You are a senior systems architect at DCFB Wellness. 
      Your goal is to provide a calm, minimalist, and deeply professional "Foundational System Audit" for a business.
      
      Business Details:
      - Name: ${businessName}
      - Current Tools/Tech: ${techStack}
      - Main Problems: ${painPoints}
      - Future Goals: ${goals}

      Please provide an audit structured as follows:
      1. Foundational Health (Current state evaluation)
      2. Connection Gaps (Where systems are disjointed)
      3. Strategic Simplification (What to stop doing or remove)
      4. Immediate Next Steps (The 3 most critical items to fix legitimacy or efficiency)

      Keep the tone calm, encouraging, but direct. Avoid marketing hype. 
      Focus on ownership, connectivity, and legitimacy.
      Format your response in clean Markdown.
    `

    const response = await fetch('https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': process.env.GEMINI_API_KEY,
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.7, maxOutputTokens: 1024 },
      }),
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to generate audit. Please try again.' },
        { status: response.status }
      )
    }

    const data = await response.json()
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response'

    return NextResponse.json({ text })
  } catch (error) {
    console.error('Audit error:', error)
    return NextResponse.json(
      { error: 'Server error while generating audit.' },
      { status: 500 }
    )
  }
}
