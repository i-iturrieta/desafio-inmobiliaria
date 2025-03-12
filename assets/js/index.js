const plantilla = document.getElementById("plantilla")
const nuevo = document.getElementById("nuevo")
const ventas = document.getElementById("ventas")
const propiedades = [
  {
    imagen: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    titulo: 'Apartamento de lujo en zona exclusiva',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    direccion: '123 Luxury Lane, restige Suburb, CA 45678',
    habitaciones: 4,
    banos: 4,
    precio: "5.000",
    fumar: false,
    mascotas: false,
    seVende: true,
  },
  {
    imagen: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    titulo: 'Apartamento acogedor en la montaña',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    direccion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    banos:1,
    precio: "1.200",
    fumar: true,
    mascotas: true,
    seVende: true,
  },
  {
    imagen: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    titulo: 'Penthouse de lujo con terraza panorámica',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    direccion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    banos:3,
    precio: "4.500",
    fumar: false,
    mascotas: true,
    seVende: true,
  },
  {
    imagen: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    titulo: 'Apartamento de lujo en zona exclusiva',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    direccion: '123 Luxury Lane, restige Suburb, CA 45678',
    habitaciones: 4,
    banos: 4,
    precio: "5.000",
    fumar: false,
    mascotas: false,
    seVende: true,
  },
  {
    imagen: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    titulo: 'Apartamento acogedor en la montaña',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    direccion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    banos:1,
    precio: "1.200",
    fumar: true,
    mascotas: true,
    seVende: true,
  },
  {
    imagen: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    titulo: 'Penthouse de lujo con terraza panorámica',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    direccion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    banos:3,
    precio: "4.500",
    fumar: false,
    mascotas: true,
    seVende: true,
  },
  {
    imagen: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    titulo: 'Apartamento en el centro de la ciudad',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    direccion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    banos:2,
    precio: "2.000",
    fumar: false,
    mascotas: true,
    seVende: false,
  },
  {
    imagen: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    titulo: 'Apartamento en el centro de la ciudad',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    direccion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    banos:2,
    precio: "2.000",
    fumar: false,
    mascotas: true,
    seVende: false,
  }
  ,
  
  {
    imagen: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    titulo: 'Apartamento en el centro de la ciudad',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    direccion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    banos:2,
    precio: "2.000",
    fumar: false,
    mascotas: true,
    seVende: false,
  }

]








for (let propiedad of propiedades){
  if (ventas && propiedad.seVende){
    const cards = `
          <div class="col-md-4 mb4">
            <div class="card">
              <img
                src= ${propiedad.imagen}
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedad.titulo}
                </h5>
                <p class="card-text">
                  ${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propiedad.direccion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${propiedad.banos} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.precio}</p>
                  ${propiedad.fumar ? "<p class='text-success'> <i class='fas fa-smoking'></i> Permitido fumar </p>" : "<p class='text-danger'><i class='fas fa-smoking-ban'></i> No se permite fumar </p>"}
                </p>
                <p class="text-danger">
                  ${propiedad.mascotas ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'}
                </p>
              </div>
            </div>
          </div>
    `
    nuevo.innerHTML += cards
    console.log(propiedades)
  }
  else if (propiedad.seVende == false){
    const cards = `
          <div class="col-md-4 mb4">
            <div class="card">
              <img
                src= ${propiedad.imagen}
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedad.titulo}
                </h5>
                <p class="card-text">
                  ${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propiedad.direccion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${propiedad.banos} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.precio}</p>
                  ${propiedad.fumar ? "<p class='text-success'> <i class='fas fa-smoking'></i> Permitido fumar </p>" : "<p class='text-danger'><i class='fas fa-smoking-ban'></i> No se permite fumar </p>"}
                </p>
                <p class="text-danger">
                  ${propiedad.mascotas ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'}
                </p>
              </div>
            </div>
          </div>
    `
    nuevo.innerHTML += cards
    console.log(propiedades)
  }
  
}






























plantilla.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="index.html">Inmobiliaria ADL</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!-- <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
              </li> -->
            <li class="nav-item">
              <a class="nav-link" href="./propiedades_venta.html">En venta</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./propiedades_alquiler.html">Alquiler</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>



`
    