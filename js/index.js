fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) //Conversion a JSON
  .then(data => {
    let tabla = `<tr>
                  <th>Nombre</th>
                  <th>Usuario</th>
                  <th>Email</th>
                  <th>Direccion</th>
                  <th>Telefono</th>
                  <th>Sitio Web</th>
                  <th>Compania</th>
                </tr>`
    
    for (let user of data) {
      tabla += `<tr>
                  <td>${user.name}</td>
                  <td>${user.username}</td>
                  <td>${user.email}</td>
                  <td>${user.address.street}, ${user.address.suite}, ${user.address.city}</td>
                  <td>${user.phone}</td>
                  <td>${user.website}</td>
                  <td>${user.company.name}</td>
                </tr>`
    }

    //Renderizar a HTML
    document.getElementById("tblUsers").innerHTML = tabla
  })