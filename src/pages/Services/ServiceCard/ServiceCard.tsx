"use client"
import React, { useCallback, useEffect, useRef, useState } from "react"
import "./ServiceCard.scss"
import { TextWrapper } from "@/ui/container"
import { Header2Text, Paragraph1Text } from "@/ui/text"
import Image, { StaticImageData } from "next/image"
import clsx from "clsx"

interface IServiceCardProps {
  title: string
  description: string
  image: string | StaticImageData
  imageDesc: string
  reversed?: boolean
}

export const ServiceCard: React.FC<IServiceCardProps> = ({ title, description, image, imageDesc, reversed }) => {
  const [ isActive, setIsActive ] = useState(false)

  const cardRef = useRef<HTMLDivElement>(null)

  const handleOnScroll = useCallback(() => {
    const elementRect = cardRef.current?.getBoundingClientRect()
    const windowHeight = window.innerHeight

    if (!elementRect) return

    // check if element is in the center of the screen
    const elementCenter = elementRect.top + elementRect.height / 2
    const isElementInCenter = Math.abs(elementCenter - windowHeight / 2) < windowHeight / 4

    setIsActive(isElementInCenter)
  }, [cardRef.current])

  useEffect(() => {
    window.addEventListener('scroll', handleOnScroll)
  }, [handleOnScroll])

  return (
    <div
      className={clsx("service-card",
        isActive && "service-card_active",
        reversed && "service-card_reversed"
      )}
      ref={cardRef}
    >
      <TextWrapper className="service-card__text-wrapper">
        <Header2Text
          className="service-card__title"
          text={title}
        />

        <Paragraph1Text
          className="service-card__text"
          text={description}
        />
      </TextWrapper>

      <div className="service-card__image">
        <Image
          src={image}
          alt={imageDesc}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '6px'
          }}
        />
      </div>
    </div>
  )
}