function eliminateDuplicateCharacters() {
    var inputValue = document.getElementById("inputValues").value;
    var sortedValues = inputValue.split(",").sort();
    var duplicates = [];
    var nonDuplicates = [];
    var iterator = 0;
    alert(sortedValues);
    for (var i = 0; i < sortedValues.length - 1; i++) {
        if ((sortedValues[i + 1] == sortedValues[i])) {
            if (i === 0) {
                duplicates.push(sortedValues[i]);
            }
            else if (duplicates.indexOf(sortedValues[i]) < 0) {
                duplicates.push(sortedValues[i]);
            }
        }
        else {
            if (i === 0) {
                nonDuplicates.push(sortedValues[i]);
            }
            else if ((nonDuplicates.indexOf(sortedValues[i]) < 0)&&(duplicates.indexOf(sortedValues[i]<0))) {
                nonDuplicates.push(sortedValues[i+1]);
            }
        }
    }
    alert(duplicates);
    alert(nonDuplicates);
    document.getElementById("displayResult").value = duplicates;
}
function callClearTheText() {
    document.getElementById("inputValues").value = "";
}
