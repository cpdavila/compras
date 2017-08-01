/*$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})
*/
var valCorreo = '';
console.log(constantes.servicioWeb);

function registrar() {
    var copiarCorreo = $('#correo').val();
    $('#userCorreo').val(copiarCorreo);

    $("#formulario1").validate({
        rules: {
            correo: {
                required: true,
                email: true,

            }
        },
        messages: {
            correo: {
                required: "",
                email: ""
            }
        },
        submitHandler: function(form) {
            var email = $('#correo').val();
            valCorreo = 'correo';
            $('#usuarioModal').modal();
            //enviar(email);
            //$('#myModal').modal();
            //$('#correo').val('');

        }
    });


}


function registrar2() {

    $("#formulario3").validate({
        rules: {
            correo3: {
                required: true,
                email: true,

            }
        },
        messages: {
            correo3: {
                required: "",
                email: ""
            }
        },
        submitHandler: function(form) {
            var email = $('#correo3').val();
            valCorreo = 'correo3';
            var copiarCorreo = $('#correo3').val();
            $('#userCorreo').val(copiarCorreo);

            $('#usuarioModal').modal();

            //enviar(email);
            //$('#myModal').modal();
            $('#correo3').val('');

        }
    });


}

function registrarMovil() {
    $("#formulario2").validate({
        rules: {
            correo2: {
                required: true,
                email: true,

            }
        },
        messages: {
            correo2: {
                required: "Ingresar correo",
                email: "Ingrese un correo válido"
            }
        },
        submitHandler: function(form) {
            var email = $('#correo2').val();
            $('#userCorreo').val(email);
            valCorreo = 'correo2';
            $('#usuarioModal').modal();

            //userForm2();
            //enviar(email);
            //$('#myModal').modal();
            //$('#correo2').val('');

        }
    });


}

function registrarMovil2() {
    $("#formulario4").validate({
        rules: {
            correo4: {
                required: true,
                email: true,

            }
        },
        messages: {
            correo4: {
                required: "Ingresar correo",
                email: "Ingrese un correo válido"
            }
        },
        submitHandler: function(form) {
            var email = $('#correo4').val();
            valCorreo = 'correo4';
            var copiarCorreo = $('#correo4').val();
            $('#userCorreo').val(copiarCorreo);

            $('#usuarioModal').modal();

            //enviar(email);
            //$('#myModal').modal();
            $('#correo4').val('');

        }
    });


}

/*function registrar1() {
    enviar1();
    $('#myModal').modal();
}*/

/** BEGIN Formulario de registro */
function abrirForm() {
    $('#modalForm').modal();
}
/** END Formulario de registro */

const urlGuardar = 'https://script.google.com/macros/s/AKfycbxD2r8qY9sZEFwRNJQg9OsvDQoWi9zLiAnZp3FDHMiJ2bvnENc/exec';

/***Hoja de calculo */
function enviar(email) {
    var data = new FormData();
    data.append("tipo", "REGISTRO");
    data.append("correo", email);
    //data.append("correo", document.getElementById("correo").value);
    //data.append("telefono", document.getElementById("telefono").value);
    //data.append("ciudad", document.getElementById("ciudad").value);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", constantes.servicioWeb);
    xhr.send(data);
}

function enviar1() {
    var data = new FormData();
    data.append("tipo", "REGISTRO");
    data.append("correo", document.getElementById("correo1").value);
    // data.append("correo", document.getElementById("correo").value);
    // data.append("telefono", document.getElementById("telefono").value);
    // data.append("ciudad", document.getElementById("ciudad").value);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", constantes.servicioWeb);

    xhr.send(data);
}

function enviarForm() {
    $("#formulario5").validate({
        rules: {
            nombres: {
                required: true
            },
            apellidos: {
                required: true
            },
            correo5: {
                required: true,
                email: true,

            },
            telefono: {
                required: true

            },
            ciudad: {
                required: true

            }
        },
        messages: {
            nombres: {
                required: "Ingresar nombres",
            },
            apellidos: {
                required: "Ingresar apellidos",
            },
            correo5: {
                required: "Ingresar correo",
                email: "Ingrese un correo válido"
            },
            telefono: {
                required: "Ingresar teléfono",

            },
            ciudad: {
                required: "Ingresar ciudad",

            }
        },
        submitHandler: function(form) {
            var email5 = $('#correo5').val();
            var nombres = $('#nombres').val();
            var apellidos = $('#apellidos').val();
            var telefono = $('#telefono').val();
            var ciudad = $('#ciudad').val();
            var data = new FormData();
            data.append("tipo", "ASISTENTE");
            data.append("correo", email5);
            data.append("nombres", nombres);
            data.append("apellidos", apellidos);
            data.append("telefono", telefono);
            data.append("ciudad", ciudad);

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function() {
                if (this.readyState === 4) {
                    console.log(this.responseText);
                    $('#correo5').val('');
                    $('#nombres').val('');
                    $('#apellidos').val('');
                    $('#telefono').val('');
                    $('#ciudad').val('');
                    $('#modalForm').modal('hide');
                    $('#myModal').modal();
                }
            });

            xhr.open("POST", constantes.servicioWeb);
            xhr.send(data);
            //enviar(email5);
            //$('#myModal').modal();
            //$('#correo5').val('');

        }
    });


}

function userForm() {
    $("#userform").validate({
        rules: {
            userNombres: {
                required: true
            },
            userApellidos: {
                required: true
            },
            userCorreo: {
                required: true,
                email: true,
            },
            userCiudad: {
                required: true
            },
            userSector: {
                required: true
            }
        },
        messages: {
            userNombres: {
                required: "Ingresar nombres",
            },
            userApellidos: {
                required: "Ingresar apellidos",
            },
            userCorreo: {
                required: "Ingresar correo",
                email: "Ingrese un correo válido"
            },
            userCiudad: {
                required: "Ingresar ciudad",
            },
            userSector: {
                required: "Ingresar sector",
            }

        },
        submitHandler: function(form) {
            var userCorreo = $('#userCorreo').val();
            var userNombres = $('#userNombres').val();
            var userApellidos = $('#userApellidos').val();
            var userCiudad = $('#userCiudad').val();
            var userSector = $('#userSector').val();

            var data = new FormData();
            data.append("tipo", "REGISTRO");
            data.append("correo", userCorreo);
            data.append("nombres", userNombres);
            data.append("apellidos", userApellidos);
            data.append("ciudad", userCiudad);
            data.append("sector", userSector);

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function() {
                if (this.readyState === 4) {
                    console.log(this.responseText);
                    $('#' + valCorreo).val('');
                    $('#userCorreo').val('');
                    $('#userNombres').val('');
                    $('#userApellidos').val('');
                    $('#userCiudad').val('');
                    $('#userSector').val('');
                    $('#usuarioModal').modal('hide');
                    $('#myModal').modal();
                }
            });

            xhr.open("POST", constantes.servicioWeb);
            xhr.send(data);
            //enviar(email5);
            //$('#myModal').modal();
            $('#' + valCorreo).val('');

        }
    });


}