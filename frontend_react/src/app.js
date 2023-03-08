import React from 'react'
import { Navbar } from './components';
// import { Parallax, ParallaxLayer} from '@react-spring/parallax';
import './App.scss';
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
    </div>
  )
}

export default App



 /* <Parallax pages={4}>
            <ParallaxLayer
            offset={0.5}
            speed={0.2}
            >

            </ParallaxLayer>
            <ParallaxLayer
            offset={0}
            speed={1}
            >
            </ParallaxLayer>
            <ParallaxLayer
            offset={2}
            speed={1}
            >

            </ParallaxLayer>
            <ParallaxLayer
            offset={1}
            speed={0.2}
            >

            </ParallaxLayer>
        </Parallax> */