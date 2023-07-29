'use client';

import Image from 'next/image';
import { useState } from 'react';
import Message from '../components/Message';
import clsx from 'clsx';

const HOSTNAME = 'http://localhost:3000'

export default function AskPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([
    {
      content: `Tôi là Bard, một cộng sự sáng tạo và hữu ích của bạn. Tôi có một số hạn chế và không phải lúc nào cũng đúng. Tuy nhiên, phản hồi của bạn sẽ giúp tôi cải thiện.`,
      from: 'BOT',
    },
  ]);
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }
  function handleSubmit(event: any) {
    setIsLoading(true)
    console.log('Asking: ', text)
    let newMessages = [...messages, {
      content: text,
      from: 'USER',
    }]
    setMessages(newMessages)
    setText('')
    fetch(HOSTNAME+'/api/bard/ask?message='+text).then(res => res.json()).then(result => {
      if(result) {
        console.log(result);
        if(result.answer) {
          newMessages = [...newMessages, {
            content: result.answer,
            from: 'BOT',
          }]
          setMessages(newMessages)
        }
      }
      setIsLoading(false);
    });
  }
  return (
    <main className='flex flex-col items-center justify-between pt-20 px-3'>
      <div className='w-full min-h-[calc(100vh-120px)] rounded-xl bg-zinc-900 py-10 px-24 relative'>
        <div className='flex flex-col w-full h-[calc(100vh-300px)] overflow-y-scroll no-scrollbar'>
          {messages.map((message, index) => (
            <Message key={index} message={message} />
          ))}
          {isLoading && (
            <div className='flex p-3 bg-[#00000066] rounded-lg mb-4'>
              <div className='icon w-8 h-8'>
                <Image
                  src={'/sparkle_thinking_v2.gif'}
                  width={32}
                  height={32}
                  alt='Resting'
                />
              </div>
              <div className='w-full pl-3 flex items-center'></div>
            </div>
          )}
        </div>
        <div className='flex'>
          <input onKeyDownCapture={(event) => {
            if(event.key.toLocaleUpperCase() === "ENTER") {
              handleSubmit(event);
            }
          }} value={text} onChange={handleChange} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'></input>
          <button type='button' onClick={(event) => handleSubmit(event)} disabled={text === ''} className={clsx('w-fit px-3 py-2 flex justify-center items-center ml-2', text === ''? '':'hover:bg-blue-300 bg-white rounded-lg')}>
            <svg stroke={text === '' ? 'gray' : 'blue'} fill={text === '' ? 'gray' : '#6f2c8b'} strokeWidth="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="m21.426 11.095-17-8A.999.999 0 0 0 3.03 4.242L4.969 12 3.03 19.758a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81zM5.481 18.197l.839-3.357L12 12 6.32 9.16l-.839-3.357L18.651 12l-13.17 6.197z"></path></svg>
          </button>
        </div>
      </div>
    </main>
  );
}
