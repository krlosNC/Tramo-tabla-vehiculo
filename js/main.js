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


