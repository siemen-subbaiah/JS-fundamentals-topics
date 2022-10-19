function Rapper(stageName, songs) {
  this.stageName = stageName;
  this.songs = songs;
  this.fetchBestSong = (song) => {
    return `The best song of ${this.stageName} is : ${this.songs[song]}`;
  };
}

// Instantiate the Object
const rapper1 = new Rapper('KR$NA', ['No cap', 'Blowing up', 'OG']);
const rapper2 = new Rapper('J.cole', [
  'Middle child',
  'No role modelz',
  'Amari',
]);
console.log(rapper1.fetchBestSong(1));
console.log(rapper2.fetchBestSong(0));
