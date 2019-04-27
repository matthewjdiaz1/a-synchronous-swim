
var repeatlyGet = function(){ 
  $.get('http://127.0.0.1:3000')
  .done((data) => {
    SwimTeam.move(data);
    setTimeout(repeatlyGet(), 3000);
  })
  .fail((e) => {
    console.log(e);
  });
  // .ajaxComplete(() => {
  //   setTimeout(repeatlyGet(), 300);
  // });   
}



repeatlyGet();

$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
     
  }
});

console.log('Client is running in the browser!');
