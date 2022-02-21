var inputData = [45, 10, 1, 3, 6, 7,15]

$(document).ready(function () {
  /*$("button").click(function () {
    $("p").css("background-color", "yellow");
  });*/


  sumArray = function (data) {
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

  // changes the text of the bars to the corresponding value
  function barTitles(inputData) {
    for (let i = 0; i < inputData.length; i++) {
      console.log(inputData[i])
      let element = $("td#item" + (i + 1))                      //finds the element with the id
      let textToReplace = element.text()                       //selects the text of the element
      let newText = textToReplace.replace("0", inputData[i])  // choose what to replace the text with
      element.text(newText);

    }
  }

  // adds based on the number of bars
  function addNewBars(number) {
    for (let i = 1; i <= number; i++) {
      console.log(i)
      $("#bars").append("<tr class=\"border item" + (i) + "\"></tr>");
      $(".item" + i).append("<td id=\"item" + (i) + "\">" + 0 + "</td>");
      $("#item" + i).append("</tr>");

    }
  }


  function dataBarChart(scaledData/*, options, element*/) {
    addNewBars(scaledData.length)
    for (let i = 0; i < scaledData.length; i++) {
      $(".item" + (i + 1) + "").css({ "background-color": "blue", "height": "" + scaledData[i] + "%" });

    }
  };
  dataBarChart(scaledArray(inputData))
  barTitles(inputData)
});
