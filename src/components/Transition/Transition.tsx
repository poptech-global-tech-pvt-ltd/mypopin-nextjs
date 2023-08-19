import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

function Transition({ children }: any) {
    const pathname = usePathname()
    const variants = {
        inactive: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: 'easeInOut'
            }
        },

        out: {
            opacity: 0,
            y: -100,
            transition: {
                duration: 1,
                ease: 'easeInOut'
            }
        },
        in: {
            opacity: 100,
            y: 0,
            transition: {
                duration: 1,
                ease: 'easeInOut'
            }
        }
    }

    return (
        <>
            <AnimatePresence
                initial={false}
                mode='wait'
            >
                <motion.div
                    key={pathname}
                    variants={variants}
                    animate="in"
                    initial="out"
                    exit="out"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default Transition