// --- 1. DEFINICIÓN DE PRODUCTOS (Backend de datos) ---
const productos = [
    
    // --- CATEGORÍA PRINCIPALES (CORREGIDA anteriormente) ---
    { id: 1, categoria: "Principales", nombre: "CONO", precio: 4000, descripcion: "Clásico cono de helado.", opciones: [] },
    { id: 2, categoria: "Principales", nombre: "GALLETA", precio: 4000, descripcion: "Helado entre dos galletas.", opciones: [] },
    
    { id: 3, categoria: "Principales", nombre: "WAFFLES CON FRUTA Y HELADO", precio: 16000, descripcion: "Deliciosos waffles con fruta fresca y helado.", opciones: [] },
    
    { id: 4, categoria: "Principales", nombre: "PARFAIT", precio: 15000, descripcion: "ARMALO COMO QUIERAS: Con yogurt griego, frutos rojos, frutos amarillos o mix.", opciones: [] },
    
    { id: 5, categoria: "Principales", nombre: "FRESAS / DURAZNOS", precio: 13000, descripcion: "Servidos con crema, queso y helado.", opciones: [] },
    
    { id: 6, categoria: "Principales", nombre: "ENSALADA DE FRUTAS", precio: 15000, descripcion: "Ensalada de frutas con helado y barquillo.", opciones: [] },
    
    { id: 7, categoria: "Principales", nombre: "BANANA SPLIT", precio: 15000, descripcion: "Clásico Banana Split con queso y helado.", opciones: [] },
    
    { id: 8, categoria: "Principales", nombre: "CREPES CON FRUTA Y HELADO", precio: 16000, descripcion: "Crepes con fruta fresca y helado.", opciones: [] },
    
    { id: 9, categoria: "Principales", nombre: "BROWNIE", precio: 12000, descripcion: "Brownie caliente con helado y frutas.", opciones: [] },
    
    // --- CATEGORÍA MALTEADAS ---
    { 
        id: 12, 
        categoria: "Malteadas",
        nombre: "MALTEADAS Personalizadas", 
        precio: 15000, 
        descripcion: "Elige **un único** sabor: Fresa, Oreo, Milo, Chocolate, Maracuyá o Frutos Rojos.",
        opciones: [
            { 
                tipo: "Selecciona el sabor", 
                items: ["Fresa", "Oreo", "Milo", "Chocolate", "Maracuyá", "Frutos Rojos"], 
                multiplo: "radio"
            }
        ]
    },
    
    // <--- INTEGRACIÓN YOGLATT (BASE Y TOPPINGS) --->
    { 
        id: 16, 
        categoria: "CÓMO QUIERES TU YOGLATT HOY", 
        nombre: "Yoglatt Base", 
        precio: 0, 
        descripcion: "Elige el tamaño de tu Yoglatt y los toppings que desees.",
        opciones_yoglatt: true, 
        opciones: [ 
            { tipo: "Selección de Tamaño", items: [{ nombre: "PEQUEÑO", precio: 6900 }, { nombre: "MEDIANO", precio: 7900 }, { nombre: "GRANDE", precio: 9000 }], multiplo: "radio" }
        ],
        toppings_data: {
            pagos: [
                { precio: 1900, items: ["PIÑA CALADA", "PIÑA", "MANGO", "FRESA", "PAPAYA", "MARACUYA", "MELON", "MORA", "BANANO"] },
                { precio: 2400, items: ["KIWI", "MANZANA VERDE", "DURAZNO", "ARANDANOS", "COCO", "CEREZA", "AMARENA"] },
                { precio: 1800, items: ["GUSANITOS", "GUMMIES OSITOS", "MASMELOS", "SALSA DE AREQUIPE", "BARQUILLOS"] },
                { precio: 2200, items: ["MANÍ TRITURADO", "GRANOLA", "CRISPY", "CHIPS DE CHOCOLATE", "CHIPS DE CHOCOLATE BLANCO", "CHIPS DE CHOCOLATE COLORES", "OREO", "OREO TRITURADO", "MINI CHIPS", "M&M´S", "SALSA HERSHEY´S"] },
                { precio: 2400, items: ["LYCHEE", "QUESO", "CREMA DE LECHE", "MILO", "SALSA DE AMORETTA DE PISTACHO", "SALSA DE NUTELLA", "EXPLOSIÓN DE FRESA", "EXPLOSIÓN DE KIWI", "EXPLOSIVO CEREZA", "EXPLOSIVO LYCHEE", "EXPLOSIVO ARÁNDANOS", "ALMENDRA", "SALSA FRUTO ROJOS (FRESA, CEREZA Y ARÁNDANOS)", "CHOCOLATINA HERSHEY´S", "MINI BROWNIE", "ENROBAGE CHOCOLATE", "ENROBAGE CHOCOLATE BLANCO", "ENROBAGE CHOCOLATE CRISPY"] }
            ],
            gratis: ["FRESA", "KIWI", "MORA", "LECHERA", "MARACUYA", "GRAGEAS DE COLORES"]
        }
    },
    // <--- FIN INTEGRACIÓN YOGLATT --->

    // <--- CATEGORÍA YOGLATT SIN AZÚCAR ---
    { id: 17, categoria: "YOGLATT SIN AZUCAR", nombre: "CONO SENCILLO", precio: 4900, descripcion: "Yoglatt sin azúcar en cono sencillo.", opciones: [] },
    { id: 18, categoria: "YOGLATT SIN AZUCAR", nombre: "CONO PEQUEÑO", precio: 8900, descripcion: "Yoglatt sin azúcar, tamaño pequeño.", opciones: [] },
    { id: 19, categoria: "YOGLATT SIN AZUCAR", nombre: "CONO MEDIANO", precio: 10200, descripcion: "Yoglatt sin azúcar, tamaño mediano.", opciones: [] },
    { id: 20, categoria: "YOGLATT SIN AZUCAR", nombre: "CONO GRANDE", precio: 11200, descripcion: "Yoglatt sin azúcar, tamaño grande.", opciones: [] },
    // <--- FIN CATEGORÍA YOGLATT SIN AZÚCAR --->
    
    // <--- CATEGORÍA YOGURT GRIEGO COLOUR GREEK (LITROS Y PEQUEÑO) ---
    { id: 21, categoria: "YOGURT GRIEGO COLOUR GREEK", nombre: "LITRO FRESA SILVESTRE", precio: 29000, descripcion: "Yogurt Griego Colour Greek, presentación de Litro.", opciones: [] },
    { id: 22, categoria: "YOGURT GRIEGO COLOUR GREEK", nombre: "LITRO DURAZNO PERSA", precio: 29000, descripcion: "Yogurt Griego Colour Greek, presentación de Litro.", opciones: [] },
    { id: 23, categoria: "YOGURT GRIEGO COLOUR GREEK", nombre: "LITRO MANZANA", precio: 29000, descripcion: "Yogurt Griego Colour Greek, presentación de Litro.", opciones: [] },
    { id: 24, categoria: "YOGURT GRIEGO COLOUR GREEK", nombre: "LITRO COOKIES & CREAM", precio: 29000, descripcion: "Yogurt Griego Colour Greek, presentación de Litro.", opciones: [] },
    { id: 25, categoria: "YOGURT GRIEGO COLOUR GREEK", nombre: "LITRO DULCE SIN SABOR", precio: 29000, descripcion: "Yogurt Griego Colour Greek, presentación de Litro.", opciones: [] },
    { id: 26, categoria: "YOGURT GRIEGO COLOUR GREEK", nombre: "LITRO VAINILLA FRANCESA", precio: 29000, descripcion: "Yogurt Griego Colour Greek, presentación de Litro.", opciones: [] },
    
    { 
        id: 27, 
        categoria: "YOGURT GRIEGO COLOUR GREEK", 
        nombre: "PEQUEÑO CON TOPPING", 
        precio: 9000, 
        descripcion: "Yogurt Griego Pequeño. Elige un sabor y un topping (Arequipe o Blue Berry).",
        opciones: [
            { 
                tipo: "Selecciona el sabor", 
                items: ["FRESA SILVESTRE", "DURAZNO PERSA", "MANZANA", "COOKIES & CREAM", "DULCE SIN SABOR", "VAINILLA FRANCESA"], 
                multiplo: "radio"
            },
            { 
                tipo: "Selecciona el Topping", 
                items: ["AREQUIPE", "BLUE BERRY"], 
                multiplo: "radio"
            }
        ]
    },
    // <--- FIN CATEGORÍA YOGURT GRIEGO COLOUR GREEK --->
    
    // <--- CATEGORÍA YOGURT GRIEGO YOGLATT --->
    { id: 28, categoria: "YOGURT GRIEGO YOGLATT", nombre: "LITRO", precio: 22000, descripcion: "Yogurt Griego Yoglatt, presentación de Litro.", opciones: [] },
    { id: 29, categoria: "YOGURT GRIEGO YOGLATT", nombre: "MEDIO LITRO", precio: 13000, descripcion: "Yogurt Griego Yoglatt, presentación de Medio Litro.", opciones: [] },
    // <--- FIN CATEGORÍA YOGURT GRIEGO YOGLATT --->
    
    // <--- CATEGORÍA YOGURT HELADO SUAVE --->
    { id: 30, categoria: "YOGURT HELADO SUAVE", nombre: "LITRO", precio: 35000, descripcion: "Yogurt Helado Suave, presentación de Litro.", opciones: [] },
    { id: 31, categoria: "YOGURT HELADO SUAVE", nombre: "MEDIO LITRO", precio: 19000, descripcion: "Yogurt Helado Suave, presentación de Medio Litro.", opciones: [] },
    // <--- FIN CATEGORÍA YOGURT HELADO SUAVE --->

    // <--- CATEGORÍA BEBIDAS (ID 32-59) --->
    // --- SUB-CATEGORÍA SODAS ---
    { id: 32, categoria: "BEBIDAS", nombre: "Soda CEREZA", precio: 12500, descripcion: "Refrescante soda sabor cereza.", opciones: [] },
    { id: 33, categoria: "BEBIDAS", nombre: "Soda MARACUYÁ", precio: 12500, descripcion: "Refrescante soda sabor maracuyá.", opciones: [] },
    { id: 34, categoria: "BEBIDAS", nombre: "Soda YERBABUENA", precio: 12500, descripcion: "Refrescante soda sabor yerbabuena.", opciones: [] },
    { id: 35, categoria: "BEBIDAS", nombre: "Soda FRUTOS ROJOS", precio: 12500, descripcion: "Refrescante soda sabor frutos rojos.", opciones: [] },
    { id: 36, categoria: "BEBIDAS", nombre: "Soda CON LIMÓN", precio: 6000, descripcion: "Refrescante soda con limón.", opciones: [] },
    
    // --- SUB-CATEGORÍA JUGOS ---
    { id: 37, categoria: "BEBIDAS", nombre: "Jugo GUANÁBANA", precio: 6500, descripcion: "Jugo natural de guanábana.", opciones: [] },
    { id: 38, categoria: "BEBIDAS", nombre: "Jugo MANGO", precio: 6500, descripcion: "Jugo natural de mango.", opciones: [] },
    { id: 39, categoria: "BEBIDAS", nombre: "Jugo LULO", precio: 6500, descripcion: "Jugo natural de lulo.", opciones: [] },
    { id: 40, categoria: "BEBIDAS", nombre: "Jugo MORA", precio: 6500, descripcion: "Jugo natural de mora.", opciones: [] },
    { id: 41, categoria: "BEBIDAS", nombre: "MILO", precio: 8000, descripcion: "Milo en leche.", opciones: [] },
    { id: 42, categoria: "BEBIDAS", nombre: "LIMONADA", precio: 5500, descripcion: "Limonada fresca.", opciones: [] },
    { id: 43, categoria: "BEBIDAS", nombre: "Jugo PIÑA", precio: 6500, descripcion: "Jugo natural de piña.", opciones: [] },
    { id: 44, categoria: "BEBIDAS", nombre: "Jugo MARACUYA", precio: 6500, descripcion: "Jugo natural de maracuyá.", opciones: [] },
    { id: 45, categoria: "BEBIDAS", nombre: "Jugo FRESA", precio: 6500, descripcion: "Jugo natural de fresa.", opciones: [] },

    // --- SUB-CATEGORÍA AGUAS COOL DRiNK ---
    { id: 46, categoria: "BEBIDAS", nombre: "Cool Drink KIWI", precio: 4000, descripcion: "Agua saborizada Cool Drink sabor kiwi.", opciones: [] },
    { id: 47, categoria: "BEBIDAS", nombre: "Cool Drink POMEGRANATE", precio: 4000, descripcion: "Agua saborizada Cool Drink sabor pomegranate.", opciones: [] },
    { id: 48, categoria: "BEBIDAS", nombre: "Cool Drink PASSIÓN FRUIT", precio: 4000, descripcion: "Agua saborizada Cool Drink sabor passion fruit.", opciones: [] },
    { id: 49, categoria: "BEBIDAS", nombre: "Cool Drink MANGOSTEEN", precio: 4000, descripcion: "Agua saborizada Cool Drink sabor mangosteen.", opciones: [] },

    // --- SUB-CATEGORÍA SODAS HATSU ---
    { id: 50, categoria: "BEBIDAS", nombre: "Hatsu UVA BLANCA & ROMERO", precio: 5100, descripcion: "Soda Hatsu sabor Uva Blanca & Romero.", opciones: [] },
    { id: 51, categoria: "BEBIDAS", nombre: "Hatsu SANDÍA Y ALBAHACA", precio: 5100, descripcion: "Soda Hatsu sabor Sandía y Albahaca.", opciones: [] },
    { id: 52, categoria: "BEBIDAS", nombre: "Hatsu FRAMBUESA & ROSAS", precio: 5100, descripcion: "Soda Hatsu sabor Frambuesa & Rosas.", opciones: [] },
    { id: 53, categoria: "BEBIDAS", nombre: "TÉ HATSU BOTELLA 400ML", precio: 5100, descripcion: "Té Hatsu en botella de 400ml.", opciones: [] },

    // --- SUB-CATEGORÍA AGUAS ---
    { id: 54, categoria: "BEBIDAS", nombre: "Agua CRISTAL 600ML", precio: 3000, descripcion: "Agua Cristal en botella de 600ml.", opciones: [] },
    { id: 55, categoria: "BEBIDAS", nombre: "Agua CRISTAL CON GAS 600ML", precio: 3000, descripcion: "Agua Cristal con gas en botella de 600ml.", opciones: [] },
    
    // --- SUB-CATEGORÍA CERVEZAS ---
    { id: 56, categoria: "BEBIDAS", nombre: "CERVEZA CLUB COLOMBIA DORADA", precio: 6000, descripcion: "Cerveza Club Colombia Dorada.", opciones: [] },
    { id: 57, categoria: "BEBIDAS", nombre: "CERVEZA CORONITA", precio: 6000, descripcion: "Cerveza Coronita.", opciones: [] },
    { id: 58, categoria: "BEBIDAS", nombre: "CERVEZA STELLA ARTOIS", precio: 8400, descripcion: "Cerveza Stella Artois.", opciones: [] },
    { id: 59, categoria: "BEBIDAS", nombre: "CERVEZA CORONITA MICHELADA", precio: 7000, descripcion: "Cerveza Coronita preparada como michelada.", opciones: [] },
    // <--- FIN CATEGORÍA BEBIDAS --->

    // <--- CATEGORÍA PALETAS PARA MASCOTAS (ID 60-63) --->
    { id: 60, categoria: "🐾 PALETAS PARA MASCOTAS", nombre: "POLLO", precio: 4500, descripcion: "Paleta helada para perros sabor pollo.", opciones: [] },
    { id: 61, categoria: "🐾 PALETAS PARA MASCOTAS", nombre: "CARNE DE RES", precio: 4500, descripcion: "Paleta helada para perros sabor carne de res.", opciones: [] },
    { id: 62, categoria: "🐾 PALETAS PARA MASCOTAS", nombre: "TOCINETA", precio: 4500, descripcion: "Paleta helada para perros sabor tocineta.", opciones: [] },
    { id: 63, categoria: "🐾 PALETAS PARA MASCOTAS", nombre: "HÍGADO DE RES", precio: 4500, descripcion: "Paleta helada para perros sabor hígado de res.", opciones: [] },
    // <--- FIN CATEGORÍA PALETAS PARA MASCOTAS --->
];

