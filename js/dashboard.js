const ctx = document.getElementById('myChart').getContext('2d');
const barChartCtx = document.getElementById('bar-chart').getContext('2d');
var themeToggleBtn = document.getElementById('theme-toggle');
var sideBarToggle = document.getElementById("sidebar-toggle-button");
var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
var dropdownUser = document.getElementById("dropdown-user-button")



dropdownUser.addEventListener("click", () => {
    document.getElementById("dropdown-user").classList.toggle('hidden')
})

sideBarToggle.addEventListener("click", () => {
    document.getElementById("logo-sidebar").classList.toggle("-translate-x-full");
})


// ApexCharts options and config
window.addEventListener("load", function () {
    const getChartOptions = () => {
        return {
            series: [32.5, 26.8, 15, 25.5],
            colors: ["#1C64F2", "#16BDCA", "#9061F9", "#5dc847"],
            chart: {
                height: 420,
                width: 410,
                type: "pie",
                foreColor: '#16BDCA'
            },
            stroke: {
                colors: ["white"],
                lineCap: "",
            },
            plotOptions: {
                pie: {
                    labels: {
                        show: true,
                    },
                    size: "100%",
                    dataLabels: {
                        offset: -25
                    }
                },
            },
            labels: ["United States", "Saudi Arabia", "Morocco", "Egypt"],
            dataLabels: {
                enabled: true,
                style: {
                    fontFamily: "Inter, sans-serif",
                },
            },
            legend: {
                position: "bottom",
                fontFamily: "Inter, sans-serif",
            },
            yaxis: {
                labels: {
                    formatter: function (value) {
                        return value + "%"
                    },
                },
            },
            xaxis: {
                labels: {
                    formatter: function (value) {
                        return value + "%"
                    },
                },
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
            },
        }
    }

    if (document.getElementById("pie-chart") && typeof ApexCharts !== 'undefined') {
        const chart = new ApexCharts(document.getElementById("pie-chart"), getChartOptions());
        chart.render();
    }
});




const data = {
    labels: ["Jan",
        "Feb",
        "Mar",
        "Apr",
        "may",
        "jun",
        "jul",],
    datasets: [{
        axis: 'x',
        label: 'Design',
        data: [40, 80, 20, 40, 180, 10, 70],
        fill: false,
        backgroundColor: [
            'rgb(255, 99, 132)',
        ], borderColor: [
            'rgb(255, 99, 132)',
        ],
        borderWidth: 2
    },
    {
        axis: 'x',
        label: 'Writing',
        data: [60, 60, 120, 80, 100, 30, 80],
        fill: false,
        backgroundColor: [
            'rgb(255, 205, 86)',
        ], borderColor: [
            'rgb(255, 205, 86)',
        ],
        borderWidth: 2
    },
    {
        axis: 'x',
        label: 'Video editing',
        data: [100, 140, 100, 10, 30, 50, 160],
        fill: false,
        backgroundColor: [
            'rgb(96,60,217)',
        ], borderColor: [
            'rgb(96,60,217)',

        ],
        borderWidth: 2
    },
    {
        axis: 'x',
        label: 'Marketing',
        data: [180, 100, 80, 30, 50, 180, 100],
        fill: false,
        backgroundColor: [
            'rgb(90,192,70)',
        ], borderColor: [
            ' rgb(90,192,70)',
        ],
        borderWidth: 2
    },
    {
        axis: 'x',
        label: 'Marketing',
        data: [10, 50, 20, 150, 30, 140, 60],
        fill: false,
        backgroundColor: [
            'rgb(231,164,250)',
        ], borderColor: [
            'rgb(231,164,250)',
        ],
        borderWidth: 2
    }

    ]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'x',
        scales: {
            x: {
                beginAtZero: true
            }
        }
    }
};

new Chart(ctx, config);

const Bardata = {
    labels: [
        "Egypt",
        "Nepal",
        "Togo",
        "India",
        "Morocco",
        "China",
        "Poland",],
    datasets: [{
        label: 'Income By Country ',
        data: [40, 60, 60, 140, 30, 80, 30, 200],
        fill: false,
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
        ], borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
        ],
        borderWidth: 2
    }
    ]
};
;
const Barconfig = {
    type: 'bar',
    data: Bardata,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'x',
        scales: {
            x: {
                beginAtZero: true
            }
        }
    },
};

new Chart(barChartCtx, Barconfig);



