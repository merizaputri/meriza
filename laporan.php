<?php
include "server.php";

	$awal=$_GET['tgl_awal'];
    $akhir=$_GET['tgl_akhir'];
	
		
    $data = pg_query("select check_out.id_checkout,tamu.nama_tamu, kamar.no_kamar, check_in.tgl_in,check_out.waktu_checkout, kamar_checkin.lama, tipe_kamar.harga, kamar_checkin.total_makan, kamar_checkin.total_laundry, check_out.tagihan
			from tamu, kamar, check_in, kamar_checkin, tipe_kamar, check_out
			where tamu.kd_tamu=check_in.kd_tamu and kamar.no_kamar=kamar_checkin.no_kamar and kamar.kd_tipekamar=tipe_kamar.kd_tipekamar
			and kamar_checkin.id_checkin=check_in.id_checkin and kamar_checkin.id_in=check_out.id_in and check_out.waktu_checkout between '$awal' and '$akhir' ");

    $json = '{"items":[ ';
    while($x = pg_fetch_array($data)){
    $json .= '{';
    $json .= '"id":"'.$x['id_checkout'].'",
        "nama_tamu":"'.strip_tags(trim($x['nama_tamu'])).'",
        "no_kamar":"'.strip_tags(trim($x['no_kamar'])).'",
        "tgl_in":"'.strip_tags(trim($x['tgl_in'])).'",
        "lama":"'.strip_tags(trim($x['lama'])).'",
        "harga":"'.strip_tags(trim($x['harga'])).'",
        "waktu_checkout":"'.strip_tags(trim($x['waktu_checkout'])).'",
        "total_makan":"'.strip_tags(trim($x['total_makan'])).'",
        "total_laundry":"'.strip_tags(trim($x['total_laundry'])).'",
        "tagihan":"'.strip_tags(trim($x['tagihan'])).'"
        },';
    }
    $json = substr($json,0,strlen($json)-1);
    $json .= ']';
    
    $json .= '}';
    echo $json;
?>