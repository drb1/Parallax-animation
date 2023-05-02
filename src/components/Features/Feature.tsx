import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatedTextCharacter from '../atom/animatedTextCharacter';
import { useRef } from 'react';
const child = {
    visible: {
        opacity: 1,
        x: 50,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
    },
    hidden: {
        opacity: 0,
        x: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
            ease: "linear",
        },
    },
};
const Feature = (props: any) => {
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
        <motion.div
            style={{opacity}}
            whileInView={{ opacity: 1 }}
            className='card w-full'
        >
           <img src='/images/photo2.png' alt='second photo' style={{backgroundSize:'cover'}}/>
        </motion.div>
    )
}

export default Feature