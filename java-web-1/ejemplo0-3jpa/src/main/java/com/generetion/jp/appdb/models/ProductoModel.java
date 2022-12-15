package com.generetion.jp.appdb.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
@Entity
@Table(name = "producto")
public class ProductoModel {
	
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(unique = true, nullable = false)
private Long id;
private String nombre;
/*		relaciones		*/
@ManyToOne/// muchos productos con un usuario 
private UsuarioModel usuario;



public UsuarioModel getUsuario() {
	return usuario;
}


public void setUsuario(UsuarioModel usuario) {
	this.usuario = usuario;
}


public ProductoModel() {

}


public ProductoModel(Long id, String nombre) {

	this.id = id;
	this.nombre = nombre;
}


public Long getId() {
	return id;
}


public void setId(Long id) {
	this.id = id;
}


public String getNombre() {
	return nombre;
}


public void setNombre(String nombre) {
	this.nombre = nombre;
}










}