# React
Curso Práctico de React JS en @platzi 💚💚💚 https://platzi.com/clases/react-ejs/

/*Curso Práctico de React JS*/
	
	/*¿Qué es React JS?*/
		React es una librería desarrollada por Facebook que nos ayuda a construir interfaces de usuario interactivas para todo tipo de aplicaciones: web, móviles o de escritorio.
		Cada pequeña parte de nuestra página web la conoceremos como “Componente”. Cada componente se encargará de una función en específico. Además, podremos reutilizar nuestros componentes siempre que lo necesitemos.
		Al unir todos nuestros componentes tendremos una página web que nos permite cambiar, actualizar o eliminar elementos de forma muy sencilla.
		Nuestro profesor será Oscar Barajas: Frontend Developer en Platzi y uno de los líderes en la comunidad de Facebook Developer Circles.
	/*¿Qué es React JS?*/
	
	/*DOM, Virtual DOM y React DOM*/

		El DOM es el código HTML que se transforma en páginas web.
		Cada vez que cambiamos alguna parte del DOM, también estamos actualizando el HTML con el que interactúan nuestros usuarios. El problema es que todas las operaciones, comparaciones y actualizaciones en el DOM son muy costosas.
		El Virtual DOM es una herramienta que usan tecnologías como React y Vue para mejorar el rendimiento (performance) y velocidad de nuestras aplicaciones.
		Es una copia exacta del DOM, pero mucho más ligera, ya que los cambios no actualizan el verdadero HTML de nuestras páginas web. Gracias al Virtual DOM podemos hacer operaciones y comparaciones de forma sumamente rápida.
		Recuerda que los cambios en el Virtual DOM no afectan el HTML que ven los usuarios, así que debemos estar sincronizando constantemente las copias con el DOM. Pero no te preocupes, React DOM lo hace por nosotros.

	/*DOM, Virtual DOM y React DOM*/

	/*Create React App y Tipos de Componentes*/


		**Antes de todo instalar:
		 1. npx con ===> sudo npm install npx
		 2. npm install -g npx
		 3. npm i -g npm-upgrade

		Inicialización de un proyecto en React
		Creación de nuestro sitio web usando la plantilla por defecto de create-react-app:

		==> npx create-react-app nombreDeTuProyecto
		Iniciar el servidor de desarrollo:

		==>npm run start
		No olvides que puedes aprender a manejar de forma las diferentes herramientas de desarrollo en el Curso de Prework: Buenas Prácticas y Entorno de Desarrollo.

		==> code . (Permite Abrir el editor de código).

		Creación y Tipos de Componentes
		**Los nombres de nuestros componentes deben empezar con una letra mayúscula, al igual que cada nueva palabra del componente. Esto lo conocemos como Pascal Case o Upper Camel Case.**

		Los componentes Stateful son los más robustos de React. Los usamos creando clases que extiendan de React.Component. Nos permiten manejar estado y ciclo de vida (más adelante los estudiaremos a profundidad).

		/*Carpetas*/
			/*node_modules*/
				Contine todos los elementos que permiten trabajar con react, librerias(siempre debe estar en .gitinore).
			/*node_modules*/
			
			/*public*/
				"Todo lo que pasaremos a producción"
			/*public*/

			/*src*/
				**Es la carpeta más importante de todas**
				Aquí se encuentra toda la aplicacón.
			/*src*/

			/*src*/
				SE encuentra toda la configuración del proyecto.
			/*src*/
		/*Carpetas*/

			/*Componentes*/
		/*Stateful*/
			Componente Estructura de clase Componente mas robusto dentro de React.
			Manjea ciclo de vidad, eventos y estados.
		/*Stateful*/

		/*Stateless*/
			**Son lo más usados**
			No depende de tener un ciclo de vidad, ni un estado. Solo presenta lo que necesitamos.
		/*Stateless*/

		/*Presentational*/
			**No tiene estado**
			tiene un return explícito.
			Solo nos sirve para mostar partes muy pequeñas del html, no tienen lógica o propiedades.
		/*Presentational*/

	/*Componentes*/

	/*Create React App y Tipos de Componentes*/

	/*JSX: JavaScript + HTML*/

		Estamos acostumbrados a escribir código HTML en archivos .html y la lógica de JavaScript en archivos .js.

		React usa JSX: una sintaxis que nos permite escribir la estructura HTML y la lógica en JavaScript desde un mismo lugar: nuestros componentes.
		
		**Siempre debemos asigna los nombres de las clases para el uso de CSS como clasName**

		**Otra forma de un if**
				if(isTrue){
					<h4> Esto es verdadero</h4>
				}else{
					<h5>Soy False</h5>
				} 
			LO anterior es IGUAL A:
				{isTrue ?  <h4> Esto es verdadero</h4> : <h5>Soy False</h5>}

			Ó

				if(isTrue){
					<h4>Soy verdadero</h4>
				}
			LO anterior es IGUAL A:
				{isTrue && <h4>Soy verdadero</h4>}
		**Otra forma de un if**
		
	/*JSX: JavaScript + HTML*/

	/*Props: Comunicación entre Componentes*/

		Las Props son la forma de enviar y recibir información en nuestros componentes. Son la forma de comunicar cada componente con el resto de la aplicación. Son muy parecidas a los parámetros y argumentos de las funciones en cualquier lenguaje de programación.

	/*Props: Comunicación entre Componentes*/

	/*¿Qué son los métodos del ciclo vida?*/

		https://platzi.com/clases/1651-react-ejs/22576-que-son-los-metodos-del-ciclo-vida/

	/*¿Qué son los métodos del ciclo vida?*/

	/*State - Events*/
		"React nos permite responder a las interacciones de los usuarios con propiedades como onClick, onChange, onKeyPress, onFocus, onScroll, entre otras.

		Estas propiedades reciben el nombre de la función que ejecuta el código que responde a las interacciones de los usuarios. Seguramente, esta función usará la función this.setState para actualizar el estado de nuestro componente.

		class Button extends React.Component {
		state = { count: 0 }

		handleClick = () => (
			this.setState({ count: this.state.count + 1 })
		);

		render() {
			const { count } = this.state;

			return (
			<div>
				<h1>Manzanas: {count}</h1>
				<button onClick{this.handleClick}>Sumar</button>
			</div>
			);
		}
		}
		Recuerda que los nombres de estos eventos deben seguir la nomenclatura camelCase: primera palabra en minúsculas, iniciales de las siguientes palabras en mayúsculas y el resto también en minúsculas."
	/*State - Events*/

	/*Instalación y configuración de entorno*/
		Iniciar un repositorio en GIT:
		git init
		Iniciar un proyecto de Node.js:

		npm init -y
		```

		Instalar React:

		```bash
		npm install --save react react-dom

		1. Crear rempo mkdir: platziVideo.
		2. git init
		3. Inicializar el proyecto: npm init -y (la bandera -y indica que va a preconfigurar el proyecto y luego va a crear automaticamente.)
		4. Crear "Estructura del proyecto":
			--> Carpeta: src
			--> Carpeta: public
			--> Carpeta: src\components
			--> Archivo: src\index.js
			--> Archivo: public\index.html
		5. Instalar React:
			sudo npm install react-dom
		6. Editar package.json:	
            	"react":"^16.10.2",
		        "react-dom": "^16.10.2"

	/*Instalación y configuración de entorno*/

	/*Agregando compatibilidad con todos los navegadores usando Babel*/

		Babel es una herramienta muy popular para escribir JavaScript moderno y transformarlo en código que pueda entender cualquier navegador.**Compatibilidad**

		Instalación de Babel y otras herramientas para que funcione con React:

		npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
		Configuración de Babel (.babelrc):

		{
			"presets": [
			"@babel/preset-env",
			"@babel/preset-react"
		],
		}
		/*react-dom*/
			Libreria que push todo lo que hacemos al navegador.
		/*react-dom*/

		/*Instalar Babel*/

			1. sudo npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save--dev

			2. Crear archivo .babelrc ~ del proyecto:
			    {
   					"presets": [
     		   		"@babel/preset-env",
    		    	"@babel/preset-react"
    			]
				}	
		/*Instalar Babel*/

	/*Agregando compatibilidad con todos los navegadores usando Babel*/

	/*Webpack: Empaquetando nuestros módulos*/

		Webpack es una herramienta que nos ayuda a compilar multiples archivos (JavaScript, HTML, CSS, imágenes) en uno solo (o a veces un poco más) que tendrá todo nuestro código listo para producción.

		Instalación de Webpack y algunos plugins:

		"sudo npm install webpack webpack-cli html-webpack-plugin html-loader  --save-dev"
		
		*********************
		"***npm run build***"
		*********************
		
		==> "Si lo anterior da error ejecutar npm i react react-dom -D solved the problem."
		
	/*Webpack: Empaquetando nuestros módulos*/

	/*Webpack Dev Server: Reporte de errores y Cambios en tiempo real*/
	
		Instalación de Webpack Dev Server:

		sudo npm install webpack-dev-server --save-dev
		Script para ejecutar el servidor de Webpack y visualizar los cambios en tiempo real (package.json):

		{
		"scripts": {
			"build": "webpack --mode production",
			"start": "webpack-dev-server --open --mode development"
		},
		}
	

	/*Webpack Dev Server: Reporte de errores y Cambios en tiempo real*/

	/*Estilos con SASS*/
		Los preprocesadores como Sass son herramientas que nos permiten escribir CSS con una sintaxis un poco diferente y más amigable que luego se transformará en CSS normal. Gracias a Sass podemos escribir CSS con variables, mixins, bucles, entre otras características.

		Instalación de Sass:
		   -2. sudo chown -R 1000:1000 "/home/jesusalmircarcastellanos/.npm"   
		   -1. sudo chown -R "usuario" "ruta"/node_modules
			0. npm install node-sass
			1. sudo npm install --save-dev mini-css-extract-plugin css-loader node-sass sass-loader
			2. Configuración de Sass en Webpack (webpack.config.js):

				const MiniCssExtractPlugin = require('mini-css-extract-plugin');

				// ...

				module: {
				rules: [
					{
					test: /\.(s*)css$/,
					use: [
						{ loader: MiniCssExtractPlugin.loader },
						'css-loader',
						'sass-loader',
					],
					}, 
				],
				},

				// ...

				plugins: [
				new MiniCssExtractPlugin({
					filename: 'assets/[name].css',
				}),
				],`
			```
	/*Estilos con SASS*/
	
/*Curso Práctico de React JS*/

