import { MotionBox, MotionBoxProps } from './box'
import React from 'react'

export const Float: React.FC<
  MotionBoxProps & { delay?: number; steps?: number[] }
> = (props) => {
  const { children, delay = 0.2, steps = [10, -10, 10], ...rest } = props
  return (
    <MotionBox
      animate={{ translateY: steps }}
    >
      {children}
    </MotionBox>
  )
}
