import Image from 'next/image'
import Head from 'next/head'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Joey's Weather app</title>
      </Head>

      <div>
        <div>
          <h1>Temp</h1>
      </div>
      <div>
        <h3>Location</h3>
      </div>
      </div>
    </div>
  )
}
