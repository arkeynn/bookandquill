import { useState, ChangeEvent } from 'react'

import book from './assets/book.png'

import ArrowLeft from './components/ArrowLeft'
import ArrowRight from './components/ArrowRight'

export default function App() {
  const [page, setPage] = useState(1);
  const [pageText, setPageText] = useState("");
  const [content, setContent] = useState<string[]>([""]);

  const flipNextPage = () => {
    let updatedContent = [...content];

    updatedContent[page] = pageText; // Save text at current page
    updatedContent.push(""); // Push an empty string for next page

    setPage(page + 1);
    setContent(updatedContent);
    setPageText(updatedContent[page+1]);
  };
  const flipLastPage = () => {
    if (page - 1 < 1) return;

    let updatedContent = [...content];

    updatedContent[page] = pageText; // Save text at current page

    setPage(page - 1);
    setContent(updatedContent);
    setPageText(updatedContent[page-1]);
  };

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.clientHeight < e.currentTarget.scrollHeight) {
      flipNextPage();
      setPageText("");
    } else {
      setPageText(e.target.value);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center align-middle h-[100dvh]">
      <h2 className="text-white text-3xl font-minecraft-regular">Book and Quill</h2>
      <div className="relative flex flex-col items-center justify-center align-middle">
        <img src={book} />
        <p className="absolute w-full text-xl text-center top-8 font-minecraft-regular">Page {page} of 100</p>
        <textarea value={pageText} maxLength={252} onChange={onChange} className="absolute w-[78%] h-[75%] text-xl resize-none bg-transparent top-16 left-10 outline-none border-none overflow-hidden font-minecraft-regular" ></textarea>

        <div className="absolute bottom-8 left-14 flex flex-row justify-between w-[65%]">
          <ArrowLeft onClick={flipLastPage} active={false} />
          <ArrowRight onClick={flipNextPage} active={false} />
        </div>
      </div>
    </div>
  );
}