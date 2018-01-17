(function(){
				var dropzone = document.getElementById('dropzone');
				
				dropzone.ondrop = function(e){
					e.preventDefault();
					this.className = 'dropzone';
					console.log(e.dataTransfer.files);
					data = e.dataTransfer;
					files = data.files;
					processFiles(files);
				};
				
				dropzone.ondragover = function(){
					this.className = 'dropzone dragover';
					return false;
					};
				
				dropzone.ondragleave = function(){
					this.className = 'dropzone';
					return false;
					};

				
				function positionRecieved(position){
					console.log(position);
					var loc = position;
				}
				/*
				if(navigator.geoLocation){
					navigator.geoLocation.getCurrentPosition(positionRecieved);
				}

				else{
					var location = window.prompt("Geolocation not recieved! Please enter location:");

				}
				*/

			

function processFiles(files){
					var file = files[0];
					var reader = new FileReader();
					reader.onload = function (e){
						output = {};
						output = e.target.result;
						console.log(output);
						usrLoc = document.getElementById('map').setAttribute('src','https://www.google.com/maps/embed/v1/place?q=' + e.target.result + 
							'&zoom=15&key=AIzaSyCZLkadB2ynDyYUyw4c8xGamJfPkIvg-DA');
						latlng = document.getElementById('geoInput').setAttribute('value',e.target.result);
						
						revGeo(geoCode,iWin,output);
					};	
					reader.readAsText(file);
				}

function getUserCity(){
	place = document.getElementById('inputCity').value;
	console.log(place);
}

}());


