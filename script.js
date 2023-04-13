// const myObject = {
//         addDelButton: function(parent) {
//         var buttonElem = parent.appendChild(document.createElement("button"));
//         buttonElem.innerHTML = "Delete";
//         buttonElem.onclick = function() {
//             this.parentElement.remove();
//         }}
// }
// myObject.addDelButton(document.getElementById("el1"));
// myObject.addDelButton(document.getElementById("el2"));
// myObject.addDelButton(document.getElementById("el3"));
// myObject.addDelButton(document.getElementById("el4"));
// let btn = document.getElementById("btn");
// btn.addEventListener("click",function(){
//     btn.parentElement.remove();
// });
function download(file, text) {
        
    //creating an invisible element
    var element = document.createElement('a');
    element.setAttribute('href',
    'data:text/plain;charset=utf-8, '
    + encodeURIComponent(text));
    element.setAttribute('download', file);
    
    // Above code is equivalent to
    // <a href="path of file" download="file name">
    
    document.body.appendChild(element);
    
    //onClick property
    element.click();
    
    document.body.removeChild(element);
}
    
// Start file download.
// document.getElementById("btn")
// .addEventListener("click", function() {
//     // Generate download of hello.txt
//     // file with some content
//     var text = document.getElementById("text").value;
//     var filename = "GFG.txt";
    
//     download(filename, text);
// }, false);
function Delete(element){
    let x = 600;
    setInterval(() => {
        if (x > 0){
            element.style.width = x + 'px';
            x--;
        }
    }, 100)
    element.remove();
}
function Draw(checkboxid, markerid){
    var checkbox = document.getElementById(checkboxid);
    var marker = document.getElementById(markerid);
    var x = 0;
    if (checkbox.checked){
        setInterval(() => {
            if (x < 70)
            {
                x++;
                marker.style.width = x + 'px';
            }
            
        }, 5)
    }
    else{
        let x = 70;
        setInterval(() => {
            if (x > 0)[]
            {
                x--;
                marker.style.width = x + 'px';
            }
            
        }, 5)
    }
    
}
$("#new").keypress(function(event) {
    if (event.keyCode === 13) {
        AddContainer($("#new").value);
    }
});
function AddContainer(value){
    var x = document.createElement("label");
    
}