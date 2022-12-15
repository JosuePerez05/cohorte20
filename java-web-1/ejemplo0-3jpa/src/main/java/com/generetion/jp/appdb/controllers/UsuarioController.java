package com.generetion.jp.appdb.controllers;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.generetion.jp.appdb.models.UsuarioModel;
import com.generetion.jp.appdb.services.UsuarioService;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
	@Autowired
	UsuarioService usuarioServicio;

	@GetMapping()
	public ArrayList<UsuarioModel> ObtenerUsuarios() {
		return usuarioServicio.obtenerUsuarios();
	}

	@PostMapping()
	public UsuarioModel guardarUsuario(@RequestBody UsuarioModel usuario) {
		return this.usuarioServicio.guardarUsuario(usuario);
	}
	@GetMapping("/query")
	public ArrayList<UsuarioModel> obtenerUsuarioPorPrioridad(@RequestParam("prioridad")Integer prioridad){
		return this.usuarioServicio.obtenerPorPrioridad(prioridad);
	}
	@GetMapping(path="/{id}")
	public Optional<UsuarioModel> ObtenerUsuarioPorId(@PathVariable("id") Long id){
		return this.usuarioServicio.obtenerPorId(id);
	}
	@DeleteMapping("/{id}")
	public String  eliminarPorId(@PathVariable("id")Long id){
	boolean chek=	this.usuarioServicio.eliminarUsuario(id);
	if(chek) {
		return "Se elimino el usuario"+id;
		
	}else {
		return "No se elimino el usuario" + id;
	}
		 
	}
}
