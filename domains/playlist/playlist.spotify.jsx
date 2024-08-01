// domains/timeline/SpotifyEmbed.jsx
import React from 'react';

const SpotifyEmbed = () => {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: `<iframe style="border-radius:12px; width: 100%; height: 700px" src="https://open.spotify.com/embed/playlist/77HiwJZZpYSmdwmKpru9eT?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
            }}
        />
    );
};

export default SpotifyEmbed;