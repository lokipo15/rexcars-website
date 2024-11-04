import { iconProps } from '@/types/iconProps';
import Link from 'next/link';

export default function TiktokIcon({ width, height }: iconProps) {
    return (
        <figure aria-label='Tiktok'>
            <Link
                href='https://www.tiktok.com/@rex.cars'
                rel='noopener norefferer'
                target='_blank'
            >
                <svg
                    viewBox='0 0 32 32'
                    xmlns='http://www.w3.org/2000/svg'
                    className='fill-neutral-200 ease-in-out duration-200 hover:cursor-pointer hover:fill-[#ff0050]'
                    height={height}
                    width={width}
                >
                    <path d='M27.8,7.12A1,1,0,0,0,26.86,7,3.49,3.49,0,0,1,22,3.72,1,1,0,0,0,21.72,3,1,1,0,0,0,21,2.69H17a1,1,0,0,0-1,1V20.81a2.5,2.5,0,1,1-2.5-2.5,1,1,0,0,0,1-1v-4a1,1,0,0,0-1-1A8.51,8.51,0,0,0,5,20.81a8.41,8.41,0,0,0,1.6,5,1,1,0,0,0,.81.42A1,1,0,0,0,8,26a1,1,0,0,0,.23-1.4A6.44,6.44,0,0,1,7,20.81a6.52,6.52,0,0,1,5.5-6.43v2A4.5,4.5,0,1,0,18,20.81V4.69h2.07A5.51,5.51,0,0,0,25.5,9.31a6.3,6.3,0,0,0,.75-.05V11.2a7.12,7.12,0,0,1-4.74-.83,1,1,0,0,0-1,0,1,1,0,0,0-.5.87v9.57a6.51,6.51,0,0,1-9,6,1,1,0,0,0-.77,1.84,8.36,8.36,0,0,0,3.28.66A8.52,8.52,0,0,0,22,21.47a.76.76,0,0,0,0-.16V12.79a9.13,9.13,0,0,0,5.52.16,1,1,0,0,0,.72-1V8A1,1,0,0,0,27.8,7.12Z' />
                </svg>
            </Link>
        </figure>
    );
}
