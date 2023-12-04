import ImgText from '@/components/ImgText'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const texts = ["szia", "nem", "miert"];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Link href="/form">Go to form</Link>{
            texts.map((text)=>
              <ImgText img='favicon.ico' text={text}/>
              )
            }
          </main>
  )
}
