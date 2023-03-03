const sodukuCells = document.querySelectorAll('div[data-cell]');
const btnNums = document.querySelectorAll('div[role="gridcell"]')
sodukuCells.forEach(function(div) {
  div.addEventListener('click', function() {
  	console.log("clicked")
  	resetColors();
  	div.style.backgroundColor = '#e6c500';
  	const val = div.getAttribute('aria-label');

  	if(val != "empty"){

  	sodukuCells.forEach(function(divs){
  		const vals = divs.getAttribute('aria-label');
  		if(val == vals){
  			divs.style.backgroundColor = '#e6c500';
  		}
  	})
  	}

  });
});

//Reset Color Scheme to original
function resetColors(){
	console.log("resetColors")
	sodukuCells.forEach(function(div){
		const scell = div.getAttribute('class');
		if(scell == "su-cell" || scell == "su-cell selected" || scell == "su-cell guessed selected" || scell == "su-cell guessed"|| scell == "su-cell guessed selected conflicted" || scell == "su-cell guessed conflicted"){
			div.style.backgroundColor = '#fff';
		}else{
			div.style.backgroundColor = '#e6e6e6';
		}
	})
}

//Update on Click

//Update on Number Click
btnNums.forEach(function(divs) {
	console.log("clicked2")
  divs.addEventListener('click', function() {
  	svg = divs.querySelector('svg');
  	if(svg != null){
  		val = svg.getAttribute('number');
  		highlightNumbers(val);
  	}

  	

  });
});

function highlightNumbers(num){
			console.log("highlightNumbers")
	  	sodukuCells.forEach(function(divs){
  		const vals = divs.getAttribute('aria-label');
  		if(num == vals){
  			divs.style.backgroundColor = '#e6c500';
  		}
  	})

}

document.addEventListener('keydown', (event) => {
  if (event.key >= '0' && event.key <= '9') {
  	resetColors();
    highlightNumbers(event.key);
  }
});