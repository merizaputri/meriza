$(document).ready(function() {

$('#loading_panel').show();
get_news();

function get_news(){
	var serviceURL = "http://merizaoffice.com/mobile_project/";
	var SistemPakar;
	$.ajax({
				type : 'GET',
				url : serviceURL + 'checkin.php',
				async: true,
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
							$('#loading_panel').hide();
							$('#tampilData').show();
							$.each(SistemPakar, function(index, loaddata) {
								var data = loaddata.id;
								var nama_tamu = loaddata.nama_tamu;
								var nama_tipekamar = loaddata.nama_tipekamar;
								var status = loaddata.status;
							$('#sispakList').append(
								'<li><a href="http://merizaoffice.com/mobile_project/detail_checkin.html?id=' + loaddata.id + '" data-ajax="false">' +
								'<h4>' + loaddata.nama_tamu + '</h4>' +
								'<p>' + loaddata.nama_tipekamar +'</p>' +
								'<p>' + loaddata.status +'</p>' );
							});
							$('#sispakList').listview('refresh');
						}
				},
				error: function(jqXHR, exception) {
					$('#loading_panel').hide();
					$('#conn_failed').show();
				}
		});	
}
	

}); //Tutup Document Ready









