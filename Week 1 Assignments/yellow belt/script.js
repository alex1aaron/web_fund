function accept(element){
    var element = document.querySelector('#accept-cookies');
    element.remove();
}

var succulentImage = document.querySelector('#switch-pic')

function changePic(){
    succulentImage.src = '/Users/alexaaron/Desktop/coding_dojo/web_fund/Week 1 Assignments/yellow belt/images/assets/succulents-2.jpg';
}

function changeBack(){
    succulentImage.src = '/Users/alexaaron/Desktop/coding_dojo/web_fund/Week 1 Assignments/yellow belt/images/assets/succulents-1.jpg';
}

function removeMagnifier(element){
    var element = document.querySelector('#magnifier')
    element.remove();
}
