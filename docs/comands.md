# Comandos de la app

## Comandos de Laravel

Crea un nuevo proyecto Laravel.

    composer create-project laravel/laravel [nombre_proyecto]

Inicia el servidor de desarrollo de Laravel.

    php artisan serve

Inicia el servidor de desarrollo de Laravel con mi ip.

    php artisan serve --host=[tu_ip] --port=[puerto_libre]
    php artisan serve --host=192.168.1.73 --port=8000

Instala lo necesario para usar api y la app como servidor

    php artisan install:api

Instala lo necesario para usar WebSockets y eventos
[text](https://laravel.com/docs/11.x/broadcasting)

    php artisan install:broadcasting

Crear enlace a la carpeta storage para img y archivos

    php artisan storage:link

Ejecuta todas las migraciones pendientes.

    php artisan migrate

Revierte la última migración realizada.

    php artisan migrate:rollback

Ejecuta todos los seeders.

    php artisan db:seed

Lista todas las rutas registradas en la aplicación.

    php artisan route:list

Crea un nuevo middleware.

    php artisan make:middleware [NombreMiddleware]

Genera las vistas y rutas necesarias para la autenticación.

    php artisan make:auth

Limpia la caché de la aplicación.

    php artisan cache:clear

Cachea la configuración de la aplicación.

    php artisan config:cache

Optimiza la carga de la aplicación.

    php artisan optimize

Crea un nuevo modelo.

    php artisan make:model [NombreModelo]

Crea un nuevo controlador.

    php artisan make:controller [NombreControlador]

Crea un nuevo controlador con los métodos para api.

    php artisan make:controller [NombreControlador] --api

Crea una nueva migración de base de datos.

    php artisan make:migration [nombre_de_la_migracion]

Generar un archivo request de validación la app.

    php artisan make:request [Name]Request

Crea un nuevo seeder | semilla.

    php artisan make:seeder [NombreDelSeeder]

Crea una nueva factory | fabrica.

    php artisan make:factory PoblacionEstudiantilFactory

Crear nuevo evento.

    php artisan make:event NombreEvento
    php artisan make:event InvitadoRegistrado 

Comandos de creación

- -m: Genera una migración para el modelo.
- -c: Genera un controlador para el modelo.
- -s o --seed: Genera un seeder para el modelo.
- -f: Genera una fábrica para el modelo.
- -r p --resource: Indica si el controlador generado debe ser un controlador de recursos
- -a o --all: Genera una migración, un controlador, un seeder y una fábrica
- --force: Crea la clase incluso si el modelo ya existe
- --morph-pivot: Indica si el modelo generado debe ser un modelo de tabla intermedia polimórfica personalizada
- --policy: Crea una nueva política para el modelo.
- -p o --pivot: Indica si el modelo generado debe ser un modelo de tabla intermedia personalizado
- --api: Indica si el controlador generado debe ser un controlador de recursos API
- -R, --requests Crea nuevas clases de solicitud de formulario y úsalas en el controlador de recursos.
- --test: Genera una prueba PHPUnit adjunta para el modelo
- --pest: Genera una prueba de plagas adjunta para el modelo
- -h, --help: Muestra ayuda para el comando dado. Cuando no se proporciona ningún comando, muestra ayuda para el comando de lista
- -q, --quiet: No genera ningún mensaje
- -V, --version: Muestra la versión de esta aplicación
- --ansi|--no-ansi: Forzar (o desactivar --no-ansi) la salida ANSI
- -n, --no-interaction: No haces ninguna pregunta interactiva
- --env[=ENV]: El entorno en el que debe ejecutarse el comando
- -v|vv|vvv, --verbose: Aumenta la detalle de los mensajes: 1 para salida normal, 2 para salida más detallada y 3 para depuración

Ejemplo:

    php artisan make:model Acceso -m -c -f

    php artisan make:request PoblacionEstudiantilRequest

---

## Comandos de Django

Crea un nuevo proyecto de Django.

    django-admin startproject [nombre_proyecto]

Inicia el servidor de desarrollo de Django.

    python manage.py runserver

Crea una nueva aplicación dentro del proyecto.

    python manage.py startapp [nombre_app]

Crea archivos de migración basados en los cambios en los modelos.

    python manage.py makemigrations

Ejecuta las migraciones pendientes.

    python manage.py migrate

Crea un nuevo super usuario interactivo para acceder al panel de administración.

    python manage.py createsuperuser

Recolecta archivos estáticos de todas las aplicaciones en un solo lugar.

    python manage.py collectstatic

Inicia la shell de Django para interactuar con la base de datos y las aplicaciones.

    python manage.py shell

Ejecuta pruebas para una aplicación específica.

    python manage.py test [nombre_app]

Elimina todos los datos de la base de datos y restablece las tablas.

    python manage.py flush

Inicia el servidor de desarrollo en una dirección y puerto específicos.

    python manage.py runserver [dirección:puerto]

Accede a la línea de comandos de la base de datos directamente.

    python manage.py dbshell

Inicia la shell de Django con todas las aplicaciones cargadas automáticamente.

    python manage.py shell_plus

Verifica la configuración del proyecto en busca de problemas.

    python manage.py check

Exporta datos de la base de datos en formato JSON.

    python manage.py dumpdata [nombre_app]

---

## Comandos de npm

Inicia un nuevo proyecto npm, creando un archivo package.json.

    npm init

Instala un paquete específico y lo guarda en dependencies en package.

    npm install [paquete]

Instala un paquete específico como una dependencia de desarrollo y lo guarda en devDependencies en package.json.

    npm install [paquete] --save-dev

Borrar cache de la app

    npm cache clean --force

Instala todas las dependencias listadas en package.json.

    npm install

Desinstala un paquete específico.

    npm uninstall [paquete]

Inicia la aplicación en modo desarrollo.

    npm start

Construye la aplicación para producción.

    npm build

Ejecuta un script definido en el archivo package.json.

    npm run [script]

---

## Comandos de React

Crea una nueva aplicación React.

    npx create-react-app frontend --template typescript

Inicia el servidor de desarrollo de React.

    npm start

Ejecuta las pruebas de la aplicación.

    npm test

Construye la aplicación para producción.

    npm run build

Expone las configuraciones internas de webpack y Babel para una personalización avanzada.

    npm run eject

Instala un paquete de npm y lo agrega como una dependencia en el archivo package.json.

    npm install [paquete] --save

Instala un paquete como una dependencia de desarrollo.

    npm install [paquete] --save-dev

Actualiza un paquete específico a su última versión.

    npm update [paquete]

Realiza una auditoría de seguridad de las dependencias del proyecto.

    npm audit

Ejecuta un script definido en el archivo package.json.

    npm run [script]

---
