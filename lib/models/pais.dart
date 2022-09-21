class Pais {
  Pais({
    required this.paisId,
    required this.nombre,
    required this.fechaEdicion,
    required this.habilitado,
  });

  int paisId;
  String nombre;
  DateTime fechaEdicion;
  bool habilitado;
}

// class Pais {
//   final int paisId;
//   final String nombre;
//   final DateTime fechaEdicion;
//   final bool habilitado;

//   Pais({
//     required this.paisId,
//     required this.nombre,
//     required this.fechaEdicion,
//     required this.habilitado,
//   });

//   factory Pais.fromJson(Map<String, dynamic> json) => Pais(
//         paisId: json["PaisId"],
//         nombre: json["Nombre"],
//         fechaEdicion: DateTime.parse(json["FechaEdicion"]),
//         habilitado: json["Habilitado"],
//       );
// }