// Carrito de compras global
let carrito = [];

// --- FUNCIONALIDAD DE SCROLL y MENÚ PEGADIZO (Sticky) ---

// Referencias a los elementos del DOM
const mainHeader = document.getElementById('main-header');
const menuNavegacion = document.getElementById('menu-navegacion');

// Constantes de altura (deben coincidir con styles.css para el cálculo)
const HEADER_HEIGHT_DESKTOP = 370; // Altura normal del banner en desktop (ver styles.css)
const HEADER_HEIGHT_MOBILE = 150;  // Altura normal del banner en móvil (ver styles.css media query)
const SCROLL_THRESHOLD = 50;       // Umbral para empezar a minimizar el banner (a los 50px de scroll)

function handleScroll() {
    const scrollPosition = window.scrollY;
    
    // 1. Determinación de la Altura de Referencia para el Nav
    // Asumimos que la vista móvil es para anchos <= 600px, según el media query en styles.css
    const isMobileView = window.innerWidth <= 600;
    const headerFullHeight = isMobileView ? HEADER_HEIGHT_MOBILE : HEADER_HEIGHT_DESKTOP;
    
    // 2. Manejo del Banner (Minimizar/Restaurar)
    // El banner se minimiza tras un pequeño scroll
    if (scrollPosition > SCROLL_THRESHOLD) {
        mainHeader.classList.add('banner-minimized');
    } else {
        mainHeader.classList.remove('banner-minimized');
    }

    // 3. Manejo de la Barra de Navegación (Sticky/Fijo)
    // El menú se vuelve pegadizo (top: 0) cuando el scroll supera la altura original del header.
    if (scrollPosition > headerFullHeight) {
        menuNavegacion.classList.add('sticky-nav');
    } else {
        menuNavegacion.classList.remove('sticky-nav');
    }
}

