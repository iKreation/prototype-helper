var onspot = {

	categories:null,

	initialize: function() {
		
		google.maps.event.addDomListener(window, 'load', this.initGoogleMaps);

		var lorem1 = "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.";
		var lorem2 = "Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório. Tem raízes numa peça de literatura clássica em Latim, de 45 AC, tornando-o com mais de 2000 anos. Richard McClintock, um professor de Latim no Colégio Hampden-Sydney, na Virgínia, procurou uma das palavras em Latim mais obscuras (consectetur) numa passagem Lorem Ipsum, e atravessando as cidades do mundo na literatura clássica, descobriu a sua origem. Lorem Ipsum vem das secções 1.10.32 e 1.10.33 do 'de Finibus Bonorum et Malorum' (Os Extremos do Bem e do Mal), por Cícero, escrito a 45AC. Este livro é um tratado na teoria da ética, muito popular durante a Renascença. A primeira linha de Lorem Ipsum, 'Lorem ipsum dolor sit amet...' aparece de uma linha na secção 1.10.32.";

		this.categories = [];
		window.markers = [];

		this.categories[3] = 	[
							{'id':0,"coord":"40.198937,-8.432449","nome":"Hotel Quinta das Lágrimas","morada":"Rua António Augusto Gonçalves 3041-901 Coimbra, Portugal","descricao":lorem1},
							{'id':0,"coord":"40.191135,-8.431076","nome":"Best Western Hotel Dom Luís","morada":"Rotunda Da Ponte Rainha Santa Isabel 3040-091 Coimbra","descricao":lorem2},
							{'id':0,"coord":"40.206738,-8.426527","nome":"Hotel Ibis","morada":"Avenida Emidio Navarro n°70, Edificio Topazio 3000-150 Coimbra, Portugal +351 239 852 130","descricao":lorem1},
							{'id':0,"coord":"40.208377,-8.428415","nome":"Hotel Avenida","morada":"Avenida Emídio Navarro 37 3000-150 Coimbra, Portugal","descricao":lorem2}
							];
		this.categories[1] = [
							{'id':1,"coord":"40.213752,-8.410685","nome":"Garden Bar","morada":"Rua Doutor Manuel Rodrigues 10A","descricao":lorem1},
							{'id':1,"coord":"40.211589,-8.429954","nome":"Diligência Bar","morada":"Rua da Sofia","descricao":lorem2},
							{'id':1,"coord":"40.208508,-8.428494","nome":"Fangas Mercearia Bar","morada":"Rua dos Esteireiros 14","descricao":lorem1},
							];
		this.categories[2] = [
							{'id':2,"coord":"40.198937,-8.432449","nome":"Pizzaria Santa Clara","morada":"Santa Clara Coimbra 3041-901 Coimbra, Portugal","descricao":lorem1},
							{'id':2,"coord":"40.213358,-8.432614","nome":"Restaurante Nacional","morada":"Rua Mário Pais","descricao":lorem2},
							{'id':2,"coord":"40.203673,-8.433972","nome":"Restaurante Tricana","morada":"Avenida João das Regras 3000-150 Coimbra, Portugal +351 239 852 130","descricao":lorem1},
							{'id':2,"coord":"40.199101,-8.442099","nome":"O observatorio","morada":"Santa Clara 3000-150 Coimbra, Portugal","descricao":lorem2}
							];
		this.categories[0] = [
							{'id':3,"coord":"40.200183,-8.43923","nome":"Café XPTO","morada":"Praceta José de Campos Contente AC","descricao":lorem1},
							{'id':3,"coord":"40.20169,-8.46558","nome":"Café O Sonho","morada":"Rua Infante Dom Henrique 6 3045, Portugal","descricao":lorem2},
							{'id':3,"coord":"40.206738,-8.426527","nome":"Café Sé Velha","morada":"Rua Joaquim António de Aguiar 130","descricao":lorem1},
							{'id':3,"coord":"40.208377,-8.428415","nome":"Café Orly","morada":"Rua Travessa 21","descricao":lorem2}
							];

		// Enable the visual refresh
		
	},

	initGoogleMaps: function() {
		google.maps.visualRefresh = true;
		
		var mapOptions = {
	    	zoom: 13,
	    	center: new google.maps.LatLng(40.20346,-8.447212),
	   		mapTypeId: google.maps.MapTypeId.ROADMAP,
	   		mapTypeControl: true,
		    mapTypeControlOptions: {
		        style: google.maps.MapTypeControlStyle.VERTICAL_BAR,
		        position: google.maps.ControlPosition.RIGHT_BOTTOM
		    },
		    panControl: true,
		    panControlOptions: {
		        position: google.maps.ControlPosition.LEFT_CENTER
		    },
		    zoomControl: true,
		    zoomControlOptions: {
		        style: google.maps.ZoomControlStyle.LARGE,
		        position: google.maps.ControlPosition.LEFT_CENTER
		    },
		    scaleControl: true,
		    scaleControlOptions: {
		        position: google.maps.ControlPosition.LEFT_CENTER
		    },
		    streetViewControl: true,
		    streetViewControlOptions: {
		        position: google.maps.ControlPosition.LEFT_CENTER
		    }
	  	};

	  	window.onspotMap = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);

	  	window.onspot.addMarkersByCategories(0);
		
	},

	addMarkersByCategories: function() {

		console.log(selectedCategories);
		console.log("adding markers");


		this.removeAllMarkers(window.onspotMap);

		for(var index in this.categories) {
			if(selectedCategories[index] == 1) {
				for(var p in this.categories[index]) {
					this.addMarker(this.categories[index][p]);
				}
			}
		}

		var bounds = new google.maps.LatLngBounds();

		for(var i = 0; i < markerBounds.length; i++) {
			bounds.extend(markerBounds[i]);
		}

		onspotMap.fitBounds(bounds);

		
	},

	removeAllMarkers: function() {
		this.setAllMap(null);
		markerBounds = [];
	},

	// Sets the map on all markers in the array.
	setAllMap: function(map){
	  for (var i = 0; i < markers.length; i++) {
	    window.markers[i].setMap(map);
	  }
	},

	addMarker: function(obj) {

		var coordsSplited = obj.coord.split(',');
	  	var myLatlng = new google.maps.LatLng(coordsSplited[0],coordsSplited[1]);

	  	markerBounds.push(new google.maps.LatLng(coordsSplited[0],coordsSplited[1]));
	  	
		var contentString = '<div id="content">'+
	      '<div id="siteNotice">'+
	      '</div>'+
	      '<h1 id="firstHeading" class="firstHeading">' + obj.nome + '</h1>'+
	      '<div id="bodyContent">'+
	      '<p><b>' + obj.nome + '</b>, ' + obj.descricao + ' </p>'+
	      '</div>'+
	      '</div>';


	  var marker = new google.maps.Marker({
	      position: myLatlng,
		  map: window.onspotMap,
	      title: obj.nome
	  });

	  /*
	  if(obj.id == 0) {
	  	marker.setIcon("http://mapicons.nicolasmollet.com/wp-content/uploads/mapicons/shape-default/color-ff8a22/shapecolor-color/shadow-1/border-dark/symbolstyle-white/symbolshadowstyle-dark/gradient-no/sponge.png");
	  } else if(obj.id == 2) {
	  	marker.setIcon("http://mapicons.nicolasmollet.com/wp-content/uploads/mapicons/shape-default/color-36ff24/shapecolor-color/shadow-1/border-dark/symbolstyle-white/symbolshadowstyle-dark/gradient-no/sponge.png");
	  } else if(obj.id == 1) {
	  	marker.setIcon("http://mapicons.nicolasmollet.com/wp-content/uploads/mapicons/shape-default/color-333333/shapecolor-color/shadow-1/border-dark/symbolstyle-white/symbolshadowstyle-dark/gradient-no/bar_coktail.png");
	  } else if(obj.id == 3) {
	  	marker.setIcon("http://mapicons.nicolasmollet.com/wp-content/uploads/mapicons/shape-default/color-2663ff/shapecolor-color/shadow-1/border-dark/symbolstyle-white/symbolshadowstyle-dark/gradient-no/coffee.png");
	  }
	  */

	  console.log(marker);

	  google.maps.event.addListener(marker, 'click', function() {
	  	if(infowindow) {
	  		console.log("entrou");
	  		infowindow.close();
	  	} 

	  	var infowindow = new google.maps.InfoWindow({
	      content: contentString
	  	});

	  	infowindow.open(onspotMap,marker);

	  	$('#details').html("<h2  style='color:#f3f3f3;'> Detalhes </h2> <h4 style='color:#f3f3f3;'>Nome</h4>" + obj.nome + "<h4 style='color:#f3f3f3;'>Descricao</h4>" + obj.descricao + "<h4 style='color:#f3f3f3;'>Morada</h4>" + obj.morada + "<h4 style='color:#f3f3f3;'>GPS</h4>" + obj.coord);
 		$('#details_container').show();
 	  });

	  window.markers.push(marker);
	}
}


$(document).ready(function() {
	var onspotMap;
	onspot.initialize();

});