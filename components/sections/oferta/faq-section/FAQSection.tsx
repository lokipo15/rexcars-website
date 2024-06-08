import { PlusCircleIcon, PlusIcon } from '@heroicons/react/24/outline';
import FAQSectionEntry from './FAQSectionEntry';
import FAQSectionWrapper from './FAQSectionWrapper';
import { IFAQSectionData } from '@/types/pagePayload';

export default function FAQSection({entries}: IFAQSectionData) {
    return (
        <article className='flex flex-col w-full mt-[8%]'>
            <div className='flex flex-row items-center md:items-start'>
                <PlusCircleIcon className='text-blue-primary md:size-12 size-10 md:mb-0 mb-4 mr-2'/>
                <h2 className='md:text-5xl text-xl text-neutral-200 md:mb-6 mb-4'>Najczęściej zadawane pytania</h2>
            </div>
            
            <FAQSectionWrapper>
                {entries.map(({heading, content, key}) => {
                    return <FAQSectionEntry heading={heading} content={content} key={key} />
                })}
            </FAQSectionWrapper>
        </article>
    );
}