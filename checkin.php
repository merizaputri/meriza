<?php
include "server.php";


    $data = pg_query("select check_in.id_checkin, tamu.nama_tamu, tamu.no_identitas,tamu.alamat,tipe_kamar.nama_tipekamar , check_in.tgl_in, check_in.tgl_out, check_in.status
			from tamu, check_in, tipe_kamar where tamu.kd_tamu=check_in.kd_tamu and tipe_kamar.kd_tipekamar=check_in.kd_tipekamar order by id_checkin");

    $json = '{"items":[ ';
    while($x = pg_fetch_array($data)){
    $json .= '{';
    $json .= '"id":"'.$x['id_checkin'].'",
        "nama_tamu":"'.strip_tags(trim($x['nama_tamu'])).'",
        "no_identitas":"'.strip_tags(trim($x['no_identitas'])).'",
        "alamat":"'.strip_tags(trim($x['alamat'])).'",
        "nama_tipekamar":"'.strip_tags(trim($x['nama_tipekamar'])).'",
        "tgl_in":"'.strip_tags(trim($x['tgl_in'])).'",
        "tgl_out":"'.strip_tags(trim($x['tgl_out'])).'",
        "status":"'.strip_tags(trim($x['status'])).'"
        },';
    }
    $json = substr($json,0,strlen($json)-1);
    $json .= ']';
    
    $json .= '}';
    echo $json;
?>