// Inicializar el evento de scroll
window.addEventListener('scroll', handleScroll);
// También lo ejecuto al cargar la página por si se recarga en una posición de scroll avanzada
document.addEventListener('DOMContentLoaded', handleScroll);


/** Genera los botones de navegación horizontal. (MODIFICADA para asignar IDs) */
function generarMenuNavegacion(categorias) {
    const navDiv = document.getElementById('menu-navegacion');
    navDiv.innerHTML = ''; // Limpiar contenido anterior
    
    categorias.forEach(categoria => {
        const idCategoria = `cat-${categoria.replace(/\s/g, '-').toLowerCase()}`;
        const button = document.createElement('button');
        button.textContent = categoria;
        button.onclick = () => {
            // Desplazamiento suave hacia la categoría
            document.getElementById(idCategoria).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Opcional: ajustar ligeramente la posición después del scroll para tener en cuenta el menú fijo
            setTimeout(() => {
                window.scrollBy(0, -50); 
            }, 350); 
        };
        navDiv.appendChild(button);
    });
}

/** Carga los productos agrupados por categoría. (MODIFICADA para asignar IDs) */
function cargarMenu() {
    const container = document.getElementById('menu-container');
    container.innerHTML = ''; // Limpiar contenido anterior

    // 1. Agrupar productos por categoría
    const categorias = productos.reduce((acc, producto) => {
        const categoria = producto.categoria || "Otros";
        if (!acc[categoria]) {
            acc[categoria] = [];
        }
        acc[categoria].push(producto);
        return acc;
    }, {});

    // Definir el orden de las categorías para renderizar
    const ordenCategorias = [
        "Principales",
        "Malteadas",
        "CÓMO QUIERES TU YOGLATT HOY",
        "YOGLATT SIN AZUCAR",
        "YOGURT GRIEGO COLOUR GREEK",
        "YOGURT GRIEGO YOGLATT",
        "YOGURT HELADO SUAVE",
        "BEBIDAS",
        "🐾 PALETAS PARA MASCOTAS",
    ];

    // Generar el menú de navegación (Nueva llamada)
    generarMenuNavegacion(ordenCategorias);

    // 2. Renderizar categorías y productos en el orden deseado
    ordenCategorias.forEach(categoriaNombre => {
        const productosEnCategoria = categorias[categoriaNombre];
        if (productosEnCategoria && productosEnCategoria.length > 0) {
            const tituloCategoria = document.createElement('h2');
            // Asignar ID basado en el nombre de la categoría para la navegación
            const idCategoria = categoriaNombre.replace(/\s/g, '-').toLowerCase();
            tituloCategoria.id = `cat-${idCategoria}`;
            tituloCategoria.textContent = categoriaNombre.toUpperCase();
            container.appendChild(tituloCategoria);

            // 3. Renderizar productos
            productosEnCategoria.forEach(p => {
                const productoDiv = document.createElement('div');
                productoDiv.className = 'producto';

                const tieneOpciones = (p.opciones && p.opciones.length > 0) || p.opciones_yoglatt;

                let productoHTML = `
                    <h3>
                        ${p.nombre}
                        <span class="producto-precio">${p.precio > 0 ? '$' + p.precio.toLocaleString('es-CO') : ''}</span>
                    </h3>
                    <p class="producto-descripcion">${p.descripcion}</p>
                `;

                if (tieneOpciones) {
                    let opcionesContent = '';
                    if (p.opciones_yoglatt) {
                        opcionesContent = generarOpcionesYoglattHTML(p.id, p);
                    } else {
                        opcionesContent = generarOpcionesHTML(p.id, p.opciones);
                    }

                    productoHTML += `
                        <div class="opciones" id="opciones-${p.id}" style="display: none;">
                            ${opcionesContent}
                            <button class="btn-add btn-simple-add" onclick="agregarAlCarrito(event, ${p.id})">Añadir al Carrito</button>
                        </div>
                    `;
                    // Botón para mostrar/ocultar opciones
                    productoHTML += `<button class="btn-add btn-simple-add" onclick="toggleOpciones(${p.id})">${p.nombre === "Yoglatt Base" ? 'Seleccionar Tamaño y Toppings' : 'Seleccionar Opciones'}</button>`;
                } else {
                    // Botón de añadir directo si no hay opciones
                    productoHTML += `<button class="btn-add btn-simple-add" onclick="agregarAlCarrito(event, ${p.id})">Añadir al Carrito</button>`;
                }

                productoDiv.innerHTML = productoHTML;
                container.appendChild(productoDiv);
            });
        }
    });
}

