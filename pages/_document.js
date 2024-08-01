// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <script async defer src="//assets.pinterest.com/js/pinit.js"></script>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}