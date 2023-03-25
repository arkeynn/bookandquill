import { ComponentPropsWithoutRef } from 'react'

import arrowLeftNormal from '../assets/arrowLeftNormal.png'
import arrowLeftActive from '../assets/arrowLeftActive.png'

interface Props extends ComponentPropsWithoutRef<"button"> {
  active: boolean;
}

export default function ArrowLeft({active, ...props}: Props) {
  return (
    <button {...props} className="bg-arrow-left-normal active:bg-arrow-left-active w-[50px] h-[28px] bg-no-repeat object-cover"></button>
  );
}