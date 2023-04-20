import { ReactNode } from "react"
import Navbar from "./navbar"
import Body from "./body"
import Footer from "./footer"

interface LayoutProps{
    children : ReactNode
}

export default function Layout({ children } : LayoutProps) {
    return (
      <>
        <Navbar/>
        <Body>
            {children}
        </Body>
        <Footer/>
      </>
    )
  }