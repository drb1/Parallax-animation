import { motion } from 'framer-motion'
import Image from 'next/image'

const Banner = () => {
    return (
        <motion.div>
            <Image
                src={'/images/photo1.jpg'}
                alt='logo'
                width={500}
                height={500}
                sizes="100vw"
                style={{
                    width: '100%',
                    height: 'auto',
                    opacity:0.3
                }} />
        </motion.div>
    )
}
export default Banner