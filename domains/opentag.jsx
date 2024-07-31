import React from "react";


const OpenGraphTag = () => {
        const logoUrl = "https://duby-invite.vercel.app/assets/icons/brand.png"; // Replace with your actual URL
        const dubyUrl = "https://duby-invite.vercel.app/assets/images/duby.jpeg"; // Replace with your actual URL

    return (
        <>
            <link
                rel="icon"
                href={logoUrl}
            />
            <meta property="og:locale" content="en_US" />
            <meta name="theme-color" content="#202020" />
            <link
                rel="shortcut icon"
                type="image/ico"
                href={logoUrl}
            />
            <link
                rel="apple-touch-icon"
                href={logoUrl}
            />
            <link
                rel="icon"
                href={logoUrl}
            />
            <meta
                httpEquiv="Content-Security-Policy"
                content="upgrade-insecure-requests"
            />
            <meta name="title" content="Duby's Birthday" />
            <meta name="description"
                  content="Join us in celebrating Duby's birthday! Come and be part of a joyous occasion filled with laughter, love, and memorable moments." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://duby-invite.vercel.app/" />
            <meta property="og:title" content="Duby's Birthday" />
            <meta
                property="og:description"
                content="Join us in celebrating Duby's birthday! Come and be part of a joyous occasion filled with laughter, love, and memorable moments." />
            <meta
                property="og:image"
                content={dubyUrl}
            />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://duby-invite.vercel.app/" />
            <meta property="twitter:title" content="Duby's Birthday" />
            <meta
                property="twitter:description"
                content="Join us in celebrating Duby's birthday! Come and be part of a joyous occasion filled with laughter, love, and memorable moments." />
            <meta
                property="twitter:image"
                content={dubyUrl}
            />
        </>
    );
};

export default OpenGraphTag;