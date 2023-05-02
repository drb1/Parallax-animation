import AnimatedTextWord from "../atom/animatedTextWord"
import { motion } from 'framer-motion'

const Aboutus = () => {
    return (
        <>

            <motion.div
                animate={{
                    x: 0,
                    backgroundColor: "#000",
                    boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
                    position: "fixed",
                    transitionEnd: {
                        display: "none",
                    },
                }}
                whileInView={{ opacity: 1 }}
            >
                <AnimatedTextWord text={'About Us'} />
            </motion.div>
        </>
    )
}

export default Aboutus