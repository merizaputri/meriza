$(document).ready(function() {
		$("#proses").click( function(e){
			e.preventDefault();
			var awal = $("#tgl_awal").val();
			var akhir = $("#tgl_akhir").val();
			//alert(awal+''+akhir);
			if(awal==''){
				$('#required').show();
			}else if(akhir==''){
				$('#required').show();
			}else{
				$('#lg-form').hide();
				get_news(awal,akhir);
			}
		});


function get_news(awal,akhir){
	var serviceURL = "http://merizaoffice.com/mobile_project/";
	var SistemPakar;
	$.ajax({
				type : 'GET',
				url : serviceURL + 'laporan.php',
				async: true,
				data: {
					tgl_awal: awal,
					tgl_akhir: akhir
				},
				beforeSend: function(x) {
					if(x && x.overrideMimeType) {
      					 x.overrideMimeType("application/j-son;charset=UTF-8");
      				}
				},				
				dataType : 'json',
				success : function(data){
						SistemPakar = data.items;
						if(SistemPakar==''){
							$('#loading_panel').hide();
							$('#empty').show();
						}else{
							//alert("else");
							$('#loading_panel').hide();
							$('#tampilData').show();
							jml=0;
							$.each(SistemPakar, function(index, loaddata) {
								var data = loaddata.id;
								var nama_tamu = loaddata.nama_tamu;
								var tgl_in = loaddata.tgl_in;	
								var waktu_checkout = loaddata.waktu_checkout;	
								var tagihan = loaddata.tagihan;
								var a = parseInt(tagihan)
								jml=jml+a;
								//alert(jml);
							$('#sispakList').append(
								'<li><a href="http://merizaoffice.com/mobile_project/detail_laporan.html?id=' + loaddata.id + '" data-ajax="false">' +
								'<h4>' + loaddata.nama_tamu +'</h4>' +
								'<p>' + loaddata.tgl_in +'</p>' +
								'<p>' + loaddata.waktu_checkout +'</p>' +
								'<p>' + loaddata.tagihan +'</p>' );
							});
							$('#jml').show();
							$('#hasil').append(
								'<li> <br>' +
								'<h2> Total Pendapatan : Rp.'+jml+ '</h2>' );
							
							$('#sispakList').listview('refresh');
							
						}
				},
				error: function(jqXHR, exception) {
					//$('#loading_panel').hide();
					//$('#conn_failed').show();
					alert("error");
				}
		});	
}
	
});