/** Muestra u oculta las opciones de un producto. */
function toggleOpciones(productoId) {
    const opcionesDiv = document.getElementById(`opciones-${productoId}`);
    const boton = opcionesDiv.nextElementSibling; // El botón de toggle está justo después
    
    if (opcionesDiv.style.display === 'none' || opcionesDiv.style.display === '') {
        opcionesDiv.style.display = 'block';
        boton.textContent = 'Cerrar Opciones';
    } else {
        opcionesDiv.style.display = 'none';
        boton.textContent = productos.find(p => p.id === productoId).nombre === "Yoglatt Base" ? 'Seleccionar Tamaño y Toppings' : 'Seleccionar Opciones';
    }
}

/** Genera el HTML para las opciones de productos estándar (Malteadas, Yogurt Griego Pequeño, etc.). */
function generarOpcionesHTML(productoId, opciones) {
    let html = '';
    opciones.forEach((opcion, index) => {
        html += `<h4>${opcion.tipo} (${opcion.multiplo === 'radio' ? 'Selecciona uno' : 'Selecciona los que desees'})</h4>`;
        
        opcion.items.forEach(item => {
            // Manejar si el item es string o objeto (con precio)
            const nombreItem = typeof item === 'object' && item.nombre ? item.nombre : item;
            const precioItem = typeof item === 'object' && item.precio ? item.precio : 0;
            const precioTexto = precioItem > 0 ? ` (+ $${precioItem.toLocaleString('es-CO')})` : '';

            html += `
                <label>
                    <input type="${opcion.multiplo}" name="prod-${productoId}-opc-${index}" value="${nombreItem}" data-precio="${precioItem}" data-opcion-tipo="${opcion.tipo}" >
                    ${nombreItem} ${precioTexto}
                </label>
            `;
        });
    });
    return html;
}

