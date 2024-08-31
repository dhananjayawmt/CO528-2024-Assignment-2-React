import React, { useState } from 'react';
import './styles.css';

const AngleSelector = () => {
    const [angle, setAngle] = useState(0);

    const updateValue = (value) => {
        const clampedValue = Math.max(0, Math.min(360, value));
        setAngle(clampedValue);
    };

    return (
        <div className="container">
            <h1>Angle Selector</h1>
            <input
                type="number"
                value={angle}
                min="0"
                max="360"
                onChange={(e) => updateValue(Number(e.target.value))}
            />
            <input
                type="range"
                min="0"
                max="360"
                value={angle}
                onChange={(e) => updateValue(Number(e.target.value))}
                className="range-slider"
            />
            <div className="radio-buttons">
                {[0, 45, 60, 90, 180].map((val) => (
                    <label key={val}>
                        <input
                            type="radio"
                            name="angles"
                            value={val}
                            checked={angle === val}
                            onChange={() => updateValue(val)}
                        />{' '}
                        {val}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default AngleSelector;
