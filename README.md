# certificado

Esta aplicación realiza el registro de certificados otorgados por una institución, el cual es utilizado desde un navegador web.

Esta aplicación se compila desde los siguientes códigos fuente:
•	index.html -> Contiene la ejecución de la vista accesible por el usuario.
•	Main.mo -> contiene la definición del actor y los métodos expuestos por este canister.

Prerequisitos

Instalar IC SDK
Instalar Node.js

Ejecución
1.	Navegar en la ventana de comando a la carpeta donde se encuentran los archivos del proyecto.
2.	Inicia una instancia local del IC:
a.	dfx start --background
3.	Instala las dependencias del front end
a.	npm install
4.	Despliega el canister
a.	dfx deploy
5.	Accede en el navegador web a la dirección en la cual la aplicación está disponible
a.	echo "http://127.0.0.1:4943/?canisterId=$(dfx canister id www)"
