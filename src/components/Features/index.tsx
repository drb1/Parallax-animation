import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatedButton from '../atom/button';
import AnimatedTextCharacter from '../atom/animatedTextCharacter';
import AnimatedTextWord from '../atom/animatedTextWord';
import { useRef } from 'react';



const Features = () => {
    const isMobile = window.innerWidth < 768;
    let headingAnimation = {}
    if (!isMobile) {
        headingAnimation = {
            offScreen: { x: 50 },
            onScreen: { x: 0 },
            transition: { type: 'spring', bounce: 0.4, duration: 10, delay: 5 }
        }
    }
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const position = useTransform(scrollYProgress, (pos) =>
        pos >= 1 ? "relative" : "fixed"
    );
    return (
        <>
            <motion.div style={{ opacity }} ref={targetRef} className='w-full flex rounded-s-3xl rounded-e-3xl flex-col justify-start items-start  bg-white p-10 ml-8  dark:bg-slate-600 dark:text-white md:w-2/3 md:ml-8'>
                <AnimatedTextWord text="Get the Best in Price and Talent with our Outsourcing Services!" />
                <AnimatedTextCharacter text="Scale Operations Quickly, Reduce Overhead Costs, Improve Bottom Line" />
                <AnimatedTextCharacter text="Omega BPO is committed to delivering top-quality services, with cost-effective access to quality and skilled professionals ensuring that businesses can access the best talent at a competitive price and stay ahead in the market." />
                <AnimatedButton title={'Schedule A Meeting'} />
            </motion.div>

        </>
    )
}

export default Features