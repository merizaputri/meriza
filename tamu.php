<?php
include "server.php";

 $data=pg_query("SELECT tamu.kd_tamu, tamu.nama_tamu, tamu.no_identitas, tamu.alamat, tamu.pekerjaan, tamu.telfon from tamu   ");
 
	$json = '{"items":[ ';
    while($x = pg_fetch_array($data)){
    $json .= '{';
    $json .= '"id":"'.$x['kd_tamu'].'",
        "nama_tamu":"'.strip_tags(trim($x['nama_tamu'])).'",
        "no_identitas":"'.strip_tags(trim($x['no_identitas'])).'",
		"alamat":"'.strip_tags(trim($x['alamat'])).'",
		 "pekerjaan":"'.strip_tags(trim($x['pekerjaan'])).'",
        "telfon":"'.strip_tags(trim($x['telfon'])).'"
        },';
    }
    $json = substr($json,0,strlen($json)-1);
    $json .= ']';
    
    $json .= '}';
    echo $json;
?>