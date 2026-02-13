'use client'

import { ThemeProvider } from "@/MyComponents/theme-provider"
import { PropsWithChildren } from "react"

function Providers({children} : PropsWithChildren) {
  return (
    <ThemeProvider attribute='class' defaultTheme="system" enableSystem>
        {children}
    </ThemeProvider>
  )
}

export default Providers