'use client';

import { useEffect, useState } from 'react';
import { getCSSVar } from './getCSSVar';

export type ChartColors = {
    chart1Line?: string;
    chart1Fill?: string;
    chart2Line?: string;
    chart2Fill?: string;
    chart3Line?: string;
    chart3Fill?: string;
    chartPointBorder?: string;
    chartPointBackground?: string;
};

export default function useChartColors(): ChartColors | null {
    const [colors, setColors] = useState<ChartColors | null>(null);

    useEffect(() => {
        setColors({
            chart1Line: getCSSVar('--chart-1-line'),
            chart1Fill: getCSSVar('--chart-1-fill'),
            chart2Line: getCSSVar('--chart-2-line'),
            chart2Fill: getCSSVar('--chart-2-fill'),
            chart3Line: getCSSVar('--chart-3-line'),
            chart3Fill: getCSSVar('--chart-3-fill'),
            chartPointBorder: getCSSVar('--chart-point-border'),
            chartPointBackground: getCSSVar('--chart-point-background'),
        });
    }, []);

    return colors;
}
