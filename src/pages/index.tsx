import Aboutus from '@/components/Aboutus'
import Banner from '@/components/Banner'
import Features from '@/components/Features'
import Feature from '@/components/Features/Feature'
import Navbar from '@/components/Navbar'
import Testimonials from '@/components/Testimonials'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Tilt from 'react-parallax-tilt';
import { start } from 'repl'


export default function Home() {
  const alignCenter = { display: 'flex', alignItems: 'center' }

  const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 2,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }


  return (
    <div>
      <div className='background' />

      <Parallax pages={5}>
        <ParallaxLayer offset={0} sticky={{start:0,end:5}} speed={0} style={{zIndex:111}}>
          <Navbar />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0} >
          <Banner />
        </ParallaxLayer>
        <ParallaxLayer offset={0.3} speed={0.5}>
          <Features />
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} sticky={{ start: 1.5, end: 3 }} speed={0.5} className='flex space-x-5 p-3' >
          <Feature title={'Why Omega'} />
        </ParallaxLayer>
        {/*  <ParallaxLayer offset={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }} speed={0.5} className='flex space-x-5 p-3'>
          <Feature title={'Feature 1'} />
        </ParallaxLayer>
        <ParallaxLayer offset={2} style={{ ...alignCenter, justifyContent: 'flex-end' }} speed={0.5} className='flex space-x-5 p-3'>
          <Feature title={'Feature 2'} />
        </ParallaxLayer>
        <ParallaxLayer offset={3} style={{ ...alignCenter, justifyContent: 'flex-end' }} speed={0.5} className='flex space-y-5 p-3'>
          <Feature title={'Feature 3'} />
        </ParallaxLayer>
        <ParallaxLayer offset={4} style={{ ...alignCenter, justifyContent: 'flex-end' }} speed={0.5} className='flex space-y-5 p-3'>
          <Aboutus />
        </ParallaxLayer> */}
        {/* <ParallaxLayer offset={1.5} speed={0.5} style={{ ...alignCenter, justifyContent: 'flex-end', }}>
          <div className='card parallax purple'>
            <p>I'm not</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={0.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className='card parallax blue'>
            <p>Neither am I</p>
          </div>
        </ParallaxLayer> */}
        {/*  <ParallaxLayer offset={5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <Testimonials />
        </ParallaxLayer> */}

      </Parallax>
    </div>
  )

}
