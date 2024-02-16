import React, { PropsWithChildren } from "react"
import './Circle.scss'
import clsx from "clsx"

interface ICircleProps extends PropsWithChildren {
  size?: number
  className?: string
}

export const Circle: React.FC<ICircleProps> = ({ size=144, className, children }) => {
  return (
    <div
      className={clsx("circle", className)}
      style={{
        width: size,
        height: size
      }}
    >
      {children}
    </div>
  )
}