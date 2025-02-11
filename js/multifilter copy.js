function myFunction() {
  var input = document.getElementById("Search");
  var filter = input.value.toLowerCase();
  var nodes = document.getElementsByClassName('filterDiv');

 for (let i = 0; i < nodes.length; i++) {
  if (nodes[i].innerText.toLowerCase().includes(filter)) {
   nodes[i].style.display = "block";
    } else {
      nodes[i].style.display = "none";
    }
    }
   }

var checkboxes = document.querySelectorAll(".categories input");
for(var i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("change", filter, clearsearch);
}
// var radios = document.getElementsByName("operation");
// for(var i = 0; i < radios.length; i++) {
//  radios[i].addEventListener("change", filter);
// }
clearsearch();
  function clearsearch() {
    document.getElementById('Search').value = "";
  }

filter();
function filter() {
  var i, j;

  // Choose an operation
  // var operation = document.getElementById("op-union").checked ? "union" : "intersection";

  // Get the selected categories
  var checkboxes = document.querySelectorAll(".categories input");
  var categories = [];
  var c;
  for(i = 0; i < checkboxes.length; i++) {
    if(checkboxes[i].checked) {
      c = checkboxes[i].value;
      categories.push(c);
    }
  }

  // Apply the filter
  var items = document.querySelectorAll(".filterDiv");
  var item, show;
  for(i = 0; i < items.length; i++) {
    item = items[i];
    if(categories.length == 0) {
      show = true;
    } else {
      // Intersection: All of the categories must apply
      show = true;
      for(j = 0; j < categories.length; j++) {
        if(!item.classList.contains(categories[j])) {
          show = false;
          break;
        }
      }
    }

    if(show) {
      item.classList.add("show");
    } else {
      item.classList.remove("show");
    }
  }
}

