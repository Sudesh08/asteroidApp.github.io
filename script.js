let myChart;

function calculate(){

let startDate=new Date(document.getElementById("Start-Date").value);
let endDate=new Date(document.getElementById("end-date").value);
let noOfDays = (endDate.getTime()-startDate.getTime())/(1000*3600*24);
// alert(noOfDays);
if(noOfDays>8){
    alert("The difference should not more than 8 days"); 
    document.querySelector(".error").style.display="block";
    // document.querySelector(".error").style.display="none";
}
else{
    document.querySelector(".error").style.display="none";
    document.querySelector(".chart").style.display="block";
const apiUrl="https://api.nasa.gov/neo/rest/v1/feed?start_date=";
// console.log(apiUrl);
const apiId="api_key=AVnUWDkkzPjOyADlbXPrSGUVmpRZ4fryk8R3cbrP";
fetch(apiUrl+startDate.toISOString().split("T")[0]+`&end_date=${endDate.toISOString().split("T")[0]}&${apiId}`)

    .then((getData) => getData.json())
    .then((data) => {
        // console.log(data);
        const dataList = Object.keys(data.near_earth_objects);
        const dateLabels = [];
        // console.log(dataList);
        dataList.forEach(function (date) {
            console.log(date);
            dateLabels.push(date);

        });

        const noOfAsteroid = Object.values(data.near_earth_objects);
        const AsteroidData = [];
        // console.log(noOfAsteroid);
        noOfAsteroid.forEach(function (Asteroid) {
            const AsteroidSize = Asteroid.length;
            console.log(AsteroidSize);
            AsteroidData.push(AsteroidSize)

        });

        // if(myChart != null){
        //     myChart.destroy();
        // }
        var ctx = document.getElementById("myChart").getContext("2d");

        myChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: dateLabels,
                // labels: ["a", "b", "c", "d"],
                datasets: [
                    {
                        lable: "Number of Asteroid",
                        // data: [1, 2, 3, 6],
                        data: AsteroidData,
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
        })
        .catch((error) => console.log("request not found")
        // if(error.value==404){
        //     document.querySelector(".error");
        // }
        );
    }
}

    


function Next(){
    
    if(myChart!=null){
        myChart.destroy();
    }
    // if(noOfDays>7)
    //  {
    //     alert("You cannot enter more than 7 days");
    //   }
    
    calculate();
    
}

//     var startDate=new Date(document.getElementById("Start-Date").value);
//     alert(startDate);
//     var endDate=new Date(document.getElementById("end-date").value);
//     alert(endDate);

// const apiUrl="https://api.nasa.gov/neo/rest/v1/feed?start_date=";
// // console.log(apiUrl);
// const apiId="api_key=AVnUWDkkzPjOyADlbXPrSGUVmpRZ4fryk8R3cbrP";
// fetch(apiUrl+startDate.toISOString().split("T")[0]+`&end_date=${endDate.toISOString().split("T")[0]}&${apiId}`)

//     .then((getData) => getData.json())
//     .then((data) => {
//         // console.log(data);
//         const dataList = Object.keys(data.near_earth_objects);
//         const dateLabels = [];
//         // console.log(dataList);
//         dataList.forEach(function (date) {
//             console.log(date);
//             dateLabels.push(date);

//         });

//         const noOfAsteroid = Object.values(data.near_earth_objects);
//         const AsteroidData = [];
//         // console.log(noOfAsteroid);
//         noOfAsteroid.forEach(function (Asteroid) {
//             const AsteroidSize = Asteroid.length;
//             console.log(AsteroidSize);
//             AsteroidData.push(AsteroidSize)

//         });
       
        
//         myChart=null;
//         if(myChart!=null){
//             myChart.destroy();
//         }
//     })
    
//     .catch((error) => console.log(error));




