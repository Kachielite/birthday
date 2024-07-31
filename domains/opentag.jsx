import React from "react";
import logo from "@/public/assets/icons/brand.png";
import duby from "@/public/assets/images/duby.jpeg";

const OpenGraphTag = () => {

    return (
        <>
            <link
                rel="icon"
                href={logo}
            />
            <meta property="og:locale" content="en_US" />
            <meta name="theme-color" content="#202020" />
            <link
                rel="shortcut icon"
                type="image/ico"
                href={logo}
            />
            <link
                rel="apple-touch-icon"
                href={logo}
            />
            <link
                rel="icon"
                href={logo}
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
                content={duby.src}
            />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://duby-invite.vercel.app/" />
            <meta property="twitter:title" content="Duby's Birthday" />
            <meta
                property="twitter:description"
                content="Join us in celebrating Duby's birthday! Come and be part of a joyous occasion filled with laughter, love, and memorable moments." />
            <meta
                property="twitter:image"
                content={duby.src}
            />
        </>
    );
};

export default OpenGraphTag;