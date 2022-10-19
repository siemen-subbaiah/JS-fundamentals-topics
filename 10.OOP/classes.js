// * classes in javascript are just synatic sugar for creating object constructors!
// * functions are directly added in the prototype object

class Rapper {
  constructor(stageName, songs) {
    this.stageName = stageName;
    this.songs = songs;
  }

  getBestSong(song) {
    return `The best song from ${this.name}'s list is ${this.songs[song]}`;
  }
}

// inheritance!
class RapperDet extends Rapper {
  constructor(stageName, songs, lastName) {
    super(stageName, songs);
    this.lastName = lastName;
  }
}

// const rapper1 = new Rapper('KR$NA', ['Makasam', 'Say my name', 'SYK']);
const rapper1 = new RapperDet(
  'KR$NA',
  ['Makasam', 'Say my name', 'SYK'],
  'kaul'
);
console.log(rapper1.getBestSong(2));
