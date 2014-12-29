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
	$.ajax({
				type : 'GET',
				url : serviceURL + 'cek.php',
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
						//alert("sukses");
						
						SistemPakar = data.items;
						if(SistemPakar==''){
							$('#loading_panel').hide();
							$('#empty').show();
							//alert("kosong");
						}else{
							//alert("else");
							$('#loading_panel').hide();
							$('#tampilData').show();
							//jml>0;
							$.each(SistemPakar, function(index, loaddata) {
								var data = loaddata.id;
								var nama_tipekamar = loaddata.nama_tipekamar;	
								var no_kamar = loaddata.no_kamar;
								var tgl_in = loaddata.tgl_in;	
								// var tagihan = loaddata.tagihan;
								// var a = parseInt(tagihan)
								//jml=jml++;
								//alert(jml);
							$('#sispakList').append(
								'<h4>Nama Tamu :' + loaddata.id + '</h4>' +
								'<p>Tipe Kamar :' + loaddata.nama_tipekamar +'</p>' +
								'<p>Kamar	   :' + loaddata.no_kamar +'</p>' +
								'<p>Tgl Masuk	   :' + loaddata.tgl_in +'</p>' );
							});
							// $('#jml').show();
							// $('#hasil').append(
								// '<li> <br>' +
								//'<h2> Jumlah Kamar Terpakai : '+jml+ '</h2>' );
							
							//$('#sispakList').listview('refresh');
							
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









