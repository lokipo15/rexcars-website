'use client';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type faqSectionEntryProps = {
    heading: string;
    content: string;
};

export default function FAQSectionEntry({
    heading,
    content,
}: faqSectionEntryProps) {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.li
            className={`flex flex-col w-full mx-auto mb-4 py-2 px-6  rounded-md hover:cursor-pointer group`}
            animate={{ backgroundColor: expanded ? '#171717' : '#0a0a0a' }}
            layout
            onClick={() => setExpanded(!expanded)}
        >
            <motion.div
                className='flex flex-row justify-between items-center'
                layout='position'
                initial={false}
            >
                <motion.h3
                    layout='position'
                    className='text-3xl text-neutral-200'
                    animate={{ color: expanded ? '#446DF6' : '#e5e5e5' }}
                >
                    {heading}
                </motion.h3>
                <ChevronDownIcon
                    className={`${
                        expanded ? 'text-blue-secondary' : 'text-neutral-200'
                    } size-6 hover:cursor-pointer ease-in-out duration-300 ${
                        expanded ? 'rotate-180' : ''
                    }`}
                />
            </motion.div>
            <AnimatePresence initial={false}>
                {expanded && (
                    <motion.p
                        layout
                        initial='collapsed'
                        animate='open'
                        exit='collapsed'
                        transition={{
                            duration: 0.3,
                            ease: [0.4, 0.72, 0.83, 0.98],
                        }}
                        variants={{
                            open: {
                                opacity: 1,
                                height: 'auto',
                                transition: { duration: 0.2 },
                            },
                            collapsed: {
                                opacity: 0,
                                height: 0,
                                transition: { duration: 0.2 },
                            },
                        }}
                        className='text-neutral-400'
                    >
                        {content}
                    </motion.p>
                )}
            </AnimatePresence>
        </motion.li>
    );
}