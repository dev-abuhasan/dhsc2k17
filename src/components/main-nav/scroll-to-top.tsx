'use client';
import React from 'react';
import { GlobalContext } from '@/services/contexts/global-context';
import { arrow_top_v1 } from '@/services/utils/icons/svg';

const ScrollToTop = () => {
    const { scrollTrue } = React.useContext(GlobalContext);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`scrollToTop ${scrollTrue ? 'd-block' : 'd-none'}`}>
            <button
                className="scrollUp"
                onClick={handleScrollToTop}
            >
                {arrow_top_v1}
            </button>
        </div>
    )
}

export default ScrollToTop;
