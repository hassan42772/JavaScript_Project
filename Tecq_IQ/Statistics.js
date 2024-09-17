let nitro_Jan = 0;
let nitro_Feb = 100;
let nitro_Mar = 24;
let nitro_Apr = 250;
let nitro_May = 0;
let nitro_Jun = 100;
let nitro_Jul = 24;
let nitro_Aug = 250;
let nitro_Sep = 0;
let nitro_Oct = 100;
let nitro_Nov = 24;
let nitro_Dec = 250;

let Phos_Jan = 10;
let Phos_Feb = 120;
let Phos_Mar = 243;
let Phos_Apr = 230;
let Phos_May = 34;
let Phos_Jun = 150;
let Phos_Jul = 245;
let Phos_Aug = 240;
let Phos_Sep = 6;
let Phos_Oct = 105;
let Phos_Nov = 244;
let Phos_Dec = 256;

let Potas_Jan = 4;
let Potas_Feb = 140;
let Potas_Mar = 243;
let Potas_Apr = 240;
let Potas_May = 77;
let Potas_Jun = 145;
let Potas_Jul = 244;
let Potas_Aug = 76;
let Potas_Sep = 56;
let Potas_Oct = 150;
let Potas_Nov = 86;
let Potas_Dec = 256;

const mainChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Nitrogen',
        data: [nitro_Jan, nitro_Feb, nitro_Mar, nitro_Apr, nitro_May, nitro_Jun, nitro_Jul, nitro_Aug, nitro_Sep, nitro_Oct, nitro_Nov, nitro_Dec],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }, {
        label: 'Phosphorus',
        data: [Phos_Jan, Phos_Feb, Phos_Mar, Phos_Apr, Phos_May, Phos_Jun, Phos_Jul, Phos_Aug, Phos_Sep, Phos_Oct, Phos_Nov, Phos_Dec],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
    }, {
        label: 'Potassium',
        data: [Potas_Jan, Potas_Feb, Potas_Mar, Potas_Apr, Potas_May, Potas_Jun, Potas_Jul, Potas_Aug, Potas_Sep, Potas_Oct, Potas_Nov, Potas_Dec],
        fill: false,
        borderColor: 'rgb(54, 162, 235)',
        tension: 0.1
    }]
};

const mainChartConfig = {
    type: 'line', // Assuming a line chart for example
    data: mainChartData, // Your chart data
    options: {
        scales: {
            x: { // For the x-axis
                grid: {
                    display: false // Disable grid lines
                }
            },
            y: { // For the y-axis
                grid: {
                    display: false // Disable grid lines
                }
            }
        },
        plugins: {
            legend: {
                display: true // Optional: Adjust legend display as needed
            }
        }
    }
};

const mainChart = new Chart(
    document.getElementById('mainChartCanvas').getContext('2d'),
    mainChartConfig
);


// Scripts for smaller charts
let moisture_Jan = 0;
let moisture_Feb = 100;
let moisture_Mar = 24;
let moisture_Apr = 250;
let moisture_May = 0;
let moisture_Jun = 100;
let moisture_Jul = 24;
let moisture_Aug = 250;
let moisture_Sep = 0;
let moisture_Oct = 100;
let moisture_Nov = 24;
let moisture_Dec = 250;

const moistureChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Moisture Levels',
        data: [moisture_Jan, moisture_Feb, moisture_Mar, moisture_Apr, moisture_May, moisture_Jun, moisture_Jul, moisture_Aug, moisture_Sep, moisture_Oct, moisture_Nov, moisture_Dec],
        fill: false,
        borderColor: 'orange',
        tension: 0.3
    }]
};

const moistureChartConfig = {
    type: 'line',
    data: moistureChartData,
    options: {
        scales: {
            x: { // For the x-axis
                grid: {
                    display: false // Disable grid lines
                }
            },
            y: { // For the y-axis
                grid: {
                    display: false // Disable grid lines
                }
            }
        },
        plugins: {
            legend: {
                display: true // Optional: Adjust legend display as needed
            }
        }
    }
};

let Temp_Jan = 0;
let Temp_Feb = 100;
let Temp_Mar = 24;
let Temp_Apr = 250;
let Temp_May = 0;
let Temp_Jun = 100;
let Temp_Jul = 24;
let Temp_Aug = 250;
let Temp_Sep = 0;
let Temp_Oct = 100;
let Temp_Nov = 24;
let Temp_Dec = 250;

const soilTemperatureChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Soil Temperature',
        data: [Temp_Jan, Temp_Feb, Temp_Mar, Temp_Apr, Temp_May, Temp_Jun, Temp_Jul, Temp_Aug, Temp_Sep, Temp_Oct, Temp_Nov, Temp_Dec],
        fill: false,
        borderColor: 'blue',
        tension: 0.3
    }]
};

const soilTemperatureChartConfig = {
    type: 'line',
    data: soilTemperatureChartData,
    options: {
        scales: {
            x: { // For the x-axis
                grid: {
                    display: false // Disable grid lines
                }
            },
            y: { // For the y-axis
                grid: {
                    display: false // Disable grid lines
                }
            }
        },
        plugins: {
            legend: {
                display: true // Optional: Adjust legend display as needed
            }
        }
    }
};

let PH_Jan = 0;
let PH_Feb = 100;
let PH_Mar = 24;
let PH_Apr = 250;
let PH_May = 0;
let PH_Jun = 100;
let PH_Jul = 24;
let PH_Aug = 250;
let PH_Sep = 0;
let PH_Oct = 100;
let PH_Nov = 24;
let PH_Dec = 250;

const pHChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'pH Values',
        data: [PH_Jan, PH_Feb, PH_Mar, PH_Apr, PH_May, PH_Jun, PH_Jul, PH_Aug, PH_Sep, PH_Oct, PH_Nov, PH_Dec],
        fill: false,
        borderColor: 'green',
        tension: 0.3
    }]
};

const pHChartConfig = {
    type: 'line',
    data: pHChartData,
    options: {
        scales: {
            x: { // For the x-axis
                grid: {
                    display: false // Disable grid lines
                }
            },
            y: { // For the y-axis
                grid: {
                    display: false // Disable grid lines
                }
            }
        },
        plugins: {
            legend: {
                display: true // Optional: Adjust legend display as needed
            }
        }
    }
};

// Initialize all charts
const moistureChart = new Chart(document.getElementById('moistureChartCanvas').getContext('2d'), moistureChartConfig);
const soilTemperatureChart = new Chart(document.getElementById('temperatureChartCanvas').getContext('2d'), soilTemperatureChartConfig);
const pHChart = new Chart(document.getElementById('phChartCanvas').getContext('2d'), pHChartConfig);

// side bar
function showSidebar() {
    document.querySelector('#sidebar').style.display =
        (document.querySelector('#sidebar').style.display == 'none') ? 'block' : 'none';

}

// 
