
import React from 'react';

const punks = Array.from({ length: 30 }, (_, i) => `/bros/${i + 1}.png`);

export default function PunkGallery() {
    const doubledPunks = [...punks, ...punks, ...punks, ...punks]; // To make the marquee seamless and long

    return (
        <div className="w-full my-8" style={{ marginTop: '-25px' }}>
            <div className="punk-marquee-container">
                <div className="punk-marquee">
                    {doubledPunks.map((punk, index) => (
                        <img key={index} src={punk} alt={`Zer0 Punk Sample`} className="pixelated" />
                    ))}
                </div>
            </div>
        </div>
    );
}
