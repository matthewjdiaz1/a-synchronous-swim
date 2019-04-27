
$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    $.get('http://127.0.0.1:8080', arrowPress[1])
      .done((data) => {
        var move = JSON.parse(data);
        SwimTeam.move(move.toLowerCase());
      })
      .fail((e) => {
        console.log(e);
      });    
  }
});

console.log('Client is running in the browser!');
