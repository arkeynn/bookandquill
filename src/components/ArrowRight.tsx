import { ComponentPropsWithoutRef } from 'react'

import arrowRightNormal from '../assets/arrowRightNormal.png'
import arrowRightActive from '../assets/arrowRightActive.png'

interface Props extends ComponentPropsWithoutRef<"button"> {
  active: boolean;
}

export default function ArrowRight({active = false, ...props}: Props) {
  return (
    <button {...props} className="bg-arrow-right-normal active:bg-arrow-right-active w-[50px] h-[28px] bg-no-repeat object-cover"></button>
  );
}