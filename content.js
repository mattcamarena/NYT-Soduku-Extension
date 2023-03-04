const sudokuCells = document.querySelectorAll('div[data-cell]');
const btnNums = document.querySelectorAll('div[role="gridcell"]');

//Update on Click
sudokuCells.forEach(function (div) {
	div.addEventListener('click', function () {

		resetColors();
		div.style.backgroundColor = '#e6c500';
		const val = div.getAttribute('aria-label');

		if (val != "empty") {
			highlightNumbers(val);
		}

	});
});

//Update on Number Click
btnNums.forEach(function (divs) {
	divs.addEventListener('click', function () {
		const svg = divs.querySelector('svg');

		if (svg != null) {
			val = svg.getAttribute('number');
			resetColors();
			highlightNumbers(val);
		}



	});
});

//On Keydown Press
document.addEventListener('keydown', (event) => {
	if (event.key >= '1' && event.key <= '9') {
		resetColors();
		highlightNumbers(event.key);
	}
});

//Reset Color Scheme to original
function resetColors() {
	sudokuCells.forEach(function (div) {
		if (div.classList.contains("su-cell")) {
			if (div.classList.contains("prefilled")) {
				div.style.backgroundColor = '#e6e6e6';
			} else {
				div.style.backgroundColor = '#fff';
			}
		}
	});

	const candSvgs = document.querySelectorAll('svg[class="su-candidate"]');
	candSvgs.forEach(function (candSvg) {
		const candPath = candSvg.querySelector('path');
		if (candPath) {
			candPath.style.cssText = "";
		}
	});

}

// Highlight Board Numbers
function highlightNumbers(num) {
	const candSvgs = document.querySelectorAll('svg[class="su-candidate"]');

	sudokuCells.forEach(function (divs) {
		const vals = divs.getAttribute('aria-label');
		if (num == vals) {
			divs.style.backgroundColor = '#e6c500';
		}

	});
	candSvgs.forEach(function (candSvg) {
		if (num == candSvg.getAttribute('number')) {
			const candPath = candSvg.querySelector('path');
			if (candPath) {
				candPath.style.cssText = "fill: #e6c500";
			}
		}
	});

}
