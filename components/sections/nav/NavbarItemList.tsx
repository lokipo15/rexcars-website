'use client';

import { useIsElementOutOfView } from "@/context/IsElementOutOfViewContext";
import { useState, useEffect } from "react";
import NavbarItem from "./NavbarItem";
import NavbarDivider from "./NavbarDivider";
import OutlineButton from "@/components/ui/OutlineButton";
import { usePathname } from "next/navigation";

export default function NavbarItemList() {
    const pathname = usePathname();
    const [currentPathname, setCurrentPathname] = useState(pathname);
    useEffect(() => {
        setCurrentPathname(pathname);
    }, [pathname]);

    const DIVIDER_MARGIN = 'mx-3';
    const { isElementOutOfView } = useIsElementOutOfView();
    
    return (
        <ul className='flex flex-row items-center text-blue-500 py-2 transition-all ease-in-out duration-400'>
            <NavbarItem
                value='Strona Główna'
                url='/'
                active={currentPathname === "/"}
            />
            <NavbarDivider margin={DIVIDER_MARGIN} />
            <NavbarItem
                value='Samochody'
                url='/oferta'
                active={currentPathname === "/oferta"}
            />
            <NavbarDivider margin={DIVIDER_MARGIN} />
            <NavbarItem
                value='Voucher'
                url='/voucher'
                active={currentPathname === "/voucher"}
            />
            <NavbarDivider margin={DIVIDER_MARGIN} />
            <NavbarItem
                value='FAQ'
                url='/faq'
                active={currentPathname === "/faq"}
            />
            <NavbarDivider margin={DIVIDER_MARGIN} />
            <NavbarItem
                value='Kontakt'
                url='/kontakt'
                active={currentPathname === "/kontakt"}
                styles={(isElementOutOfView === true || currentPathname !== "/")? "mr-6" : ""}
            />
            {(isElementOutOfView || currentPathname !== "/") && (
                <li>
                    <OutlineButton
                        value='Zarezerwuj'
                        href='/zarezerwuj'
                        styles='py-1 mb-1 px-6 transition-opacity duration-400 ease-in-out opacity-100 animate-fadeIn'
                    />
                </li>
            )}
        </ul>
    );
}