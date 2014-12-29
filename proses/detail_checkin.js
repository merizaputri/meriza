$(document).ready(function() {
	$('#loading_panel').show();
	
	var idData = getUrlVars()["id"];
	var serviceURL = "http://merizaoffice.com/mobile_project/";
	$.ajax({
				type : 'GET',
				url : serviceURL + 'detail_checkin.php?id='+idData,
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
								var nama_tamu = loaddata.nama_tamu;
								var no_identitas = loaddata.no_identitas;
								var alamat = loaddata.alamat;
								var nama_tipekamar = loaddata.nama_tipekamar;
								var tgl_in = loaddata.tgl_in;
								var tgl_out = loaddata.tgl_out;
								var status = loaddata.status;

								
								$('#nama_tamu').text(nama_tamu);
								$('#no_identitas').text(no_identitas);
								$('#alamat').text(alamat);					
								$('#nama_tipekamar').text(nama_tipekamar);
								$('#tgl_in').text(tgl_in);
								$('#tgl_out').text(tgl_out);
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

