$(document).ready(function() {
	$('#loading_panel').show();
	
	var idData = getUrlVars()["id"];
	var serviceURL = "http://merizaoffice.com/mobile_project/";
	$.ajax({
				type : 'GET',
				url : serviceURL + 'detail_kamar.php?id='+idData,
				async: true,
				beforeSend: function(x) {
					if(x && x.overrideMimeType) {
      					 x.overrideMimeType("application/j-son;charset=UTF-8");
      				}
				},
				dataType : 'json',
				success : function(data){
						var GetData = data.items;
						if(GetData==''){
							$('#loading_panel').hide();
							$('#not_found').show();
						}else{
							
							$('#loading_panel').hide();
							$('#allData').show();
							
							$.each(GetData, function(index, loaddata) {
								var no_kamar = loaddata.no_kamar;
								var nama_tipekamar = loaddata.nama_tipekamar;
								var harga = loaddata.harga;
								var status = loaddata.status;

								$('#no_kamar').text(no_kamar);
								$('#nama_tipekamar').text(nama_tipekamar);
								$('#harga').text(harga);
								$('#status').text(status);						


							});
						}
				},
				error : function(){
					$('#loading_panel').hide();
					$('#conn_failed').show();
				}
		});
});

function getUrlVars() {
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for(var i = 0; i < hashes.length; i++)
		{
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars;
	}

