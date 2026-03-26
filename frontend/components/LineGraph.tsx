'client use';
import { InvestmentResult } from '@/lib/calculators/investmentGrowth';
import useChartColors from '@/lib/utils/useChartColors';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
    TooltipItem,
    ChartOptions,
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
    investmentResults: InvestmentResult[];
};
export default function LineGraph({ investmentResults }: LineGraphProps) {
    const chartColors = useChartColors();
    if (!chartColors) return <div> Loading... </div>;

    const xAxisLabelType = 'Year';
    const yearlyResults: InvestmentResult[] = investmentResults.filter(
        (_, index) => index % 12 === 0 || index == investmentResults.length - 1
    );
    const xAxisLabelYear = [...yearlyResults.keys()];
    const data = {
        labels: xAxisLabelYear,
        datasets: [
            {
                // ---- DATA ----
                label: 'Interest',
                data: yearlyResults.map((value) => value.accInterest),
                fill: true,
                borderColor: chartColors.chart3Line, //getCSSVar('--chart-3-line'),
                backgroundColor: chartColors.chart3Fill, //getCSSVar('--chart-3-fill'),
                stack: 'combined',
                // ---- POINT CUSTOMISATION ----
                pointRadius: 0,
                pointHoverRadius: 0,
            },
            {
                // ---- DATA ----
                label: 'Invested',
                data: yearlyResults.map((value) => value.accInvestment),
                fill: true,
                borderColor: chartColors.chart2Line, //getCSSVar('--chart-2-line'),
                backgroundColor: chartColors.chart2Fill, //getCSSVar('--chart-2-fill'),
                stack: 'combined',
                // ---- POINT CUSTOMISATION ----
                pointRadius: 0,
                pointHoverRadius: 0,
            },
            {
                // ---- DATA ----
                label: 'Total',
                data: yearlyResults.map((value) => value.balance),
                fill: false,
                borderColor: chartColors.chart1Line, //getCSSVar('--chart-1-line'),
                // ---- POINT CUSTOMISATION ----
                pointRadius: 2,
                pointHoverRadius: 10,
                pointBorderWidth: 1,
                pointBorderColor: chartColors.chartPointBorder, //getCSSVar('--chart-point-border'),
                pointBackgroundColor: chartColors.chartPointBackground, //getCSSVar('--chart-point-border'),
            },
        ],
    };

    const options: ChartOptions<'line'> = {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    title: function (context: TooltipItem<'line'>[]) {
                        const title = context[0].label || '';
                        return xAxisLabelType + ' ' + title;
                    },
                    label: function (context: TooltipItem<'line'>) {
                        const label = context.dataset.label;
                        const value = context.formattedValue;

                        return label + ' : ' + value;
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
        interaction: {
            mode: 'index',
            intersect: false,
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
