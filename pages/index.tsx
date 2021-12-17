import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next JS App with Tailwind</title>
        <meta
          name='description'
          content='Next JS project with tailwind template'
        />
      </Head>

      <body>
        <main className='h-screen'>
          <div className='flex bg-gray-700 w-full h-full'>
            <h1 className='text-4xl font-bold text-blue-200'>Daniel</h1>
          </div>
        </main>
      </body>
    </div>
  )
}

export default Home
