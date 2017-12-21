// crea un nuovo oggetto (l'architettura ti permette di non dover usare la keyword 'new')
var g = G$('John', 'Doe');

// usa i nostri metodi concatenabili
g.greet().setLang('es').greet(true).log();

// handler sul pulsante login
// usa il nostro oggetto al click sul bottone di login
$('#login').click(function() {
  // creiamo un nuovo oggetto 'Greetr' (dobbiamo assicurarci di sapere il nome dal login)
  var loginGrtr = G$('John', 'Doe');
  
  $('#logindiv').hide();
  
  // crea un Saluto HTML, passando come selettore '#greeting' e il linguaggio a tua scelta, e logga anche il
  // messaggio di benvenuto
  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});