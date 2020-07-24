//$("#mytable").tablesorter();
function getCellValues() {
  var cellValues = {
    forum: [],
    atoll: [],
    kvarc: []
  };
  var table = document.getElementById('mytable');
  for (var r = 1, n = table.rows.length; r < n; r++) {
    let businessCentreCase;

    switch (table.rows[r].cells[8].innerHTML) {
      case 'Форум':
        businessCentreCase = 'forum';
        break;
      case 'Атолл':
        businessCentreCase = 'atoll';
        break;
      case 'Кварц':
        businessCentreCase = 'kvarc';
        break;
      default:
        businessCentreCase = '#'
    }


    cellValues[businessCentreCase][r-1] = {
      "number": table.rows[r].cells[0].innerHTML,
      "type": table.rows[r].cells[1].innerHTML,
      "rooms": table.rows[r].cells[2].innerHTML,
      "area": table.rows[r].cells[3].innerHTML.replace(/,/g, '.'),
      "price": table.rows[r].cells[4].innerHTML,
      "summ": table.rows[r].cells[5].innerHTML.replace(/,/g, '.'),
      "comment": table.rows[r].cells[6].innerHTML,
      "floor": table.rows[r].cells[7].innerHTML,
      "bc": table.rows[r].cells[8].innerHTML
    }
  }
  return cellValues;
}



var data = getCellValues();

console.log(data);


let urlParams = decodeURIComponent(location.search.substr(1)).split('&');

function setFilterData() {
  if (decodeURIComponent(location.search.substr(1)) !== '' && urlParams[3] !== undefined) {
    let businessCentreName = urlParams[1].split('=')[1];
    console.log(businessCentreName);
    document.querySelector('.minPay').value = urlParams[2].split('=')[1];
    document.querySelector('.maxPay').value = urlParams[3].split('=')[1];
    document.querySelector('.minArea').value = urlParams[4].split('=')[1];
    document.querySelector('.maxArea').value = urlParams[5].split('=')[1];
  };
}

setFilterData();

let select = document.querySelector('select');
let table = document.getElementById('mytable');
let btn = document.querySelector('.btn-orange__filter');
selectTable();

btn.addEventListener('click', selectTable, false);


