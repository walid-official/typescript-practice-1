{
  // oop - class

// this is a parameter property with public keyword. so that i don't need to write this.name = name and typescript will do it automatically.

  // class Animal {
  //   constructor(
  //     public name: string,
  //     public species: string,
  //     public sound: string
  //   ) {}

  //   makeSound() {
  //     console.log(`The ${this.name} says ${this.sound}`);
  //   }
  // }

  // const dog = new Animal("German Shepard Bhai", "dog", "Ghew Ghew");
  // const cat = new Animal("Persian bhai", "cat", "meaw meaw");
  // cat.makeSound();


  class student {
    constructor(
      public name: string,
      public age: number,
      public hobby: string
    ) {}

    makeHobby() {
      console.log(`${this.name} likes ${this.hobby}`);
    }
  }

  const student1 = new student("German Shepard Bhai", 20, "playing");
  const student2 = new student("Persian bhai", 25, "wandering");
  student1.makeHobby();

  //
}
