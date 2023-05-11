# segunda practica integradora

base de datos mongo:
database: ecommerce
collections: products, carts, messages

## ENDPOINTS:

# /
"/": Pagina de inicio de la api, verifica que funcione el JSON

# /views/home.handlebars
"/home": muestra una lista fija de los productos cargados en la base de datos, sin modificaciones.

# /views/realTimeProducts.handlebars // front /public/js/indexHome.js
"/realtimeproducts": muestra la misma lista que "/home" pero en esta misma, se pueden cargar datos para eliminar productos y agregar un nuevo producto a la base de datos.
Actualmente presenta problemas, "cargar" el producto pedido pero entra en un loop lo cual puede o cargarlo reiteradas veces o tildar el programa.
"eliminar" elimina el producto por medio del ID pasado, tambien entra en loop, pero al eliminar 1 solo producto se aprecia que funciona bien y no se rompe. 
 
# /views/chat.handlebars
"/chat": este endpoint esta en proceso por que esta dando fallas.

# /views/products.handlebars
"/api/products": Este endpoint muestra una lista completa de todos los productos de la BD.

# /api/products/pid
"/api/products/pid": METODO GET. este endpoint renderiza atraves de la BD
"/api/products/pid": METODO PUT. este endpoint actualiza atraves de la BD


# /views/carts.handlebars
"/api/carts": Este endpoint muestra una lista completa de todos los carritos de la BD . 
solamente falta realizar el metodo delete del carrito entero y de cada producto particular.

# api/carts/cid
"/api/carts/cid": MEOTODO GET. este endpoint renderiza atraves de la BD, el carrito especificado por su cid.
"/api/carts/cid": MEOTODO DELETE. este endpoint elimina atraves de la BD, el carrito especificado por su cid.

# /api/carts/cid/product/pid
"/api/carts/cid/product/pid":METODO POST. Este endpoint utiliza un metodo POST para cargar en el carrito especificado el producto que deseo ("id" prod), al poseer el id del producto pasado por parametro dentro, este se ajusta solamente en +1 la cantidad del mismo. si el producto no existe en el carrito (no se encontro el id pasado), este se carga en el carrito como un objeto dentro del array "products" del carrito. tanto el carrito como cada producto distinto cargado al carrito genera su propio ID por mongoose tipo ObjectID.

# api/carts/json/cartsJSON
"api/carts/json/cartsJSON": este endpoint muestra un JSON de los carritos sin renderizar por express.

# api/products/json/productsJSON
"api/products/json/productsJSON": este endpoint muestra un JSON de los productos sin renderizar por express.

# api/products/productSelected/:pid
"api/products/productSelected/:pid" Metodo PUT. esta ruta presenta un input en el cual cargo el CID del carrito al que quiero cargarle el prooducto. Al hacer click se agrega automaticamente al carrito.

# api/sessions
"api/sessions": muestra un inicio con redireccion a registro y login.

# api/sessions/register
"api/sessions/register" permite el registro del usuario, completando un formulario con metodo post que hace un fetch a /api/usuarios.
actualmente le saque la obligatoriedad de que sea unico el mail para poder probarla.

# api/sessions/profile
"api/sessions/profile"  miestra a travez de un view handlebars muestra los datos del perfil del usuario, sin la contraseña . el fetch de su logica se realiza hacia fetch('/api/usuarios'). dicha ruta esta creada en server.js

# api/sessions/login
"api/sessions/login" muestra actualmente un formulario para realizar el login, con su funcionalidad finalizada para reconocer al email y contraseña del usuario para encontrarlo y logear.   Actualmente renderiza una lista de usuarios creados solo con la finalidad de poder seleccionar los datos de la base de datos para poder realizar las pruebas. 




## DATOS A TENER EN CUENTA 

-filtro de productos por categoría lo reemplace actualmente por "title" ya que no decidi bien los productos, solo difieren en titulo.
-No logro que la funcion cartManager.modificarUnidadesProcducto(cid,pid,cantidad) funcione correctamente. mas info en el cartManager lina 119 (por favor si podes revisar)
-creo vista de registro y perfil de usuario, pero aun falta realizar la vista del login con su funcionalidad (express-session)

