import CarDescriptionSection from '@/components/sections/oferta/car-description/CarDescriptionSection';
import CarSpecyficationSection from '@/components/sections/oferta/car-specyfication/CarSpecyficationSection';
import FAQSection from '@/components/sections/oferta/faq-section/FAQSection';
import ImagesGallery from '@/components/sections/oferta/image-gallery/ImagesGallery';
import PriceChart from '@/components/sections/oferta/price-chart/PriceChart';
import { fetchPageHeaderPayload, fetchPriceChartData, fetchSpecyficationCardData, fetchPageContentData, fetchPageFAQData, fetchPageImagesData } from '@/data/fetchPagePayload';
import { ICarDescriptionData } from '@/types/pagePayload';
import Head from 'next/head';
import { notFound } from 'next/navigation';

export default async function CarPage({ params }: { params: { slug: string } }) {
    const [headerData, priceChartData, technicalSpecData, pageDescriptionData, faqSectionData, imagesData] = await Promise.all([
        fetchPageHeaderPayload(params.slug),
        fetchPriceChartData(params.slug),
        fetchSpecyficationCardData(params.slug),
        fetchPageContentData(params.slug),
        fetchPageFAQData(),
        fetchPageImagesData(params.slug),
    ]);

    if (!headerData || !priceChartData) notFound();

    const pageDescriptionPayload: ICarDescriptionData = {
        bottomContent: pageDescriptionData,
        header: headerData
    };

    return (
        <>
            {/* TODO: FIX METADATA GENERATION */}
            <Head>
                {/* Standard tags */}
                <title key={"pageTitle"}>Wynajem Volkswagen Golf 8R | RexCars</title>
                <meta
                    key={"descriptionTag"}
                    name='description'
                    content='Volkswagen Golf 8R na wynajem w całej Polsce. Możliwość dowozu samochodu do klienta. Spełnij swoje motoryzacyjne marzenia już dziś i wynajmij sportowy samochód.'
                />

                <meta
                    key={"viewportTag"}
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />

                {/* Robots */}
                <meta
                    key={"Robots"}
                    name='robots'
                    content='index, follow'
                />

                {/* OpenGraph */}
                <meta
                    key={"ogTitle"}
                    name='og:title'
                    content='Volkswagen Golf 8R dostępny na wynajem | Wypożyczalnia samochów sportowych RexCars'
                />
                <meta
                    key={"ogDescription"}
                    name='og:description'
                    content='Samochód sportowy Volkswagen Golf 8R na wynajem. Dowóz auta na całą Polskę.'
                />
                <meta
                    key={"ogType"}
                    name='og:type'
                    content='website'
                />
                <meta
                    key={"ogSiteName"}
                    name='og:site_name'
                    content='Wypożyczalnia samochodów sportowych | RexCars'
                />
                <meta
                    key={"ogLocale"}
                    name='og:locale'
                    content='pl/PL'
                />
            </Head>

            <header className='flex flex-col md:mt-[4%] md:mb-[2%] my-[10%]'>
                <h1 className='text-neutral-200 md:text-5xl text-3xl text-center font-semibold w-full'>
                    Wynajem {headerData.carMake} <span className='text-blue-primary'>{headerData.carModel}</span>
                </h1>
            </header>

            <main className='flex flex-col md:w-[80%] w-[90%] mx-auto'>
                <article className='flex lg:flex-row flex-col'>
                    <section className='flex lg:basis-9/12 mb-10 md:mb-0 bg-neutral-900 rounded-lg px-2'>
                        <ImagesGallery images={imagesData}/>
                    </section>
                    <PriceChart entries={priceChartData}/>
                </article>

                <CarSpecyficationSection technicalSpec={technicalSpecData}/>

                <CarDescriptionSection header={pageDescriptionPayload.header} bottomContent={pageDescriptionPayload.bottomContent}/>

                <FAQSection entries={faqSectionData}/>
            </main>
        </>
    );
}