/** Genera el HTML de la selección de tamaño y toppings (Un solo checkbox) para Yoglatt. */
function generarOpcionesYoglattHTML(productoId, producto) {
    let html = '';
    const data = producto.toppings_data;

    // 1. Selección del Tamaño Base (Obligatorio)
    const baseOpciones = producto.opciones[0];
    html += `<h4>${baseOpciones.tipo} (Obligatorio)</h4>`;
    baseOpciones.items.forEach(item => {
        const nombreItem = item.nombre;
        const precioItem = item.precio;
        html += `
            <label>
                <input type="radio" name="prod-${productoId}-base" value="${nombreItem}" data-precio="${precioItem}" data-opcion-tipo="${baseOpciones.tipo}" >
                ${nombreItem} ($${precioItem.toLocaleString('es-CO')})
            </label>
        `;
    });

    html += '<hr><h3>Selecciona tus Toppings Adicionales</h3>';

    // 2. Toppings de Pago
    data.pagos.forEach(grupo => {
        html += `<h4>Toppings de $${grupo.precio.toLocaleString('es-CO')}</h4>`;
        grupo.items.forEach(item => {
            const precio = grupo.precio;
            const nombreNormalizado = item.replace(/\s|´/g, '_').toLowerCase();
            html += `
                <div class="topping-item-yoglatt">
                    <span class="topping-name-yoglatt">${item}</span>
                    <span class="topping-price-yoglatt">($${precio.toLocaleString('es-CO')})</span>
                    <div class="topping-selection-yoglatt">
                        <label>
                            <input type="checkbox" name="yoglatt-topping-${nombreNormalizado}" value="${item}" data-precio="${precio}" data-tipo="Topping Pago" >
                            Seleccionar
                        </label>
                    </div>
                </div>
            `;
        });
    });

    // 3. Toppings Gratis
    if (data.gratis && data.gratis.length > 0) {
        html += '<hr><h4>Toppings Gratis (Elige los que quieras)</h4>';
        data.gratis.forEach(item => {
            const nombreNormalizado = item.replace(/\s|´/g, '_').toLowerCase();
            html += `
                <div class="topping-item-yoglatt">
                    <span class="topping-name-yoglatt">${item}</span>
                    <div class="topping-selection-yoglatt">
                        <label>
                            <input type="checkbox" name="yoglatt-topping-${nombreNormalizado}" value="${item}" data-precio="0" data-tipo="Topping Gratis" >
                            Seleccionar
                        </label>
                    </div>
                </div>
            `;
        });
    }

    return html;
}

