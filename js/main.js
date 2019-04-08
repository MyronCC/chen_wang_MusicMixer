(() => {
  console.log("mixer");

  let aud = document.querySelector('audio'),
    tracks = document.querySelectorAll(".trackholder");

    function playAudio() {
    aud.play();
  }

  function switchAudioTrack() {
    currentTrack = this.dataset.currenttrack;

    aud.src = `audio/${currentTrack}`;
    aud.load();
    aud.play();
  }

 

  tracks.forEach(track => {
    track.addEventListener('click', switchAudioTrack);
    
  });

	const sag = document.querySelector('#sag');
  const tau = document.querySelector('#tau');
  const lib = document.querySelector('#lib');
  const aqua = document.querySelector('#aqua');
  const leo = document.querySelector('#leo');
  const gem = document.querySelector('#gem');

  const empties = document.querySelectorAll('.empty');

// Fill listeners
sag.addEventListener('dragstart', dragStart);
sag.addEventListener('dragend', dragEnd);

// Loop through empty boxes and add listeners
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// Drag Functions

function dragStart() {
  this.classname += ' hold';
  setTimeout(() => (this.classname = 'invisible'), 0);
}

function dragEnd() {
  this.classname = 'fill';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classname += ' hovered';
}

function dragLeave() {
  this.classname = 'empty';
}

function dragDrop() {
  this.classname = 'empty';
  this.append(sag);
}




})();