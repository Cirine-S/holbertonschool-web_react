"use strict";
var student1 = {
    firstName: 'Leonardo',
    lastName: 'DiCaprio',
    age: 45,
    location: 'US'
};
var student2 = {
    firstName: 'Brad',
    lastName: 'Pitt',
    age: 57,
    location: 'US'
};
var studentsList = [student1, student2];
var labels = ['firstName', 'location'];
var table = document.createElement('table');
document.body.appendChild(table);
var tbody = document.createElement('tbody');
table.appendChild(tbody);
var thead = document.createElement('thead');
table.appendChild(thead);
for (var i = 0; i < labels.length; i++) {
    var th = document.createElement('th');
    thead.appendChild(th);
    th.appendChild(document.createTextNode("" + labels[i]));
}
for (var i = 0; i < studentsList.length; i++) {
    var tr = document.createElement('tr');
    tbody.appendChild(tr);
    var values = [studentsList[i].firstName, studentsList[i].location];
    for (var j = 0; j < values.length; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode("" + values[j]));
        tr.appendChild(td);
    }
}
