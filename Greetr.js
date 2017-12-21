// IIFE
(function (global, $) {
  // funzione che crea saluto
  // 'new' di un oggetto
  var Greetr = function (firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  }
  
  // linguaggi supportati
  // nascosti allo scope dalla IIFE e non accessibile direttamente
  var supportedLangs = ['en', 'es'];
  
  // greeting informali
  var greetings = {
    en: 'Hello',
    es: 'Hola'
  };
  
  // greeting formali
  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  };
  
  // messaggi di log
  var logMessages = {
    en: 'Logged in',
    es: 'Iniciò sesiòn'
  };
  
  // definisco il Protype della classe dove andrò a definire tutti i metodi
  // prototype contiene metodi (per salvare spazio in memoria)
  Greetr.prototype = {
    
    // 'this' si riferisce all'oggetto chiamante a tempo di esecuzione
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    },
    
    validate: function() {
      // controlla se è un linguaggio valido
      // si riferisce ad un 'supportedLangs' non accessibile esternamente dentro la closure
      if (supportedLangs.indexOf(this.language) === -1) {
        throw 'Invalid language';
      }
    },
    
    // recupero messagi da un oggetto mediante le sue pty e sintassi []
    greeting: function() {
      return greetings[this.language] + ' ' + this.firstName + '!';
    },
    
    formalGreeting: function() {
      return formalGreetings[this.language] + ', ' + this.fullName();
    },
    
    // metodi concatenabili restituiscono l'oggetto che li contiene
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
      // renderlo concatenabile
      return this;
    },
    
    setLang: function(lang) {
      // setta il linguaggio
      this.language = lang;
      
      // valida
      this.validate();
      
      // rendilo concatenabile
      return this;
    },
    
    HTMLGreeting: function(selector, formal) {
      if (!$) {
        throw 'jQuery not loaded';
      }
      
      if (!selector) {
        throw 'Missing jQuery selector';
      }
      
      // determina il messaggio
      var msg;
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }
      
      // inietta il messaggio nello spazio scelto del DOM
      $(selector).html(msg);
      
      // rendilo concatenabile
      return this;
      
    }
  };
  
  // definisco la pty init
  // il vero oggetto viene creato qui, ci permette di creare un 'new' oggetto se invocare il 'new
  Greetr.init = function (firstName, lastName, language) {
    var self = this;
    // setto i valori delle pty tenendo conto anche dei loro valori di default
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';
  }
  
  // definisco anche un prototype del costruttore init che sarà il prototype usato dai metodi della libreria
  Greetr.init.prototype = Greetr.prototype;
  
  // allega il Greetr al global object, e fornisci anche la shorthand '$G'
  global.Greetr = global.G$ = Greetr;
}(window, jQuery));