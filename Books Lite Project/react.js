var popoverlay = document.querySelector(".pop-overlay")
var box = document.querySelector(".box")
var btn = document.getElementById("add-pop")
var cancel = document.querySelector(".cancel-book")

btn.addEventListener("click",function(){    // to add a book
    popoverlay.style.display="block"
    box.style.display="block"
})
cancel.addEventListener("click",function(){  // to cancel the process
    popoverlay.style.display="none"
    box.style.display="none"
})
book = document.querySelector(".book")
add = document.getElementById("add-book")
bookinput = document.getElementById("book-input")
authorinput = document.getElementById("author-input")
notesinput = document.getElementById("notes-input")

add.addEventListener("click",function(){
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${bookinput.value}</h2>
    <h5>${authorinput.value}</h5>
    <p>${notesinput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    book.append(div)
    popoverlay.style.display="none"
    box.style.display="none"
})
function deletebook(event)
{
    event.target.parentElement.remove()
}

// just a scartch project make it better for resume...