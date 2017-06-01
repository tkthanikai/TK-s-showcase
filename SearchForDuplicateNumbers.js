function eliminateDuplicateNumbers() {
    var inputValue = document.getElementById("inputValues").value;
    var inputArr = inputValue.split(",");
    function sortNumber(a, b) {
        return a - b;
    }
    var sorted_arr = inputArr.sort(sortNumber);
    var results = [];
    var nonDuplicates = [];
    var iterator = 0;
    for (var i = 0; i < inputArr.length - 1; i++) {
        if (sorted_arr[i + 1] == sorted_arr[i]) {
            results.push(sorted_arr[i]);
        }
    }
    document.getElementById("displayResult").value=results;
}
function callClearTheText() {
    document.getElementById("inputValues").value="";
}
