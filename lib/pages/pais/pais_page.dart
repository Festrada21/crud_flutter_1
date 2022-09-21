import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class PaisPage extends StatefulWidget {
  @override
  State<PaisPage> createState() => _PaisPageState();
}

class _PaisPageState extends State<PaisPage> {
  final String baseURL = 'http://localhost:3000';
  late Map _data;
  late List _paisData;

  getPaises() async {
    final url = '$baseURL/api/paises';

    try {
      final respuesta = await http.get(Uri.parse(url));
      // debugPrint(respuesta.body);
      _data = jsonDecode(respuesta.body);
      setState(() {
        _paisData = _data['paises'];
      });

      // debugPrint(_paisData.first.toString());
    } catch (e) {
      debugPrint(e.toString());
    }
  }

  @override
  void initState() {
    super.initState();
    getPaises();
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        appBar: AppBar(title: Text('test')),
        body: ListView.builder(
          itemCount: _paisData == null ? 0 : _paisData.length,
          itemBuilder: (BuildContext context, int index) {
            return Card(
              child: Row(
                children: [
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Text(
                        '${_paisData[index]['PaisId']}-${_paisData[index]['Nombre']}'),
                  ),
                  Checkbox(
                      value: _paisData[index]['Habilitado'],
                      onChanged: ((value) {})),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Text('${_paisData[index]['FechaEdicion']}'),
                  ),
                ],
              ),
            );
          },
        ),
        // Text('test')
      ),
    );
  }
}
