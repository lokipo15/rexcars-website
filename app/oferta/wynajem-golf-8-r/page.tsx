import Head from 'next/head';

export default function PageGolf8R() {
    return (
        <>
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

            <header className='flex flex-col md:my-[5%] my-[10%]'>
                <h1 className='text-neutral-200 md:text-5xl text-3xl text-center font-semibold'>
                    Wynajem <span className='text-neutral-400'>Volkswagen</span>{' '}
                    Golf <span className='text-blue-secondary'>8R</span>
                </h1>
            </header>

            <main>

            </main>
        </>
    );
}
