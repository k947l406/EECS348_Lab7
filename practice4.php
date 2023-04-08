<?php
echo "<table border =\"1\" style='border-collapse: collapse'>";
	for ($row=1; $row <= $_POST["size"]; $row++) { 
		echo "<tr> \n";
		for ($col=1; $col <= $_POST["size"]; $col++) { 
		   $p = $col * $row;
		   echo "<td>$p</td> \n";
		   	}
	  	    echo "</tr>";
		}
		echo "</table>";
?>
