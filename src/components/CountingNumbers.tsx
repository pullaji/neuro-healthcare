import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useSpring, animate } from "framer-motion";

interface CountingNumbersProps {
    from: number;
    to: number;
    duration?: number;
    suffix?: string;
    decimalPlaces?: number;
}

const CountingNumbers: React.FC<CountingNumbersProps> = ({
    from,
    to,
    duration = 2,
    suffix = '',
    decimalPlaces = 0,
}) => {
    const ref = React.useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const [displayValue, setDisplayValue] = useState(from);

    useEffect(() => {
        if (isInView) {
            const controls = animate(from, to, {
                duration: duration,
                onUpdate: (value) => {
                    setDisplayValue(parseFloat(value.toFixed(decimalPlaces)));
                },
            });
            return () => controls.stop();
        }
    }, [from, to, duration, isInView, decimalPlaces]);

    return (
        <span ref={ref}>
            {displayValue.toLocaleString(undefined, { minimumFractionDigits: decimalPlaces, maximumFractionDigits: decimalPlaces })}{suffix}
        </span>
    );
};

export default CountingNumbers; 