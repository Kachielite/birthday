// domains/dress-code/pinterest.embed.jsx
import React, { useEffect } from 'react';

const PinterestEmbed = () => {
    useEffect(() => {
        if (!document.querySelector('script[src="//assets.pinterest.com/js/pinit.js"]')) {
            const script = document.createElement('script');
            script.src = '//assets.pinterest.com/js/pinit.js';
            script.async = true;
            script.defer = true;
            script.onload = () => {
                if (window.PinUtils) {
                    window.PinUtils.build();
                }
            };
            document.head.appendChild(script);
        } else if (window.PinUtils) {
            window.PinUtils.build();
        }
    }, []);

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <a
                data-pin-do="embedBoard"
                data-pin-board-width="100%"
                href="https://www.pinterest.com/dubemobinnaesiowu/dubys-sip-paint-and-worship-outfit-ideas/"
                style={{ display: 'block', width: '100%', height: '100%' }}
            >
                Pinterest Board
            </a>
        </div>
    );
};

export default PinterestEmbed;