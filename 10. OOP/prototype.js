function Rapper(stageName, songs) {
  this.stageName = stageName;
  this.songs = songs;
}

Rapper.prototype.fetchBestSong = function (song) {
  this.beefRapper = true;
  return `The best song of ${this.stageName} is : ${this.songs[song]}`;
};

const rapper1 = new Rapper('KR$NA', ['No losses', 'Untitled']);
console.log(rapper1.fetchBestSong(1));
console.log(rapper1);
