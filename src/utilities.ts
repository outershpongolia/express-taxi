import { ERoute } from "./constants"

export const scrollToSection = (route: ERoute) => {
  const targetElement = document.getElementById(route)

  targetElement?.scrollIntoView({
    behavior: "smooth"
  })
}