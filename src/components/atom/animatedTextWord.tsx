import {motion} from 'framer-motion'

const AnimatedTextWord = (props:any) => {
    // This will split the text into an array of word 
    const words = props.text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };
    return (
        <motion.div
            style={{ overflow: "hidden", display: "flex", fontSize: "2rem", flexWrap: 'wrap', padding: 5 }}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {words.map((word: string, index: any) => (
                <motion.span
                    variants={child}
                    style={{ marginRight: "5px" }}
                    key={index}
                    className='text-5xl'
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
}


export default AnimatedTextWord