/** Agrega un producto (con o sin opciones) al carrito. */
function agregarAlCarrito(event, productoId) {
    // Evita el comportamiento por defecto (si el botón está en un formulario, aunque aquí no lo está)
    event.preventDefault();

    const producto = productos.find(p => p.id === productoId);
    if (!producto) return;

    let precioTotal = producto.precio;
    let opcionesSeleccionadas = [];
    const opcionesDiv = document.getElementById(`opciones-${productoId}`);

    // --- Lógica para productos con opciones (estándar y Yoglatt) ---
    const tieneOpciones = (producto.opciones && producto.opciones.length > 0) || producto.opciones_yoglatt;

    if (tieneOpciones) {
        // Recorrer todos los inputs dentro del div de opciones
        const inputs = opcionesDiv.querySelectorAll('input:checked');
        
        if (inputs.length === 0 && producto.opciones_yoglatt) {
            // Caso Yoglatt: Al menos el tamaño es obligatorio
            mostrarNotificacion(`Por favor, selecciona el tamaño base de tu Yoglatt.`);
            return;
        }

        inputs.forEach(input => {
            const nombre = input.value;
            const precio = parseInt(input.getAttribute('data-precio'));
            const tipo = input.getAttribute('data-opcion-tipo') || input.getAttribute('data-tipo');
            
            // Sumamos el precio (si es un topping de pago o el tamaño base)
            precioTotal += precio;

            opcionesSeleccionadas.push({
                tipo: tipo,
                nombre: nombre,
                precio: precio,
            });
        });
        
        // Validar que se hayan seleccionado opciones obligatorias (ESTÁNDAR - Malteadas y Yogurt Griego Pequeño)
        const isYoglatt = producto.opciones_yoglatt;
        if (!isYoglatt && producto.opciones && producto.opciones.length > 0) {
             const tieneOpcionesObligatoriasNoSeleccionadas = Array.from(producto.opciones).some((opcion, index) => {
                // Solo checkeamos obligatoriedad para radios
                if (opcion.multiplo === 'radio' && !opcionesDiv.querySelector(`input[name="prod-${producto.id}-opc-${index}"]:checked`)) {
                    return true;
                }
                return false;
            });
            if (tieneOpcionesObligatoriasNoSeleccionadas) {
                // Reemplazo de alert()
                mostrarNotificacion(`Por favor, selecciona todas las opciones obligatorias para el producto (${producto.nombre}).`);
                return;
            }
        }
        
        // Validar que se haya seleccionado el tamaño base en Yoglatt
        if (isYoglatt) {
            const baseSeleccionada = opcionesSeleccionadas.some(op => op.tipo === 'Selección de Tamaño');
            if (!baseSeleccionada) {
                mostrarNotificacion(`Por favor, selecciona el tamaño base de tu Yoglatt.`);
                return;
            }
        }
    } 
    
    // --- Agregar el item al carrito ---
    carrito.push({
        nombre: producto.nombre,
        opciones: opcionesSeleccionadas,
        precioTotal: precioTotal
    });

    actualizarCarrito();
    // Reemplazo de alert()
    mostrarNotificacion(`"${producto.nombre}" añadido al carrito!`);
    
    // Cierra las opciones si se agregaron
    if (tieneOpciones) {
        opcionesDiv.style.display = 'none'; 
        opcionesDiv.nextElementSibling.textContent = producto.nombre === "Yoglatt Base" ? 'Seleccionar Tamaño y Toppings' : 'Seleccionar Opciones';
    }
}