function selectTable() {

  let filterInfo = {
    minRentInput: document.querySelector('.minPay').value == '' ?
      -Infinity : document.querySelector('.minPay').value,

    maxRentInput: document.querySelector('.maxPay').value == '' || document.querySelector('.maxPay').value == 0 ?
      Infinity : document.querySelector('.maxPay').value,

    minAreaInput: document.querySelector('.minArea').value == '' ?
      -Infinity : document.querySelector('.minArea').value,

    maxAreaInput: document.querySelector('.maxArea').value == '' || document.querySelector('.maxArea').value == 0 ?
      Infinity : document.querySelector('.maxArea').value,

    businessCentreName: urlParams[1].split('=')[1]

  };
  console.log(filterInfo.businessCentreName);
  let trAll = document.querySelectorAll('tr');

  for (let i = 1; i < trAll.length; i++) {
    trAll[i].remove();
  }

  for (key in data) {
    for (let ii = 0; ii < data[key].length; ii++) {
      if(data[key][ii] !== undefined){
        if (filterInfo.businessCentreName !== 'all') {
          if (data[key][ii].summ >= (+(filterInfo.minRentInput)) && data[key][ii].summ <= (+(filterInfo.maxRentInput)) &&
              data[key][ii].area >= (+(filterInfo.minAreaInput)) && data[key][ii].area <= (+(filterInfo.maxAreaInput)) &&
              key === filterInfo.businessCentreName) {
            console.log('dew');
            // bcSelect(key);

            //отрисовка

            let tr = document.createElement('tr'),
                td = document.createElement('td');

            table.appendChild(tr);

            let trNewList = document.querySelectorAll('tr'),
                trNewListNumber = trNewList.length - 1;

            // строка

            trNewList[trNewListNumber].appendChild(td);
            td.innerHTML = data[key][ii].number;

            // строка

            tr = document.createElement('tr'),
                td = document.createElement('td');

            trNewList[trNewListNumber].appendChild(td);
            td.textContent = data[key][ii].type;

            // строка

            tr = document.createElement('tr'),
                td = document.createElement('td');

            trNewList[trNewListNumber].appendChild(td);
            td.textContent = data[key][ii].rooms;

            // строка

            tr = document.createElement('tr'),
                td = document.createElement('td');

            trNewList[trNewListNumber].appendChild(td);
            td.textContent = data[key][ii].area;

            // строка

            tr = document.createElement('tr'),
                td = document.createElement('td');

            trNewList[trNewListNumber].appendChild(td);
            td.textContent = data[key][ii].price;

            // строка

            tr = document.createElement('tr'),
                td = document.createElement('td');

            trNewList[trNewListNumber].appendChild(td);
            td.textContent = data[key][ii].summ;

            // строка

            tr = document.createElement('tr'),
                td = document.createElement('td');

            trNewList[trNewListNumber].appendChild(td);
            td.textContent = data[key][ii].comment;

            // строка

            tr = document.createElement('tr'),
                td = document.createElement('td');

            trNewList[trNewListNumber].appendChild(td);
            td.textContent = data[key][ii].floor;

            tr = document.createElement('tr'),
                td = document.createElement('td');

            trNewList[trNewListNumber].appendChild(td);
            let businessCentreLink;
            switch (data[key][ii].bc) {
              case 'Форум':
                businessCentreLink = 'rent/page-forum.php';
                break;
              case 'Атолл':
                businessCentreLink = 'rent/page-atoll.php';
                break;
              case 'Кварц':
                businessCentreLink = 'rent/page-kvarc.php';
                break;
              default:
                businessCentreLink = '#'
            }
            td.innerHTML = '<a href="' + businessCentreLink + '">' + data[key][ii].bc + '</a>';


            //END отрисовка
          }
        } else if (filterInfo.businessCentreName === 'all') {
          if (data[key][ii].summ >= (+(filterInfo.minRentInput)) && data[key][ii].summ <= (+(filterInfo.maxRentInput)) &&
              data[key][ii].area >= (+(filterInfo.minAreaInput)) && data[key][ii].area <= (+(filterInfo.maxAreaInput))) {

            //отрисовка

            let tr = document.createElement('tr'),
                td = document.createElement('td');
            table.appendChild(tr);

            let trNewList = document.querySelectorAll('tr'),
                trNewListNumber = trNewList.length - 1;

            // строка

            trNewList[trNewListNumber].appendChild(td);
            td.innerHTML = data[key][ii].number;

            // строка

            tr = document.createElement('tr'),
                td = document.createElement('td');

            trNewList[trNewListNumber].appendChild(td);
            td.textContent = data[key][ii].type;

            // строка

            tr = document.createElement('tr'),
                td = document.createElement('td');

            trNewList[trNewListNumber].appendChild(td);
            td.textContent = data[key][ii].rooms;

            // строка

            tr = document.createElement('tr'),
                td = document.createElement('td');

            trNewList[trNewListNumber].appendChild(td);
            td.textContent = data[key][ii].area;

            // строка

            tr = document.createElement('tr'),
                td = document.createElement('td');

            trNewList[trNewListNumber].appendChild(td);
            td.textContent = data[key][ii].price;

            // строка

            tr = document.createElement('tr'),
                td = document.createElement('td');

            trNewList[trNewListNumber].appendChild(td);
            td.textContent = data[key][ii].summ;

            // строка

            tr = document.createElement('tr'),
                td = document.createElement('td');

            trNewList[trNewListNumber].appendChild(td);
            td.textContent = data[key][ii].comment;

            // строка

            tr = document.createElement('tr'),
                td = document.createElement('td');

            trNewList[trNewListNumber].appendChild(td);
            td.textContent = data[key][ii].floor;

            // строка

            tr = document.createElement('tr'),
                td = document.createElement('td');

            trNewList[trNewListNumber].appendChild(td);
            let businessCentreLink;
            switch (data[key][ii].bc) {
              case 'Форум':
                businessCentreLink = 'rent/page-forum.php';
                break;
              case 'Атолл':
                businessCentreLink = 'rent/page-atoll.php';
                break;
              case 'Кварц':
                businessCentreLink = 'rent/page-kvarc.php';
                break;
              default:
                businessCentreLink = '#'
            }
            td.innerHTML = '<a href="' + businessCentreLink + '">' + data[key][ii].bc + '</a>';




            //END отрисовка
          }
        }
      }


    }
  }
  $("#mytable").tablesorter();
};
/*
var resort = true, // if true, resort using the current sort
    callback = function(table){
      alert('new sort applied');
    };
$(".main-table__table-office").trigger("update", [resort, callback]);

*/
