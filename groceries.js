var myList = [];

function saveList()
{
  var listString = myList.toString();
  console.log(listString);
  setCookie("list", listString, 1);
}

function clearList()
{
  document.getElementById("listDisplay").innerHTML = "";
  myList = [];
  console.log(myList);
  var check = getCookie("list");
  console.log(check);
}

function removeParentListItem()
{
  var mom = this.parentNode;
  var grandma = mom.parentNode;
  var itemRemove = mom.firstChild.textContent;
  var itemIndex = myList.indexOf(itemRemove);
  myList.splice(itemIndex,1);
  console.log(myList);
  grandma.removeChild(mom);
}

function addItem()
{
  var input = document.getElementById("newItem").value;
  if(myList.indexOf(input) == -1)
  {
    myList.push(input);
    console.log(myList);
  }
  var list = document.getElementById("listDisplay");
  var item = document.createElement("li");
  var itemName = document.createTextNode(input);
  var btnClose = document.createElement("button");
  btnClose.addEventListener("click", removeParentListItem);
  btnClose.classList.add("btn");
  btnClose.classList.add("btn-danger");
  btnClose.classList.add("btn-xs");
  var iconClose = document.createElement("span");
  iconClose.classList.add("glyphicon");
  iconClose.classList.add("glyphicon-remove");
  btnClose.appendChild(iconClose);

  item.appendChild(btnClose);
  item.appendChild(itemName);
  list.appendChild(item);
  document.getElementById("newItem").value = "";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
