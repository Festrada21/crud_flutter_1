import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

import '../models/pais.dart';

class ApiService {
  final String baseURL = 'http://localhost:3000';

  getPaises() async {
    final url = '$baseURL/api/paises';
    final respuesta = await http.get(Uri.parse(url));

    if (respuesta.statusCode == 200) {
      final resp = respuesta.body;
      debugPrint(resp);
      return resp;
    } else {
      throw Exception('Failed to load pais');
    }
  }
}
