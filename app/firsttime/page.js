'use client';
import Image from 'next/image'
import Head from 'next/head'
import { getweather } from '@/api/api'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Joey's Weather app</title>
      </Head>

      <div>
        <div>
          <h1>Welcome enter your zipcode to get started</h1>
      </div>
      <div>
        <form>
            <div>
                <input class="zipcode" type="text" pattern="[0-9]{5}"></input>
            </div>
            <input onClick={zipinfo} class="zipbutt"type="submit"></input>
        </form>
      </div>
      </div>
    </div>
  )
}

function zipinfo(){
    getweather()
}