
function processDay(dayIndex) {
    let dayDiv = document.createElement('div'); 

    for (let i = 0; i < 10; i++) {
        let el = document.createElement('div');
        dayDiv.appendChild(el);
    }

    let dayData = document.getElementsByClassName('fc-view-container')[0]
                      .getElementsByClassName('fc-time-grid fc-unselectable')[0]
                      .getElementsByClassName('fc-content-skeleton')[0]
                      .getElementsByTagName('td')[dayIndex]
                      .getElementsByTagName('a');

    for (let index = 0; index < dayData.length; index++) {
        const time = dayData[index].getElementsByTagName('span')[0].innerHTML;
        const subject = dayData[index].getElementsByClassName('fc-title')[0].innerHTML;

        let timeSlot = parseInt(time.split(':')[0]);

        if(timeSlot == 8) {
            dayDiv.getElementsByTagName('div')[0].innerHTML += subject + " ";
        }
        if(timeSlot == 9) {
            dayDiv.getElementsByTagName('div')[1].innerHTML += subject + " ";
        }
        if(timeSlot == 10) {
            dayDiv.getElementsByTagName('div')[2].innerHTML += subject + " ";
        }
        if(timeSlot == 11) {
            dayDiv.getElementsByTagName('div')[3].innerHTML += subject + " ";
        }
        if(timeSlot == 12) {
            dayDiv.getElementsByTagName('div')[4].innerHTML += subject + " ";
        }
        if(timeSlot == 1) {
            dayDiv.getElementsByTagName('div')[5].innerHTML += subject + " ";
        }
        if(timeSlot == 2) {
            dayDiv.getElementsByTagName('div')[6].innerHTML += subject + " ";
        }
        if(timeSlot == 3) {
            dayDiv.getElementsByTagName('div')[7].innerHTML += subject + " ";
        }
        if(timeSlot == 4) {
            dayDiv.getElementsByTagName('div')[8].innerHTML += subject + " ";
        }
        if(timeSlot == 5) {
            dayDiv.getElementsByTagName('div')[9].innerHTML += subject + " ";
        }
    }

    return {title: dayDiv.innerHTML,t8: dayDiv.getElementsByTagName('div')[0].innerHTML ,t9: dayDiv.getElementsByTagName('div')[1].innerHTML , t10: dayDiv.getElementsByTagName('div')[2].innerHTML, t11: dayDiv.getElementsByTagName('div')[3].innerHTML, t12: dayDiv.getElementsByTagName('div')[4].innerHTML, t1: dayDiv.getElementsByTagName('div')[5].innerHTML, t2: dayDiv.getElementsByTagName('div')[6].innerHTML, t3: dayDiv.getElementsByTagName('div')[7].innerHTML, t4: dayDiv.getElementsByTagName('div')[8].innerHTML, t5:dayDiv.getElementsByTagName('div')[9].innerHTML};
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "getmon") {
        sendResponse(processDay(1));
    }

    if (request.action === "gettue") {
        sendResponse(processDay(2));
    }

    if (request.action === "getwed") {
        sendResponse(processDay(3));
    }

    if (request.action === "getthu") {
        sendResponse(processDay(4));
    }

    if (request.action === "getfri") {
        sendResponse(processDay(5));
    }
});
