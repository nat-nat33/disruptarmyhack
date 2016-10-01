const CHART = document.getElementById("myChart");
console.log('CHART', CHART);

let myChart = new Chart(CHART, {
    data: {datasets: [{
            data: [
                11,
                16,
                7,
                3,
                14,
                6,
                20
            ],
            backgroundColor: [
                "#FF6384",
                "#4BC0C0",
                "#FFCE56",
                "#E7E9ED",
                "#36A2EB",
                "#FFB05C",
                "#CCDE44"
            ]
        }],
        labels: [
            "Nato",
            "Allies",
            "Army",
            "Officials",
            "Supporters",
            "Joint",
            "Staff"
        ]
      },
    type: "polarArea",
    options: {
        elements: {
            arc: {
                borderColor: "#000000"
            }
        },
        title: {
            display: true,
            text: 'General'
        }
    }
});