'use client'

import { lookAndSay } from 'lib/look-and-say'
import { FormEvent, useState } from 'react'

export default function LookAndSayPosition() {
  const [result, setResult] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const res = lookAndSay(form.position.value)
    setResult(res)
  }

  return (
    <>
      <p className='mt-5 font-medium mb-2'>
        Enter a position to see the look and say number at that position.
      </p>
      <div className='flex gap-7'>
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor='position'
              className='flex flex-col items-start gap-0.5'
            >
              <span className='text-sm font-semibold'>Position:</span>
              <input
                type='number'
                placeholder='Example: 5'
                name='position'
                className='px-3 py-1 rounded-lg  bg-white/90 text-black placeholder:text-black/70'
                max={30}
              />
            </label>
          </div>
          <button
            type='submit'
            className=' mt-4 bg-white/20 px-4 py-2 rounded-lg'
          >
            Look and Say
          </button>
        </form>
        {result ? (
          <div className='flex items-center text-lg gap-2'>
            <span>Result:</span>{' '}
            <code className='text-lg break-all'>{result}</code>
          </div>
        ) : null}
      </div>
    </>
  )
}