/** Actualiza el contador y el total del carrito flotante. */
function actualizarCarrito() {
    const total = carrito.reduce((sum, item) => sum + item.precioTotal, 0);
    const contador = carrito.length;

    document.getElementById('contador-carrito').textContent = contador === 0 ? 'Carrito vacío' : `${contador} ${contador === 1 ? 'producto' : 'productos'}`;
    document.getElementById('total-carrito').textContent = `Total: $${total.toLocaleString('es-CO')}`;
    document.getElementById('total-modal').textContent = `$${total.toLocaleString('es-CO')}`;

    // Habilitar/Deshabilitar botón de proceder en el modal
    const botonProceder = document.querySelector('#modal-carrito .btn-add');
    if (botonProceder) {
        botonProceder.disabled = carrito.length === 0;
        botonProceder.style.opacity = carrito.length === 0 ? 0.5 : 1;
    }
}

/** Muestra la ventana modal del carrito. */
function mostrarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = ''; // Limpiar lista
    
    if (carrito.length === 0) {
        listaCarrito.innerHTML = '<p style="text-align: center;">Tu carrito está vacío. ¡Añade algo delicioso!</p>';
    } else {
        carrito.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item-carrito';
            
            let opcionesHTML = '';
            if (item.opciones.length > 0) {
                opcionesHTML = '<div class="item-opciones">';
                item.opciones.forEach(op => {
                    const precioOp = op.precio > 0 ? ` (+${op.precio.toLocaleString('es-CO')})` : '';
                    opcionesHTML += `<span class="item-opcion">${op.tipo}: ${op.nombre}${precioOp}</span>`;
                });
                opcionesHTML += '</div>';
            }

            itemDiv.innerHTML = `
                <div>
                    <span class="item-nombre">${item.nombre}</span>
                    ${opcionesHTML}
                </div>
                <div>
                    <span class="item-precio">$${item.precioTotal.toLocaleString('es-CO')}</span>
                    <button class="btn-eliminar" onclick="eliminarDelCarrito(${index})">X</button>
                </div>
            `;
            listaCarrito.appendChild(itemDiv);
        });
    }

    document.getElementById('modal-carrito').style.display = 'flex';
}

