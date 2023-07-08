// Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);

// Get the value for dropdown1 parameter
const noOfPanelsValue = urlParams.get('noOfPanels');

// Get the value for dropdown2 parameter
const fixedPartitionValue = urlParams.get('fixedPartition');

// Get the value for dropdown3 parameter
const bathWindowTypeValue = urlParams.get('bathWindowType');



// Set the values of the dropdown boxes if the parameters are present
if (noOfPanelsValue) {
  document.getElementById('noOfPanels').value = noOfPanelsValue;
}

if (fixedPartitionValue) {
  document.getElementById('fixedPartition').value = fixedPartitionValue;
}

if (bathWindowTypeValue) {
  document.getElementById('bathWindowType').value = bathWindowTypeValue;
}