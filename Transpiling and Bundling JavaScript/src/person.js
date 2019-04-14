class Person {
  constructor(firstname) {
    this.firstname = firstname
  }

  showName() {
    console.log(this.firstname);
  }
}

export { Person }