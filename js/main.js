//__________________________________________________________________________//
//____________________________   GET    ____________________________________//
//__________________________________________________________________________//
class Flota {

  vehiculo = {
    _tipoVehiculo: "",
    _marcaVehiculo: "",
    _modeloVehiculo: 0,
    _numeroEjesVehiculo: 0,
    _tipoTraccionVehiculo: "",
    _placaVehiculo: "",
    _placaTrailerVehiculo: "",
    _pesoVacioVehiculo: 0,
    _tipoCombustibleVehiculo: "",
    _numeroLicenciaVehiculo: "",
    _numeroSoatVehiculo: "",
    _fechaVencimientoSoat: 0,
    _numeroPolizaResponsabilidad: 0,
    _numeroTecnomecanicaVehiculo: 0,
    _fechaVencimientoTecnomecanica: 0
  };

  agregarVehiculo(tipo, marca, modelo, numEjes, traccion, placa, placaSR, pesoVH, combustible, licenciaVH, soatVH, venciSoat, polizaRes, tecnoVH, venciTecno) {

    if(tipo=="", marca=="" , modelo==0 , numEjes==0 , traccion=="" , placa=="" , placaSR=="" , pesoVH==0 , combustible=="" , licenciaVH=="" , soatVH=="" , venciSoat==0 , polizaRes==0 , tecnoVH==0 , venciTecno==0){

      alert("Ingrese todos los datos")

    }else{
    this.vehiculo._tipoVehiculo = tipo;
    this.vehiculo._marcaVehiculo = marca;
    this.vehiculo._modeloVehiculo = modelo;
    this.vehiculo._numeroEjesVehiculo = numEjes;
    this.vehiculo._tipoTraccionVehiculo = traccion;
    this.vehiculo._placaVehiculo = placa;
    this.vehiculo._placaTrailerVehiculo = placaSR;
    this.vehiculo._pesoVacioVehiculo = pesoVH;
    this.vehiculo._tipoCombustibleVehiculo = combustible;
    this.vehiculo._numeroLicenciaVehiculo = licenciaVH;
    this.vehiculo._numeroSoatVehiculo = soatVH;
    this.vehiculo._fechaVencimientoSoat = venciSoat;
    this.vehiculo._numeroPolizaResponsabilidad = polizaRes;
    this.vehiculo._numeroTecnomecanicaVehiculo = tecnoVH;
    this.vehiculo._fechaVencimientoTecnomecanica = venciTecno;

    console.table(this.getVehiculo);

    }
  
  }

  get getVehiculo(){
    return this.vehiculo
  }

}

var instmisObjetos = new Flota();

/*
var db = openDatabase("itemDB", "1.0", "itemDB", 65535);

$(function () {
  // crear la tabla de productos
  $("#crear").click(function () {
    db.transaction(function (transaction) {
      var sql =
        "CREATE TABLE vehiculos " +
        "(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, " +
        "tipo VARCHAR(10) NOT NULL, " +
        "marca VARCHAR(15) NOT NULL," +
        "modelo NUMBER(4) NOT NULL," +
        "numEjes NUMBER(10) NOT NULL," +
        "traccion VARCHAR(3) NOT NULL, " +
        "placa VARCHAR(10) NOT NULL," +
        "placaSR VARCHAR(10) NOT NULL," +
        "pesoVH NUMBER(10) NOT NULL," +
        "combustible VARCHAR(10) NOT NULL, " +
        "licenciaVH NUMBER(20) NOT NULL," +
        "soatVH NUMBER(20) NOT NULL," +
        "venciSoat NUMBER(10) NOT NULL," +
        "polizaRes NUMBER(20) NOT NULL," +
        "tecnoVH NUMBER(20) NOT NULL, " +
        "venciTecno NUMBER(10) NOT NULL)";
      transaction.executeSql(
        sql,
        undefined,
        function () {
          alert("Tabla vehículo creada satisfactoriamente");
        },
        function (transaction, err) {
          alert(err.message);
        }
      );
    });
  });

  //insertar registros
  $("#insertar").click(function () {
    var tipo = $("#select_tipo_vh").val();
    var marca = $("#text_marca_vh").val();
    var modelo = $("#number_modelo_vh").val();
    var numEjes = $("#number_ejes_vh").val();
    var traccion = $("#select_traccion_vh").val();
    var placa = $("#text_placa_vh").val();
    var placaSR = $("#text_placa_SR_vh").val();
    var pesoVH = $("#number_peso_vh").val();
    var combustible = $("#select_combustible_vh").val();
    var licenciaVH = $("#number_licencia_vh").val();
    var soatVH = $("#number_soat_vh").val();
    var venciSoat = $("#date_vencimiento_soat_vh").val();
    var polizaRes = $("#number_poliza_vh").val();
    var tecnoVH = $("#number_tecnomecanica_vh").val();
    var venciTecno = $("#date_vencimiento_tecnomecanica_vh").val();

    db.transaction(function (transaction) {
      var sql =
        "INSERT INTO vehiculos(tipo, marca, modelo, numEjes, traccion, placa, placaSR, pesoVH, combustible, licenciaVH, soatVH, venciSoat, polizaRes, tecnoVH, venciTecno) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
      transaction.executeSql(
        sql,
        [
          tipo,
          marca,
          modelo,
          numEjes,
          traccion,
          placa,
          placaSR,
          pesoVH,
          combustible,
          licenciaVH,
          soatVH,
          venciSoat,
          polizaRes,
          tecnoVH,
          venciTecno,
        ],
        function () {},
        function (transaction, err) {
          alert(err.message);
        }
      );
    });
    cargarDatos();
  });

  function cargarDatos() {
    $("#listaProductos").children().remove();
    db.transaction(function (transaction) {
      var sql = "SELECT * FROM vehiculos ORDER BY id DESC";
      transaction.executeSql(
        sql,
        undefined,
        function (transaction, result) {
          if (result.length) {
            for (var i = 0; i < result.length; i++) {
              var id = id;
              var tipo = tipo;
              var marca = marca;
              var modelo = modelo;
              var numEjes = numEjes;
              var traccion = traccion;
              var placa = placa;
              var placaSR = placaSR;
              var pesoVH = pesoVH;
              var combustible = combustible;
              var licenciaVH = licenciaVH;
              var soatVH = soatVH;
              var venciSoat = venciSoat;
              var polizaRes = polizaRes;
              var tecnoVH = tecnoVH;
              var venciTecno = venciTecno;
              $("#listaProductos").append(
                console.log(
                  id,
                  tipo,
                  marca,
                  modelo,
                  numEjes,
                  traccion,
                  placa,
                  placaSR,
                  pesoVH,
                  combustible,
                  licenciaVH,
                  soatVH,
                  venciSoat,
                  polizaRes,
                  tecnoVH,
                  venciTecno
                )
              );
            }
          } else {
            console.error("no ay vehiculos registrados");
          }
        },
        function (transaction, err) {
          alert(err.message);
        }
      );
    });
  }

  // Para borrar toda la lista de Registros
  $("#borrarTodo").click(function () {
    if (
      !confirm(
        "Está seguro de borrar la tabla?, los datos se perderán permanentemente",
        ""
      )
    )
      return;
    db.transaction(function (transaction) {
      var sql = "DROP TABLE vehiculos";
      transaction.executeSql(sql, undefined, function () {
        alert(
          "Tabla borrada satisfactoriamente, Por favor, actualice la página"
        );
      });
    });
  });
});
*/
