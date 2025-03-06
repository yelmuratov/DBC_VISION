import { MotionBox } from './box';
import { BoxProps } from '@chakra-ui/react';

interface MotionBoxProps extends BoxProps {
  transition?: any;
}

interface FallInPlaceProps extends MotionBoxProps {
  delay?: number;
}

export const FallInPlace = ({ delay, ...rest }: FallInPlaceProps) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      {...rest}
    />
  );
};