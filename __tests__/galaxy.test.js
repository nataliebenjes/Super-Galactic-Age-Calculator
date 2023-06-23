import Person from './../src/galaxy.js';

describe("Person",  () => {

  let person;

  beforeEach(() => {
      person = new Person("Shauna", 35);
  });

  test("Make a person object", () => {
      expect(person.name).toEqual("Shauna");
      expect(person.age).toEqual(35);
      expect(person.murcuryAge).toEqual(0);
      expect(person.venusAge).toEqual(0);
      expect(person.marsAge).toEqual(0);
      expect(person.jupiterAge).toEqual(0);
  });
  test("calculate murcury age", () => {
    person.addMurcuryAge();
    expect(person.murcuryAge).toEqual(145.8);
  })
  test("caculate venusAge", () => {
    person.addVenusAge();
    expect(person.venusAge).toEqual(56.5);
  })
  test("calculate marsAge", () => {
    person.addMarsAge();
    expect(person.marsAge).toEqual(18.6)
  })
  test("calculate jupiterAge", () => {
    person.addJupiterAge();
    expect(person.jupiterAge).toEqual(3);
  })
  test("calculate years passed since the person's prior birthday", () => {
    person.addMurcuryAge();
    person .addVenusAge();
    person.addMarsAge ();
    person.addJupiterAge ();
    let result = person.ageSinceBirthday(10);
    person.ageSinceBirthday(10);
    expect(result).toEqual("25 Earth years have passed. 104.2 Mercury years have passed. 40.3 Venus years have passed. 13.3 Mars years have passed. 2.1 Jupiter years have passed.");
  })
})