(() => {
	let piecesBoard = document.querySelector("#dragElement");
	let dropBoard = document.querySelector("#DJpanel");






	function Drag() {
		piecesBoard.querySelectorAll('img').forEach(img => {
			img.addEventListener("dragstart", function(e) {
				console.log('draggin...');
				e.dataTransfer.setData("text/plain", this.id);
			});
		});
	}

	// handle the drop
	// 
	dropBoard.forEach(zone => {
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log('dragged over me!');
		});
})();