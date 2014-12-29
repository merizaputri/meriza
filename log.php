<?php
session_start();
include 'server.php';
	
		$nik = $_REQUEST['nik'];
		$password = $_REQUEST['password'];
		$sql1="SELECT nik,  password, jabatan FROM karyawan WHERE jabatan='manager' and nik='$nik' AND password='$password'";
			$cek1 = pg_query ($sql1); 
		if(pg_num_rows ($cek1) == 1)
		{
			$c1 = pg_fetch_array($cek1);
			$_SESSION['nik'] = $c1['nik'];
			$_SESSION['status'] = 'manager';
			$json = '{"items":[ ';
						$json .= '{';
						$json .= '"ret":"1"
							}';
						$json .= ']';
						
						$json .= '}';
						echo $json;
		}
			
		else{
			
			$json = '{"items":[ ';
						$json .= '{';
						$json .= '"ret":"3"
							}';
						$json .= ']';
						
						$json .= '}';
						echo $json;		
			}
		
	
?>
