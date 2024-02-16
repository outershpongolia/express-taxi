import { StaticImageData } from "next/image"

export interface IAvailabilityCard {
  title:        string
  description:  string
  icon:         React.ReactNode
}

export interface IServiceCard {
  title:        string
  description:  string
  image:        string | StaticImageData
}