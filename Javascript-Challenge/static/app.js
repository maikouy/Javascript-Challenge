
// -----------------------------------------------
// ***LEVEL 1: AUTO TABLE AND DATE SEARCH ***
// -----------------------------------------------

//Get a reference to the table body
var tbody = d3.select("tbody");

//Use data from data.js
var tableData = data;


// Loop Through `data`, and use Object.entries 
    data.forEach((ufoSightings) => {
        var row = tbody.append("tr");
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
//Select the input element and get the raw HTML node
  var inputDate = d3.select("#datetime");
// Get the value property of the input element
  var inputDateValue = inputDate.property("value");

var filteredData = tableData.filter(ufoSightings => ufoSightings.datetime === inputDateValue);