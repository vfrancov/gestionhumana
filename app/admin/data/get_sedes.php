<?php

include "../../../config/constantes.php";
include APP_PATH . "/config/connect.php";

session_start();

checksession();

echo getDataFromTable(
    "gh_sedes",
    array('id_auto', 'nombre_sede', 'ciudad', 'direccion', 'telefono_fijo'),
    "id_auto = '". esc_sql($_GET['record']). "'"
);