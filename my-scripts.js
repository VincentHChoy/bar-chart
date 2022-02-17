var data = [0, 1, 2, 3, 4]

$(document).ready(function () {
  $("button").click(function () {
    $("p").css("background-color", "yellow");
  });

 var scaledData = function barPercent(data) {
    var newArray = [];
    var dataLength = data.length;
    data.forEach(element => {
      newArray.push(element / dataLength)

    }); return newArray
  }

  function dataBarChart(scaledData, options, element) {
  
  };
  dataBarChart(scaledData,'dog','cat')
});

console.log('dog')