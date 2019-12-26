using System;
using System.Collections.Generic;
using System.Text;

namespace Seguridad.negocio.servicio
{
    public interface usuarioInterface
    {

        bool ValidarUsuario(string username, string clave);

    }
}
