$(document).ready(function() {
	$('#loading_panel').show();
	
	var idData = getUrlVars()["id"];
	var serviceURL = "http://merizaoffice.com/mobile_project/";
	$.ajax({
				type : 'GET',
				url : serviceURL + 'detail_laporan.php?id='+idData,
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
								var id_checkout = loaddata.id_checkout;
								var nama_tamu = loaddata.nama_tamu;
								var nama_tipekamar = loaddata.nama_tipekamar;
								var no_kamar = loaddata.no_kamar;
								var tgl_in = loaddata.tgl_in;
								var waktu_checkout = loaddata.waktu_checkout;
								var lama = loaddata.lama;
								var total_makan = loaddata.total_makan;
								var total_laundry = loaddata.total_laundry;
								var tagihan = loaddata.tagihan;
	
								$('#id_checkout').text(id_checkout);
								$('#nama_tamu').text(nama_tamu);
								$('#nama_tipekamar').text(nama_tipekamar);
								$('#no_kamar').text(no_kamar);
								$('#tgl_in').text(tgl_in);						
								$('#waktu_checkout').text(waktu_checkout);
								$('#lama').text(lama);
								$('#total_makan').text(total_makan);
								$('#total_laundry').text(total_laundry);
								$('#tagihan').text(tagihan);					


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

