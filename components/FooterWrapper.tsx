"use client"

import React from "react"
import { usePathname } from "next/navigation"
import Footer from "./Footer"

export default function FooterWrapper() {
  const pathname = usePathname()
  const showContact = pathname !== "/"

  return <Footer showContact={showContact} />
}
