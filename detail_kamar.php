<?php
include "server.php";

	$no_kamar=$_GET["id"];
    $data = pg_query("SELECT kamar.no_kamar, tipe_kamar.nama_tipekamar, tipe_kamar.harga, kamar.status 
	from kamar, tipe_kamar where kamar.kd_tipekamar=tipe_kamar.kd_tipekamar and kamar.no_kamar='".$no_kamar."'");

    $json = '{"items":[ ';
    while($x = pg_fetch_array($data)){
    $json .= '{';
    $json .= '"id":"'.$x['no_kamar'].'",
        "no_kamar":"'.strip_tags(trim($x['no_kamar'])).'",
        "nama_tipekamar":"'.strip_tags(trim($x['nama_tipekamar'])).'",
        "harga":"'.strip_tags(trim($x['harga'])).'",
        "status":"'.strip_tags(trim($x['status'])).'"
        },';
    }
    $json = substr($json,0,strlen($json)-1);
    $json .= ']';
    
    $json .= '}';
    echo $json;
?>