"use client"

import React from "react"
import { usePathname } from "next/navigation"
import Footer from "./Footer"

export default function FooterWrapper() {
  const pathname = usePathname()
  const showContact = pathname !== "/"
  const showHomepageAccent = pathname === "/"

  return <Footer showContact={showContact} showHomepageAccent={showHomepageAccent} />
}
