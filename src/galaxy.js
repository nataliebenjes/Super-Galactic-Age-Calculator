
  export default class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.murcuryAge = 0;
      this.venusAge = 0;
      this.marsAge = 0;
      this.jupiterAge = 0;
    }
    addMurcuryAge() {
      this.murcuryAge = Math.round(10*this.age / .24)/10;
    }
    addVenusAge() {
      this.venusAge = Math.round(10*this.age / .62)/10;
    }
    addMarsAge () {
      this.marsAge = Math.round(10*this.age / 1.88)/10;
    }
    addJupiterAge () {
      this.jupiterAge = Math.round(10*this.age / 11.86)/10;
    }
    ageSinceBirthday (priorAge) {
      let earthDiff = this.age - priorAge;
      let murcDiff = Math.round(10 * earthDiff / .24)/10;
      let venusDiff = Math.round(10*earthDiff / .62)/10;
      let marsDiff = Math.round(10*earthDiff/ 1.88)/10;
      let jupDiff = Math.round(10*earthDiff / 11.86)/10;
      return `${earthDiff} Earth years have passed. ${murcDiff} Mercury years have passed. ${venusDiff} Venus years have passed. ${marsDiff} Mars years have passed. ${jupDiff} Jupiter years have passed.`;
    }

  }