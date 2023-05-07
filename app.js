var userInp = document.querySelectorAll('#inp')[0]
var olList = document.querySelectorAll('#todo')[0]

function zeeshan(){
    var newUserInp = document.createElement('LI');
    var newOlList = document.createTextNode(userInp.value);

    newUserInp.appendChild(newOlList);
    olList.appendChild(newUserInp)

    olList.insertBefore(newUserInp , olList.firstChild);

    var delBut = document.createElement('BUTTON');
    var delText = document.createTextNode('Delete')

    delBut.appendChild(delText);
    delBut.setAttribute('onclick' , 'todoApp(this)');

    newUserInp.appendChild(delBut)
    
    olList.appendChild(newUserInp)

}


function todoApp(deleteElement){
    olList.removeChild(deleteElement.parentNode)
    
}
