'client use';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
    TooltipItem,
} from 'chart.js';
import { Line } from 'react-chartjs-2'; //=wrapper of chart.js

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler
);
type LineGraphProps = {
    totalIncome: number[][];
};
export default function LineGraph({ totalIncome }: LineGraphProps) {
    const xAxisLabelType = 'Year';
    const totalIncomePerYear: number[] = (totalIncome || []).map(
        (monthlyValues) => {
            return monthlyValues ? monthlyValues[monthlyValues.length - 1] : 0;
        }
    );
    const xAxisLabelYear = [...totalIncomePerYear.keys()];
    const data = {
        labels: xAxisLabelYear,
        datasets: [
            //TODO: use the colors from the global.css (primary, secondary, etc.)
            {
                // ---- DATA ----
                label: 'Total Income',
                data: totalIncomePerYear,
                fill: true,
                borderColor: 'rgba(155, 193, 255, 0)',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                // ---- POINT CUSTOMISATION ----
                pointRadius: 6,
                pointHoverRadius: 25,
                pointBorderWidth: 4,
                pointBorderColor: 'rgba(73, 140, 255, 0.31)',
                pointBackgroundColor: 'rgba(73, 140, 255, 0.31)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    title: function (context: TooltipItem<'line'>[]) {
                        const title = context[0].label || '';
                        return xAxisLabelType + title;
                    },
                    label: function (context: TooltipItem<'line'>) {
                        const value = context.formattedValue;
                        return 'Total Income : ' + value;
                    },
                },

                // ---- TOOLTIP SIZE
                padding: 16,
                caretSize: 10,
                cornerRadius: 8,
                titleFont: {
                    size: 18,
                },
                titleMarginBottom: 10,
                bodyFont: {
                    size: 20,
                },
                bodySpacing: 8,
                boxWidth: 15,
                boxHeight: 15,
                boxPadding: 5,
            },
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 16,
                    },
                },
                grid: {
                    display: false,
                },
            },
            y: {
                ticks: {
                    font: {
                        size: 16,
                    },
                },
            },
        },
    };

    return <Line data={data} options={options}></Line>;
}
