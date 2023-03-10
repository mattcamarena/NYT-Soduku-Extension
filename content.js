const sudokuCells = document.querySelectorAll('div[data-cell]');
const btnNums = document.querySelectorAll('div[role="gridcell"]');

console.log("loading extension")
//Update on Click
sudokuCells.forEach(function (div) {
	div.addEventListener('click', function () {	
		const val = div.getAttribute('aria-label');
		highlightNumbers(val);
		div.style.backgroundColor = '';
	});
});

//Update on Number Click
btnNums.forEach(function (div) {

	div.addEventListener('click', function () {

		const svg = div.querySelector('svg');

		if (svg != null) {
			val = svg.getAttribute('number');
			highlightNumbers(val);
		}

	});
});

//On Keydown Press
//Handler for moving keys
document.addEventListener('keydown', (event) => {
	
	var selectedCellDiv = document.querySelector('div.su-cell.selected');

	if ((event.key >= '1' && event.key <= '9') || (event.key >= '37' && event.key <= '40') ) {
		highlightNumbers(event.key);

	}else if(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'ArrowUp' || event.key == 'ArrowDown' ){
		highlightNumbers(selectedCellDiv.getAttribute('aria-label'));
		var selectedCellDiv = document.querySelector('div.su-cell.selected');
		
	}else if(event.key == 'Backspace'){
		highlightNumbers(selectedCellDiv.getAttribute('aria-label'));

	}
	
	selectedCellDiv.style.backgroundColor = '';
});

// Highlight Numbers while resetting Colors
function highlightNumbers(num) {
	
	const candSvgs = document.querySelectorAll('svg[class="su-candidate"]');
	
	sudokuCells.forEach(function (div) {
		const val = div.getAttribute('aria-label');
		if (num != "empty" && num == val) {
			div.style.backgroundColor = 'green';

		} else {
			div.style.backgroundColor = '';
		}

	});
	candSvgs.forEach(function (candSvg) {
		const candPath = candSvg.querySelector('path');
		if (candPath) {
			if (num == candSvg.getAttribute('number')) {
				candPath.style.cssText = "fill: green";
			} else {
				candPath.style.cssText = "";
			}
		}

	});

}
