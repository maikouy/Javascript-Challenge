
// -----------------------------------------------
// ***LEVEL 1: AUTO TABLE AND DATE SEARCH ***
// -----------------------------------------------

//Use D3 to select the table body
var tbody = d3.select("tbody");

// Use D3 to select the table
var table = d3.select("table");

// Use D3 to set the table class to `table table-striped`
table.attr("class", "table table-striped");


//Use data from data.js
var tableData = data;

// Loop Through `data`, and use Object.entries 
    tableData.forEach((ufoSightings) => {
        var row = tbody.append("tr")

        Object.entries(ufoSightings).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

// Process the filter button
var button = d3.select("#filter-btn");
var form = d3.select("#form");

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);
    
// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value")

  console.log(inputValue);
  console.log(tableData)

  var filteredData = tableData.filter(ufoSightings => ufoSightings.datetime === inputValue);

  console.log(filteredData);

  // Clear the current table
  tbody.html("");

  // Make new row/table for the filteredData info
filteredData.forEach(obj => {
  // Append one table row per ufoSightings
  var row = tbody.append("tr");
  
  // Append one cell for the each cateorgory
  row.append("td").text(obj.datetime);
  row.append("td").text(obj.city);
  row.append("td").text(obj.state);
  row.append("td").text(obj.country);
  row.append("td").text(obj.shape);
  row.append("td").text(obj.durationMinutes);
  row.append("td").text(obj.comments);
})
};