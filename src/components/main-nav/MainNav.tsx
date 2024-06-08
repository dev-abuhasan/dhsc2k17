'use client'
import { useRef, useEffect, useContext } from 'react';
import Link from 'next/link';
import { GlobalContext } from '@/services/contexts/global-context';
import { localStoreName } from '@/services/utils/const/config';
import { usePathname, useRouter } from 'next/navigation';

const MainNav = () => {
    const location = useRouter();
    const pathname = usePathname();
    const { setScrollTrue } = useContext(GlobalContext);


    useEffect(() => {
        const scrollingChange = () => {
            const header = document.querySelector('.main-header');
            window.addEventListener('scroll', () => {
                const scrollPos = window.scrollY;
                if (scrollPos > 10) {
                    header?.classList.add('scrolled');
                } else {
                    header?.classList.remove('scrolled');
                }
            });
        };

        window.onscroll = () => {
            scrollingChange();
            if (window.scrollY > 10) {
                return setScrollTrue(true);
            }
            return setScrollTrue(false);
        };
    }, [setScrollTrue]);

    const myRef = useRef(null);
    useEffect(() => {
        const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop);
        const executeScroll = () => scrollToRef(myRef);
        if (pathname === '/home') {
            executeScroll();
        } else if (pathname === '/about') {
            executeScroll();
        }
    }, [pathname]);

    // const user = localStorage.getItem(localStoreName);

    const handleLogout = () => {
        localStorage.removeItem(localStoreName);
        window.location.reload();
    }

    return (
        <div className="main-header px-1" ref={myRef}>
            <div className="container mx-auto d-flex align-items-center justify-content-between nav_bg_parent">
                <div className="logo" id="header_logo">
                    <Link href="/" legacyBehavior>
                        <h4 className="d-flex align-items-center m-0">
                            DHSC🎓2k17
                        </h4>
                    </Link>
                </div>

                <input type="checkbox" className="menu-btn" id="menu-btn" />
                <label htmlFor="menu-btn" className="menu-icon">
                    <span className="menu-icon__line p"></span>
                </label>
                <ul className="nav-links m-0 d-flex align-items-center">
                    <li className="nav-link">
                        <Link href="/" legacyBehavior>
                            <a className={`${pathname === '/' ? 'activeRoute' : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <polyline points="5 12 3 12 12 3 21 12 19 12"></polyline>
                                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                                    <rect x="10" y="12" width="4" height="4"></rect>
                                </svg> Home
                            </a>
                        </Link>
                    </li>
                    <li className="nav-link">
                        <a href={`/contact-us`} className={`${pathname === '/contact-us' ? 'activeRoute' : ''}`}>
                            Contact Us
                        </a>
                    </li>
                    {/* <li className={`nav-link  ${user ? 'd-block' : 'd-none'}`}>
                        <Link href="/admin/dashboard" legacyBehavior>
                            <a className={`${pathname === '/about' ? 'activeRoute' : ''}`}>
                                Admin
                            </a>
                        </Link>
                    </li>
                    <button onClick={handleLogout} className={`btn btn-primary w-auto  ${user ? 'd-block' : 'd-none'}`} >
                        Logout&nbsp;
                        <img src="https://i.ibb.co/2hcLX81/user.png" alt="" width={30} />
                    </button> */}
                </ul>
            </div >
        </div>
    );
};

export default MainNav;
