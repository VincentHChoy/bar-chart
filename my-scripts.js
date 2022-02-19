var inputData = [0, 10, 1, 3]

$(document).ready(function () {
  /*$("button").click(function () {
    $("p").css("background-color", "yellow");
  });*/


  sumArray = function(data){
    var sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i];
    } return sum
  }


  scaledArray = function barPercent(data) {
    var newArray = [];
    var dataLength = data.length;
    data.forEach(element => {
      newArray.push((element / sumArray(data)) * 100)

    }); return newArray
  }
function barTitles(inputData){
  for (let i = 0; i < inputData.length; i++) {
    console.log("td#item"+(i+1))
    let element = $("td#item"+(i+1))                     //finds the element with the id
    let textToReplace = element.text()              //selects the text of the element
    let newText = textToReplace.replace("0",inputData[i])  // choose what to replace the text with
    element.text(newText);
    
  }
}
barTitles(inputData)


  function dataBarChart(scaledData/*, options, element*/) {
    for (let i = 0; i < scaledData.length; i++) {
      console.log(i + 1)
      $(".item" + (i + 1) + "").css({ "background-color": "blue", "height": "" + scaledData[i] + "%" });


    }
  };
  dataBarChart(scaledArray(inputData))
});
