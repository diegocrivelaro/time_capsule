import { Roboto } from "next/font/google"
import { ReactNode } from "react"
import "../styles/globals.css"

const inter = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
})

export const metadata = {
  title: "Minha capsula",
  description: "Capsula do tempo",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
