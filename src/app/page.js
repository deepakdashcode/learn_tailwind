import Image from "next/image";
import { Inter, Roboto_Mono } from 'next/font/google'
 
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export default function Home() {
  return (
    <>
    <div className="Parent">
      <div>Header</div>
      <div className="flex flex-col items-end md:flex-row">
        <div className="w-full md:w-1/6 bg-red-600"><div>Sidebar</div></div>
        <div className="w-full bg-blue-700">
          <h1 className="font-bold">Main Content</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex nemo provident ipsam ea debitis assumenda obcaecati, odit neque. Ad velit nemo voluptatibus blanditiis dolor exercitationem alias enim ullam voluptate beatae.</p>
        </div>
        <div className="w-full md:w-1/6 bg-red-600"><div>Another Sidebar</div></div>
      </div>

      <div className="flex flex-wrap justify-evenly">
        <div className="w-36 m-1 bg-red-600">01</div>
        <div className="w-36 m-1 bg-red-600">01</div>
        <div className="w-36 m-1 bg-red-600">01</div>
        <div className="w-36 m-1 bg-red-600">01</div>
        <div className="w-36 m-1 bg-red-600">01</div>
      </div>
    </div>
      
      <div>
        Test
      </div>
    </>

  );
}
