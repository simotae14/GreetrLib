// IIFE
(function (global, $) {
  // funzione che crea saluto
  var Greetr = function (firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  }
  
  // definisco il Protype della classe dove andrò a definire tutti i metodi
  Greetr.prototype = {
    
  };
  
  // definisco la pty init
  Greetr.init = function (firstName, lastName, language) {
    var self = this;
    // setto i valori delle pty tenendo conto anche dei loro valori di default
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';
  }
  
  // definisco anche un prototype del costruttore init che sarà il prototype usato dai metodi della libreria
  Greetr.init.prototype = Greetr.prototype;
  
  global.Greetr = global.G$ = Greetr;
}(window, jQuery));