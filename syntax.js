class Animal { 
    constructor(name) {
      this.name = name;
      this.cha='chaa'
    }
    
    speak() {
      console.log(this.name + ' makes a noise.');
    }
  }
  
class Dog extends Animal {
    
    speak() {
      console.log(this.name + ' barks.'+this.cha);
    }
  }
  
  var d = new Dog('Mitzie');
  d.speak(); // Mitzie barks.