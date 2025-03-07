import { useEffect, useState } from 'react';

export default function HomePage() {
    const [timestamp, setTimestamp] = useState(0);
    const [randomNumber, setRandomNumber] = useState(0);

    useEffect(() => {
        setTimestamp(Date.now());
        setRandomNumber(Math.random());
    }, []);

    return (
        <div>
            <h1>Horodatage: {timestamp}</h1>
            <h2>Nombre aléatoire: {randomNumber}</h2>
        </div>
    );
}
