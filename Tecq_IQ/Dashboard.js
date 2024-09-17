//! Purpose: To display the current time and date on the page
function updateTime() {
    var now = new Date();
    var hour = now.getHours();

    var dateTimeString = now.toDateString() + ' ' + now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

    document.querySelector('.time').textContent = dateTimeString;
    var greeting = hour < 12 ? 'Good Morning' : 'Good Evening';
    document.querySelector('.evening').textContent = greeting;
}
updateTime();
setInterval(updateTime, 1000);

// 

function handleDirectAccess() {
    if (sessionStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "sign_up_form.html";
    }
    // Set a flag indicating the page was loaded following a successful login
    sessionStorage.setItem("directAccess", "true");
}

window.onload = handleDirectAccess;

window.onbeforeunload = function() {
    // Clear direct access flag when navigating away
    sessionStorage.removeItem("directAccess");
};

//! PIE CHART
window.onload = function () {
    var connected = 1727161;
    var alert = 4303364;
    var offline = 1717786;

    var chart = new CanvasJS.Chart("chartContainer",
        {
            title: {
                text: "Device Status",
                fontSize: 10,
                horizontalAlign: "left",
                padding: {
                    bottom: 10,
                    left: 20
                }
            },
            legend: {
                maxWidth: 350,
                itemWidth: 120
            },
            data: [
                {
                    type: "pie",
                    showInLegend: true,
                    legendText: "{indexLabel}",
                    dataPoints: [
                        { y: connected, indexLabel: "Connected" },
                        { y: alert, indexLabel: "Alert" },
                        { y: offline, indexLabel: "Offline" }
                    ]
                }
            ]
        });
    chart.render();
}
//! sidebar
function showSidebar() {
    document.querySelector('#sidebar').style.display =
        (document.querySelector('#sidebar').style.display == 'none') ? 'block' : 'none';

}



//! Line Chart

var ctx = document.getElementById('myLineChart').getContext('2d');
var farm1Value = 1000;
var farm2Value = 2000;
var farm3Value = 3000;
var farm4Value = 4000;
var farm5Value = 5000;

function updateChart() {
    var data = {
        labels: ['farm1', 'farm2', 'Farm3', 'Farm4', 'Farm5'],
        datasets: [{
            label: 'Data Collected',
            backgroundColor: '#21CBE2',
            borderColor: '#21CBE2',
            data: [farm1Value, farm2Value, farm3Value, farm4Value, farm5Value],
        }]
    };


    myLineChart.data = data;
    myLineChart.update();
}

var options = {
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
    
};

var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {},
    options: options
});

updateChart();



// heat map

