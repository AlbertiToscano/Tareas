package com.generation;

import java.util.Scanner;

/**
 * Programa que simula el juego de piedra, papel o tijeras, recibe un imput por
 * medio de la consola a través de un Scanner, después válida si la entrada es
 * adecuada y si no informa que se debe volver a escribir, posteriormente
 * realiza una comparación de los imputs por medio de un switch que determina al
 * jugador ganador
 */
public class EjercicioCodigoDeOtros4 {
	public static void main(String[] args) { // añadí el metodo main para poder ejecutar el programa

		Scanner scanner = new Scanner(System.in); // añadí System.in para poder leer inputs desde la consola, también
													// cambie el nombre del scanner para que sea mas descriptivo

		System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
		boolean check = false;
		String j1 = "";
		String j2 = "";
		while (check == false) { // añadí un verificador de entrada para asegurarme de que el usuario escriba
									// sólo opciones válidas
			j1 = scanner.nextLine();
			if (j1.equalsIgnoreCase("piedra") || j1.equalsIgnoreCase("papel") || j1.equalsIgnoreCase("tijeras")) {
				check = true;
			} else {
				System.out.println("Entrada invalida, por favor vuelve a intentar");
			}
		}
		check = false;
		System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): "); // cambié el numero de jugador
		// eliminé el segundo Scanner ya que no es necesario.
		while (check == false) {
			j2 = scanner.nextLine();
			if (j2.equalsIgnoreCase("piedra") || j2.equalsIgnoreCase("papel") || j2.equalsIgnoreCase("tijeras")) {
				check = true;
			} else {
				System.out.println("Entrada invalida, por favor vuelve a intentar");
			}
		}

		if (j1.equals(j2)) { // eliminé el parentesis extra y añadí el método equals para realizar la
								// comparación de Strings
			System.out.println("Empate");
		} else {
			int g = 2;
			switch (j1) {
			case "piedra":
				if (j2.equalsIgnoreCase("tijeras")) {
					g = 1;
				}
				break;

			case "papel":
				if (j2.equalsIgnoreCase("piedra")) {
					g = 1;
				}
				break;
			case "tijeras": // añadí la s para que coincidiera
				if (j2.equalsIgnoreCase("papel")) {
					g = 1;
				}
				break; // eliminé la linea de default ya que no la consideró necesaria en este caso
			}
			System.out.println("Gana el jugador " + g);
			scanner.close();// finalicé el scanner al terminar de utilizarlo
		}
	}

}
