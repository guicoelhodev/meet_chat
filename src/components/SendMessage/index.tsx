import { FC, KeyboardEvent, useState } from 'react'
import { Icon } from '@iconify/react'

interface ISendMessage {
  onClickFn: (message: string) => void;
}

export const SendMessage: FC<ISendMessage> = ({ onClickFn }) => {

  const [message, setMessage] = useState('');

  const handleClickEvent = () => {
    onClickFn(message)
    return setMessage('')
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') return handleClickEvent()
  };


  return (
    <section className='w-full bg-indigo-900 border-solid border-2 rounded-full border-indigo-900 flex gap-4 items-center focus-within:border-slate-400'>
      <input className='w-full bg-inherit text-slate-50 text-lg rounded-full p-4 pl-6 focus:outline-none'
        type='text'
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        value={message}
      />

      <button className='w-14 bg-inherit aspect-square bg-slate-300 rounded-full grid place-items-center' onClick={() => { onClickFn(message) }}>
        <Icon icon='ic:baseline-send' className='w-3/5 h-3/5 text-slate-50' />
      </button>
    </section>
  )
}
