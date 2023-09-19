import LookAndSayPosition from 'components/look-and-say-position'

export default function Page() {
  return (
    <section className='min-h-screen flex items-start justify-center flex-col'>
      <div className='max-w-2xl md:mx-auto mx-5  bg-black mt-5 py-5 px-4 rounded-md shadow-sm text-white'>
        <h1 className='font-semibold text-2xl'>Look and Say</h1>
        <p>Here is a look and say sequence:</p>
        <code>1, 11, 21, 1211, 111221, 312211, 13112221, 1113213211...</code>

        <LookAndSayPosition />
      </div>
    </section>
  )
}
