import { motion } from 'framer-motion'

const AnimatedButton = (props: any) => {
    return (
        <motion.button className='transition bg-primary rounded-full p-3 text-bold text-white hover:bg-secondary m-5  hover:ease-in-out dark:text-white	'>
            {props.title}
        </motion.button>
    )
}

export default AnimatedButton