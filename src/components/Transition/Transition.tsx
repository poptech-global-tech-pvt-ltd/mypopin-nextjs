'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context';
import { usePathname } from 'next/navigation'
import { PropsWithChildren, useContext, useRef } from 'react';

// AS OF AUG 2023 - Nextjs13 has no out-of-the-box support for framer motion. Here is a hack to freeze the router before transitoning, otherwise there would be a flash of navigated page befrore the animation
export function FrozenRouter(props: PropsWithChildren<{}>) {
    const context = useContext(LayoutRouterContext);
    const frozen = useRef(context).current;

    return (
        <LayoutRouterContext.Provider value={frozen}>
            {props.children}
        </LayoutRouterContext.Provider>
    );
}

function Transition({ children }: any) {
    const pathname = usePathname()
    const variants = {
        inactive: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeInOut'
            }
        },

        out: {
            opacity: 0,
            y: -15,
            transition: {
                duration: 0.5,
                ease: 'easeInOut'
            }
        },
        in: {
            opacity: 100,
            y: 0,
            transition: {
                duration: 0.5,
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
                    <FrozenRouter>{children}</FrozenRouter>
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default Transition