function draw(timestamps,values){
  const hours = timestamps.map(timestamps => {
      const date = new Date(timestamps);
      return date.getHours();
  });
  console.log("Hours:", hours);
  
  new Chart("myChart", {
  type: "line",
  data: {
      labels: hours,
      datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(255,61,71,2)",
      borderColor: "rgba(255,61,71,0.5)",
      data: values
      }]
  },
  options: {
      legend: {display: false},
      scales: {
      yAxes: [{ticks: {min: Math.min(...values), max:Math.max(...values)}}],
      }
  }
  });
}
