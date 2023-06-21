document.getElementById("btn-timetable").addEventListener("click", function () {
  var days = ["mon", "tue", "wed", "thu", "fri"];

  days.forEach(function (day) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "get" + day },
        function (response) {
          // store the response
          chrome.storage.local.set({ [day]: response }, function () {
            console.log(day + " stored");
          });
        }
      );
    });
  });
});

window.onload = function () {
  var days = ["mon", "tue", "wed", "thu", "fri"];

  days.forEach(function (day) {
    chrome.storage.local.get(day, function (data) {
      if (data[day]) {
        document.getElementById(day + "_8-9").innerHTML = data[day].t8;
        document.getElementById(day + "_9-10").innerHTML = data[day].t9;
        document.getElementById(day + "_10-11").innerHTML = data[day].t10;
        document.getElementById(day + "_11-12").innerHTML = data[day].t11;
        document.getElementById(day + "_12-1").innerHTML = data[day].t12;
        document.getElementById(day + "_1-2").innerHTML = data[day].t1;
        document.getElementById(day + "_2-3").innerHTML = data[day].t2;
        document.getElementById(day + "_3-4").innerHTML = data[day].t3;
        document.getElementById(day + "_4-5").innerHTML = data[day].t4;
        document.getElementById(day + "_5-6").innerHTML = data[day].t5;
      }
    });
  });
};

document
  .getElementById("btn-get-notification")
  .addEventListener("click", function () {
    var days = ["mon", "tue", "wed", "thu", "fri"];

    days.forEach(function (day) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(
          tabs[0].id,
          { action: "get" + day },
          function (response) {
            // store the response
            chrome.storage.local.get(day, function (data) {
              var days = ["mon", "tue", "wed", "thu", "fri"];
              days.forEach(function (day) {
                let df;
                if (day == "mon") {
                  df = 1;
                }
                if (day == "tue") {
                  df = 2;
                }
                if (day == "wed") {
                  df = 3;
                }
                if (day == "thu") {
                  df = 4;
                }
                if (day == "fri") {
                  df = 4;
                }
                if (data[day]) {
                  if (data[day].t1) {
                    let alarm_id =  "1_" + day;
                    let x;
                    const curr = new Date();
                    const dayy = curr.getDay(); // 0 , 1, 2, 3, 4, 5, 6
                    if (dayy - df < 0) {
                      x = (dayy - df + 7) * 86400;
                    } else {
                      x = (dayy - df) * 86400;
                    }
                    curr = setSeconds(
                      curr.getSeconds() + x + (12 - 8) * 3600 - 30 * 60
                    );
                    chrome.alarms.create(alarm_id, { when: curr.getTime() });
                    document.getElementById(day + "_1-2").innerHTML =
                      data[day].t1;
                  }
                  if (data[day].t2) {
                    let alarm_id =  "2_" + day;
                    let x;
                    const curr = new Date();
                    const dayy = curr.getDay(); // 0 , 1, 2, 3, 4, 5, 6
                    if (dayy - df < 0) {
                      x = (dayy - df + 7) * 86400;
                    } else {
                      x = (dayy - df) * 86400;
                    }
                    curr = setSeconds(
                      curr.getSeconds() + x + (12 - 8) * 3600 - 30 * 60
                    );
                    chrome.alarms.create(alarm_id, { when: curr.getTime() });
                    document.getElementById(day + "_2-3").innerHTML =
                      data[day].t2;
                  }
                  if (data[day].t3) {
                    let alarm_id = "3_" + day;
                    let x;
                    const curr = new Date();
                    const dayy = curr.getDay(); // 0 , 1, 2, 3, 4, 5, 6
                    if (dayy - df < 0) {
                      x = (dayy - df + 7) * 86400;
                    } else {
                      x = (dayy - df) * 86400;
                    }
                    curr = setSeconds(
                      curr.getSeconds() + x + (12 - 8) * 3600 - 30 * 60
                    );
                    chrome.alarms.create(alarm_id, { when: curr.getTime() });
                    document.getElementById(day + "_3-4").innerHTML =
                      data[day].t3;
                  }
                  if (data[day].t4) {
                    let alarm_id =  "4_" + day;
                    let x;
                    const curr = new Date();
                    const dayy = curr.getDay(); // 0 , 1, 2, 3, 4, 5, 6
                    if (dayy - df < 0) {
                      x = (dayy - df + 7) * 86400;
                    } else {
                      x = (dayy - df) * 86400;
                    }
                    curr = setSeconds(
                      curr.getSeconds() + x + (12 - 8) * 3600 - 30 * 60
                    );
                    chrome.alarms.create(alarm_id, { when: curr.getTime() });
                    document.getElementById(day + "_4-5").innerHTML =
                      data[day].t4;
                  }
                  if (data[day].t5) {
                    let alarm_id = "5_" + day;
                    let x;
                    const curr = new Date();
                    const dayy = curr.getDay(); // 0 , 1, 2, 3, 4, 5, 6
                    if (dayy - df < 0) {
                      x = (dayy - df + 7) * 86400;
                    } else {
                      x = (dayy - df) * 86400;
                    }
                    curr = setSeconds(
                      curr.getSeconds() + x + (12 - 8) * 3600 - 30 * 60
                    );
                    chrome.alarms.create(alarm_id, { when: curr.getTime() });
                    document.getElementById(day + "_5-6").innerHTML =
                      data[day].t5;
                  }
                }
              });
            });
          }
        );
      });
    });
  });
