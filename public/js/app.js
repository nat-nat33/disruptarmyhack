const CG = document.getElementById("commanding general");
const COS = document.getElementById("cheif of staff");
const DCGAR = document.getElementById("dcg army reserve");
const DCGNG = document.getElementById("dcg national guard");
const DCGN = document.getElementById("dcg national");
const DCGS = document.getElementById("dcg south");

function getData() {
  $.getJSON({
    url: '/data/CG.json'
  }).done(function(data) {
    var items = data.items;
    var events = items.map(function(cur) {
      var startDate = moment(cur.start.dateTime);
      var endDate = moment(cur.end.dateTime);
      var duration = moment.duration(endDate.diff(startDate)).hours();

      return {
        eventType: cur.summary,
        duration: duration
      }
    });
    var poop = events.reduce(function(previous, current){
      if(!previous[current.eventType]){
        previous[current.eventType] = 0;
      }
      previous[current.eventType] += current.duration;
      return previous;
    }, {});
    // createCharts(CG, data, 'Commanding General');
    console.log(poop, 'poop');
  });
};
getData();

function createCharts (element, data, text){
  let myChart = new Chart(element, {
      data: {datasets: [{
              data: data,
              backgroundColor: [
                  "#2f6cce",
                  "#23b23b",
                  "#037015",
                  "#efec1c",
                  "#a32d0d",
                  "#690da3",
                  "#707070"
              ]
          }],
          labels: [
              "Nato",
              "Allies",
              "Army",
              "Officials",
              "Supporters",
              "Joint",
              "Staff"
          ]
        },
      type: "polarArea",
      options: {
          elements: {
              arc: {
                  borderColor: "#efefef"
              }
          },
          title: {
              display: true,
              text: text,
              fontSize: 14
          }
      }
  });
};

// createCharts(CG, [6, 8, 10, 11, 13, 16, 7], 'Commanding General');
// createCharts(COS, [6, 8, 10, 11, 13, 16, 7], 'Cheif of Staff');
// createCharts(DCGAR, [6, 8, 10, 11, 13, 16, 7], 'DCG Army Reserve');
// createCharts(DCGNG, [6, 8, 10, 11, 13, 16, 7], 'DCG National Guard');
// createCharts(DCGN, [6, 8, 10, 11, 13, 16, 7], 'DCG National');
// createCharts(DCGS, [6, 8, 10, 11, 13, 16, 7], 'DCG South');