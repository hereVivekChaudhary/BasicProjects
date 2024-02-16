
function addItem() {
  var input = document.getElementById("todoInput");
  var value = input.value.trim();

  if (value !== "") {
    var list = document.getElementById("todoList");
    var listItem = document.createElement("li");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function() {
      if (this.checked) {
        listItem.classList.add("checked");
        list.appendChild(listItem);
      } else {
        listItem.classList.remove("checked");
      }
    };
    listItem.appendChild(checkbox);

    var textNode = document.createTextNode(value);
    listItem.appendChild(textNode);

    var upButton = document.createElement("span");
    upButton.className = "move up";
    upButton.appendChild(document.createTextNode("⬆️"));
    upButton.onclick = function() {
      var prevItem = listItem.previousElementSibling;
      if (prevItem !== null) {
        list.insertBefore(listItem, prevItem);
      }
      updateButtons();
    };
    listItem.appendChild(upButton);


    var deleteButton = document.createElement("span");
    deleteButton.className = "delete";
    deleteButton.appendChild(document.createTextNode("🗑")); 
    deleteButton.onclick = function() {
      list.removeChild(listItem);
      updateButtons();
    };
    listItem.appendChild(deleteButton);

   

    var downButton = document.createElement("span");
    downButton.className = "move down";
    downButton.appendChild(document.createTextNode("⬇️"));
    downButton.onclick = function() {
      var nextItem = listItem.nextElementSibling;
      if (nextItem !== null) {
        list.insertBefore(nextItem, listItem);
      }
      updateButtons();
    };
    listItem.appendChild(downButton);

    list.appendChild(listItem);
    input.value = "";

    updateButtons();
  }
}

function updateButtons() {
  var list = document.getElementById("todoList");
  var items = list.getElementsByTagName("li");

  for (var i = 0; i < items.length; i++) {
    var upButton = items[i].querySelector(".up");
    var downButton = items[i].querySelector(".down");

    if (items.length === 1) {
      upButton.style.visibility = "hidden";
      downButton.style.visibility = "hidden";
    } else {
      upButton.style.visibility = "visible";
      downButton.style.visibility = "visible";

      if (i === 0) {
        upButton.disabled = true;
        downButton.disabled = false;
      } else if (i === items.length - 1) {
        upButton.disabled = false;
        downButton.disabled = true;
      } else {
        upButton.disabled = false;
        downButton.disabled = false;
      }
    }
  }
}

  

 