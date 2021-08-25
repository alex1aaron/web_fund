var numOfConnectionRequests = 3;
var connectionRequest = document.querySelector('#connection-request');
function updateRequestCount(){
    if(numOfConnectionRequests > 0){
        numOfConnectionRequests-- 
        connectionRequest.innerText = numOfConnectionRequests
    }
    else{
        numOfConnectionRequests = 0
    }
}

var connectionCount = 4
var connectionCountNew = document.querySelector('#connections')
function updateConnectionCount(){
        connectionCount++;
        connectionCountNew.innerText = connectionCount;
}

function editName(){
    var edit = document.querySelector('#name')
    edit.innerText = 'Sam Beny';
}

function remove(){
    var element = document.querySelector('#friend-request')
    element.remove();

}

function remove2(){
    var element2 = document.querySelector('#friend-request2')
    element2.remove();
}

function remove3(){
    var element3 = document.querySelector('#friend-request3')
    element3.remove();
}

