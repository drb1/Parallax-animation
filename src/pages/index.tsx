import Testimonials from '@/components/Testimonials'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Home() {

  const alignCenter = { display: 'flex', alignItems: 'center' }
  return (
    <div>
      <div className='background' />

      <Parallax pages={5}>
        <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className='scrollText'>Scroll down for Parallax </p>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className='card sticky'>
            <p>I'm a sticky layer</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className='card parallax purple'>
            <p>I'm not</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className='card parallax blue'>
            <p>Neither am I</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer horizontal={true} offset={4} speed={1.5} sticky={{ start: 4, end:4  }} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
        <Testimonials />
        </ParallaxLayer>
        
      </Parallax>
    </div>
  )

}
