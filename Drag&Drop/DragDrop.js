let leftbox = document.querySelector(".item1");
let rightbox = document.querySelector(".item2");
let lists = document.querySelectorAll(".list");

let selected = null;

// Add dragstart listener to all list items
lists.forEach(list => {
    list.addEventListener("dragstart", function (e) {
        selected = e.target;
        // Ensure the selected element is a valid draggable item
        if (selected && selected.draggable) {
            console.log(selected);
        } else {
            selected = null;
        }
    });
});

// Add dragover and drop listeners to rightbox
rightbox.addEventListener("dragover", function (e) {
    e.preventDefault();
});

rightbox.addEventListener("drop", function (e) {
    e.preventDefault();
    if (selected) {
        rightbox.appendChild(selected);
        selected = null;
    }
});

// Add dragover and drop listeners to leftbox
leftbox.addEventListener("dragover", function (e) {
    e.preventDefault();
});

leftbox.addEventListener("drop", function (e) {
    e.preventDefault();
    if (selected) {
        leftbox.appendChild(selected);
        selected = null;
    }
});
