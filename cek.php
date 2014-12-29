<?php
include "server.php";

	$awal=$_GET['tgl_awal'];
    $akhir=$_GET['tgl_akhir'];
	
		
    $data = pg_query("select tipe_kamar.nama_tipekamar, kamar.no_kamar, tamu.nama_tamu, check_in,tgl_in
				from kamar, tipe_kamar,tamu, check_in,kamar_checkin
				where kamar.kd_tipekamar=tipe_kamar.kd_tipekamar
				and tamu.kd_tamu=check_in.kd_tamu and kamar_checkin.id_checkin=check_in.id_checkin
				and kamar.no_kamar=kamar_checkin.no_kamar 
				and check_in.status='IN'
				and check_in.tgl_in between '$awal' and '$akhir'");

    $json = '{"items":[ ';
    while($x = pg_fetch_array($data)){
    $json .= '{';
    $json .= '"id":"'.$x['nama_tamu'].'",
        "no_kamar":"'.strip_tags(trim($x['no_kamar'])).'",
        "nama_tipekamar":"'.strip_tags(trim($x['nama_tipekamar'])).'",
		"tgl_in":"'.strip_tags(trim($x['tgl_in'])).'"
        },';
    }
    $json = substr($json,0,strlen($json)-1);
    $json .= ']';
    
    $json .= '}';
    echo $json;
?>