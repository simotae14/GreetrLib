// IIFE
(function (global, $) {
  // funzione che crea saluto
  var Greetr = function (firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  }
  
  // linguaggi supportati
  var supportedLangs = ['en', 'es'];
  
  var greetings = {
    en: 'Hello',
    es: 'Hola'
  };
  
  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  };
  
  var logMessages = {
    en: 'Logged in',
    es: 'Iniciò sesiòn'
  };
  
  // definisco il Protype della classe dove andrò a definire tutti i metodi
  Greetr.prototype = {
    
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    },
    
    validate: function() {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw 'Invalid language';
      }
    },
    
    greeting: function() {
      return greetings[this.language] + ' ' + this.firstName + '!';
    },
    
    formalGreeting: function() {
      return formalGreetings[this.language] + ', ' + this.fullName();
    },
    
    greet: function(formal) {
      var msg;
      
      // if undefined or null it will be coerced to 'false'
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }
      // se la console è aperta
      if (console) {
        console.log(msg);
      }
      
      // 'this' refers to the calling object at execution time
      // makes the method chainable
      return this;
    },
    
    log: function() {
      // se la console è aperta
      if (console) {
        console.log(logMessages[this.language] + ': ' + this.fullName());
      }
      return this;
    },
    
    setLang: function(lang) {
      this.language = lang;
      
      this.validate();
      
      return this;
    }
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