var ctx = document.getElementById("myChart").getContext("2d");

myChart = new Chart(ctx, {
    type: "bar",
    data: {
        // labels: dateLabels,
        labels: ["a", "b", "c", "d"],
        datasets: [
            {
                label: "Number of Asteroid",
                fontSize: 60,
                data: [1, 2, 3, 6],
                // data: AsteroidData,
                backgroundColor: "#292756",
                borderWidth: 3,
                // borderColor: "#96b3d3",
                hoverBorderColor: "black"
            },

        ],
    },
    options: {
        responsive: true,
        legend:{
            labels:{
                fontColor:"black",
            }
        }
    }
});