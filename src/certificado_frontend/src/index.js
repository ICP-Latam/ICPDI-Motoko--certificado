import { certificado_backend } from "../../declarations/certificado_backend";


document.querySelector("form").addEventListener("submit", async (e) => {

  e.preventDefault();

  const button = e.target.querySelector("button");
  const id = document.getElementById("id").value.toString();
  const curso = document.getElementById("curso").value.toString();
  const instructor = document.getElementById("instructor").value.toString();
  const alumno = document.getElementById("alumno").value.toString();
  const fecha = document.getElementById("fecha").value.toString();
  const modalidad = document.getElementById("modalidad").value.toString();
  const lugar = document.getElementById("lugar").value.toString();
  const opcion = document.querySelector('input[type=radio][name=opcion]:checked').value;
 
  button.setAttribute("disabled", true);
  if (opcion=="CREAR") {
    const greeting = await certificado_backend.crearCertificado(curso, instructor, alumno, fecha, modalidad, lugar);
    //const numero=certificado_backend.getCertificaId();
    window.alert("Certificado creado");
  }else{
    if (opcion=="BORRAR"){
      const greeting = await certificado_backend.borraCertificado(id);
      if(greeting){
        window.alert("Certificado Borrado");
      }else{
        window.alert("Certificado No Encontrado");
      }
    }else{
      if(opcion=="ACTUALIZAR"){
        const greeting = await certificado_backend.actualizaCertificado(id,curso,instructor,alumno, fecha, modalidad, lugar);
        if(greeting){
          window.alert("Certificado Actualizado");
        }else{
          window.alert("Certificado No Actualizado");
        }
      }else{
        if(opcion=='LEER'){
          var greeting = await certificado_backend.getCertificado(id);
          console.log(greeting);
          if(greeting!=null){
            window.alert("Certificado Asignado");
          }else{
            window.alert("Certificado No Encontrado");
          }
        }else{
          if(opcion=='ENLISTAR'){
            const greeting = await certificado_backend.getCertificados();
            if(greeting!=null){
              window.alert("Certificados Existentes");
            }else{
              window.alert("Certificados No Encontrados");
            }
          }
        }
      }
    }
  }

  button.removeAttribute("disabled");

  return false;
});