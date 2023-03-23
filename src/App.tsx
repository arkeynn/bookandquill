import { useState, ChangeEvent } from 'react'

import book from './assets/book.png'

export default function App() {
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.clientHeight < e.currentTarget.scrollHeight) {
      console.log("Too much text!!");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center align-middle h-[100dvh]">
      <div className="relative flex flex-col items-center justify-center align-middle">
        <img src={book} />
        <p className="absolute w-full text-xl text-center top-8 font-minecraft-regular">Page 1 of 100</p>
        <textarea maxLength={256} onChange={onChange} className="absolute w-[80%] h-[76%] text-xl resize-none bg-transparent top-16 left-10 overflow-hidden font-minecraft-regular" >sex</textarea>
      </div>
    </div>
  );
}