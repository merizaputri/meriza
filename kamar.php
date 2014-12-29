<?php
include "server.php";


    $data = pg_query("SELECT no_kamar, nama_tipekamar,  harga, status
			 from tipe_kamar, kamar where kamar.kd_tipekamar=tipe_kamar.kd_tipekamar order by no_kamar ");

    $json = '{"items":[ ';
    while($x = pg_fetch_array($data)){
    $json .= '{';
    $json .= '"id":"'.$x['no_kamar'].'",
        "nama_tipekamar":"'.strip_tags(trim($x['nama_tipekamar'])).'",
        "status":"'.strip_tags(trim($x['status'])).'"
        },';
    }
    $json = substr($json,0,strlen($json)-1);
    $json .= ']';
    
    $json .= '}';
    echo $json;
?>