/** Elimina un producto del carrito por índice. */
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
    // Volver a mostrar el carrito para reflejar el cambio (o cerrarlo si queda vacío)
    if (carrito.length > 0) {
        mostrarCarrito(); 
    } else {
        cerrarModal('modal-carrito');
    }
    mostrarNotificacion(`Producto eliminado del carrito.`);
}

/** Muestra la ventana modal para ingresar datos de envío. */
function mostrarDatos() {
    cerrarModal('modal-carrito');
    document.getElementById('modal-datos').style.display = 'flex';
}

/** Cierra cualquier ventana modal. */
function cerrarModal(id) {
    document.getElementById(id).style.display = 'none';
}

/** Envía el pedido a WhatsApp y limpia el carrito. */
function generarMensajeWhatsApp(event) {
    event.preventDefault(); // Detener el envío del formulario por defecto
    
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;
    const total = carrito.reduce((sum, item) => sum + item.precioTotal, 0);
    const numeroYoglat = "573148726681"; // **<-- REEMPLAZA CON TU NÚMERO DE WHATSAPP BUSINESS**

    // 1. Encabezado y Datos
    let mensaje = `*¡NUEVO PEDIDO DE YOGLAT! 🍨*%0A%0A`;
    mensaje += `*DATOS DEL CLIENTE:*%0A`;
    mensaje += `👤 Nombre: ${nombre}%0A`;
    mensaje += `📞 Teléfono: ${telefono}%0A`;
    mensaje += `📍 Dirección: ${direccion}%0A%0A`;
    mensaje += `---%0A%0A`;

    // 2. Resumen del Pedido
    mensaje += `*🛒 RESUMEN DEL PEDIDO:*%0A`;
    carrito.forEach((item, index) => {
        // Item principal
        mensaje += `${index + 1}. ${item.nombre} - *$${item.precioTotal.toLocaleString('es-CO')}*%0A`;
        
        // Opciones
        item.opciones.forEach(op => {
            const precioOp = op.precio > 0 ? ` (+${op.precio.toLocaleString('es-CO')})` : '';
            mensaje += `    - ${op.nombre} (${op.tipo})${precioOp}%0A`;
        });
    });

    // 3. Total
    mensaje += `%0A*TOTAL A PAGAR: $${total.toLocaleString('es-CO')}*%0A`;
    mensaje += `%0A---%0A%0A`;
    mensaje += `¡Gracias por tu pedido!`;

    // 4. Crear el enlace
    const url = `https://api.whatsapp.com/send?phone=${numeroYoglat}&text=${mensaje}`;
    
    // Abrir WhatsApp en una nueva pestaña
    window.open(url, '_blank');
    
    // Opcional: Limpiar carrito y cerrar modal después de enviar
    carrito = [];
    actualizarCarrito();
    cerrarModal('modal-datos');
    
    // Muestra notificación de éxito
    mostrarNotificacion('¡Pedido enviado a WhatsApp!');
}

/** Función: Muestra un modal de notificación estético. */
function mostrarNotificacion(mensaje) {
    const modal = document.getElementById('modal-notification');
    const textElement = document.getElementById('modal-notification-text');

    if (modal && textElement) {
        // 1. Establecer el mensaje
        textElement.textContent = mensaje;
        
        // 2. Mostrar la notificación (usamos display: flex y luego la clase 'active')
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('active');
        }, 10); // Pequeño retraso para asegurar que 'display: flex' se aplique antes de la transición

        // 3. Temporizador para ocultar la notificación
        setTimeout(() => {
            modal.classList.remove('active');
            // Ocultar el elemento después de que la transición haya terminado (0.2s + un pequeño margen)
            setTimeout(() => {
                modal.style.display = 'none';
            }, 250);
        }, 2500); // Mantiene el mensaje visible por 2.5 segundos
    }
}

// Iniciar la carga del menú cuando el documento esté listo
document.addEventListener('DOMContentLoaded', () => {
    cargarMenu();
    actualizarCarrito();
    
    // Asignar el evento al formulario
    const form = document.getElementById('datos-formulario');
    if(form) {
        form.addEventListener('submit', generarMensajeWhatsApp);
    }
});