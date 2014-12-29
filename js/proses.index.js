$(document).ready(function() {
		
		sessionStorage.removeItem('NoKartu');
		sessionStorage.removeItem('Email');
		sessionStorage.removeItem('Tipe');
		sessionStorage.removeItem('Nama');
		sessionStorage.removeItem('Telp');
		sessionStorage.removeItem('IDPelanggan');
		
		$("#buka_web").click(function() {
			window.open('http://www.telkomvision.com', '_blank', 'location=yes');
		});
		$("#buka_fb").click(function() {
			window.open('http://www.facebook.com/pages/TELKOMVision/59163757459', '_blank', 'location=yes');
		});
		$("#buka_twitter").click(function() {
			window.open('http://twitter.com/telkomvision', '_blank', 'location=yes');
		});
		$("#buka_youtube").click(function() {
			window.open('http://www.youtube.com/user/TelkomVisionTV', '_blank', 'location=yes');
		});
});