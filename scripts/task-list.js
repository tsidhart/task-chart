
// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

var tasks = []
var objtask = {}
var jeremyCount = 0, johnCount = 0; jimmyCount = 0;

window.onload = function(){
    // Call this function
    //taskList();
    var form = document.querySelector("form");
    form.onsubmit = listBuilder;
}

// Form submit handler
function listBuilder(){
    event.preventDefault();
    var form = document.querySelector("form");
    var parent = document.getElementById("list-container")
    var ul = document.createElement("ul")
    var li = document.createElement("li")
    li.innerHTML = form.taskdes.value
    ul.appendChild(li)
    parent.appendChild(ul)

    objtask = {
      person: form.handler.value,
      difficulty: form.difficulty.value,
      taskdes: form.taskdes.value
    }
    tasks.push(objtask)
    //tasks.push(form.taskdes.value)
    if (form.handler.value == "Jeremy") {
       jeremyCount = jeremyCount + 1
    }
    if (form.handler.value == "John") {
       johnCount = johnCount + 1
    }
    if (form.handler.value == "Jimmy") {
       jimmyCount = jimmyCount + 1
    }
    drawChart()
}

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Person');
  data.addColumn('number', 'no. of tasks');
  data.addRows([
    ['Jeremy', jeremyCount],
    ['John', johnCount],
    ['Jimmy',jimmyCount]
  ]);

  // Set chart options
  var options = {'title':'Individaul Task ratio',
                    'width':400,
                    'height':300};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
