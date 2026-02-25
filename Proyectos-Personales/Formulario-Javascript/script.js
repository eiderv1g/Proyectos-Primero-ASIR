document.addEventListener("click", (e) => {

    /* SEPARAR / UNIR NOMBRE */
    if (e.target.classList.contains("sep")) {
        const grupo = document.getElementById("grupo-nom");
        const valor = document.getElementById("nomape").value.split(" ");

        grupo.innerHTML = `
            <input type="text" placeholder="Nombre" class="form-control" value="${valor[0] || ""}">
            <input type="text" placeholder="Apellido" class="form-control" value="${valor[1] || ""}">
            <button type="button" class="jun">&gt;&lt;</button>
        `;
    }

    if (e.target.classList.contains("jun")) {
        const grupo = document.getElementById("grupo-nom");
        const inputs = grupo.querySelectorAll("input");

        grupo.innerHTML = `
            <input type="text" id="nomape" class="form-control"
                value="${inputs[0].value} ${inputs[1].value}">
            <button type="button" class="sep">&lt;&gt;</button>
        `;
    }

    /* AÑADIR TEL / MAIL / DIR */
    if (e.target.classList.contains("mas")) {
        const grupo = e.target.parentElement;
        const clon = grupo.cloneNode(true);

        clon.querySelector(".mas").replaceWith(crearBotonMenos());
        grupo.parentElement.appendChild(clon);
    }

    /* ELIMINAR CAMPO */
    if (e.target.classList.contains("menos")) {
        e.target.parentElement.remove();
    }

    /* AÑADIR CAMPO EXTRA */
    if (e.target.id === "otro") {
        const tipo = document.getElementById("nuevo").value;
        const campos = document.getElementById("campos");

        let html = "";
        if (tipo === "n") {
            html = `<textarea placeholder="Notas"></textarea>`;
        } else if (tipo === "w") {
            html = `<input type="url" placeholder="Sitio web" class="form-control">`;
        } else {
            html = `
                <input type="date" class="form-control">
                <select>
                    <option>Cumpleaños</option>
                    <option>Fiesta</option>
                    <option>Otro</option>
                </select>
            `;
        }

        const contenedor = document.createElement("div");
        contenedor.innerHTML = html;
        contenedor.appendChild(crearBotonMenos());
        campos.appendChild(contenedor);
    }
});

function crearBotonMenos() {
    const btn = document.createElement("button");
    btn.textContent = "-";
    btn.type = "button";
    btn.classList.add("menos");
    return btn;
}
