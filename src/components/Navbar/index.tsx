import { useEffect, useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuItem } from "./MenuItem";
import Image from "next/image";


const useDimensions = (ref: any) => {
    const dimensions = useRef({ width: 0, height: 0 });

    useEffect(() => {
        dimensions.current.width = ref.current.offsetWidth;
        dimensions.current.height = ref.current.offsetHeight;
    }, []);

    return dimensions.current;
};

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const itemIds = [0, 1, 2, 3, 4];


const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const Navigation = () => (
    <motion.ul variants={variants}>
        {itemIds.map(i => (
            <MenuItem i={i} key={i} />
        ))}
    </motion.ul>
);

const Path = (props: any) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
);

const MenuToggle = ({ toggle }) => (
    <button onClick={toggle}>
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" }
                }}
                stroke='red'
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                }}
                transition={{ duration: 0.1 }}
                stroke='red'
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" }
                }}
                stroke='red'
            />
        </svg>
    </button>
);


const Navbar = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <div className="relative">
            <div className="p-2">
                <div className="ml-5 ">
                    <motion.div>
                        <Image src={'/images/obpoLogo.webp'} height={70} width={70} alt="logo" />
                    </motion.div>
                </div>
                <div className="flex">
                    <motion.nav
                        initial={false}
                        animate={isOpen ? "open" : "closed"}
                        custom={height}
                        ref={containerRef}
                    >
                        <motion.div className="button-background" variants={sidebar} />
                        <Navigation />
                        <MenuToggle toggle={() => toggleOpen()} />
                    </motion.nav>
                </div>
            </div>
        </div>


    );

}

export default Navbar