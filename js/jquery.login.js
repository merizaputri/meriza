$(document).ready(function() {
	
	removeSession();
	
	$("#login").click(function(e){
		$('#formlogin').hide();
		$('#infologin').show();
		
        e.preventDefault();
		var nip		= document.getElementById('nip').value
		var password	= document.getElementById('password').value
		var dataString	= 'nip='+ nip + '&password=' + password
		$.ajax({
			url:'http://localhost/mobile/login.php',
			dataType:'jsonp',
			timeout: 15000,
			cache: false,
			data: dataString,
			success:function(response){
				$('#infologin').hide();
				for(var i=0; i<response.length; i++){
					
						var str,str2,str3,str4 = "";
						str		= response[i].NIP;
						str2	= response[i].JABATAN;
						str3	= response[i].NAMA;
				
						str4	= response[i].DESC_LOGIN;
						
						
					if(str=='-'){
						$('#wrong_password').show();
					}else{
						
						sessionStorage.setItem('nip',str);
						sessionStorage.setItem('id_jabatan',str2);
						sessionStorage.setItem('nama',str3);
						
						
						$.mobile.changePage($(document.location.href="admin.html"), 'slide');
					} 
				}
					
			},
			error: function (xhr, ajaxOptions, thrownError) {
				if(thrownError==="timeout") {
					$('#infologin').hide();
					$('#connection_failed').show();
				} else {
					$('#infologin').hide();
					$('#connection_failed').show();
				}
			}
		}); //Tutup Ajax
	
	
	}); //Tutup Button Click
	
}); //Tutup Document Ready


function removeSession(){
	sessionStorage.removeItem('nip');
	sessionStorage.removeItem('id_jabatan');
	sessionStorage.removeItem('nama');

}
	
function LoadingPanel(){
	$.mobile.changePage( "loading.html", { 
	   role: "dialog" 
	});
}

function ClosePanel(){
	$('[data-role=dialog]').dialog( "close" );	
}

function callAdmin(){
	$.mobile.loadPage( "admin.html" );
}


function clearData(){
	$('#nip').val('');
	$('#id_jabatan').val('');
	$('#nama').val('');

}

