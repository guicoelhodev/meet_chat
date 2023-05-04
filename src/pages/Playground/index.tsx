import { FC } from 'react'
import { SendMessage } from 'src/components/SendMessage'

export const Playground: FC = () => {
  return (
    <div aria-label='playground_page' className='min-h-screen bg-indigo-950 flex flex-col items-center justify-evenly'>
      <h1 className='text-center text-3xl text-blue-500'>Playground's page</h1>

      <section className='w-full max-w-2xl'>
        <SendMessage onClickFn={(message) => console.log(message)} />
      </section>
    </div>
  )
}
