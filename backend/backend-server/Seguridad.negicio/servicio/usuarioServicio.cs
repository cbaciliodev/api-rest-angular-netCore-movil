using Seguridad.dataAccess.configuracion;
using System.Linq;

namespace Seguridad.negocio.servicio
{
    public class usuarioServicio : usuarioInterface
    {

        private seguridadContext _context;

        public usuarioServicio(seguridadContext context)
        {
            _context = context;

        }

        public bool ValidarUsuario(string username, string clave)
        {
            var usuario = _context.tbl_Usuario.Where(data => data.username == username && data.clave == clave).FirstOrDefault();


            //if ("cbaciliod"== username && "123"== clave)
            if (usuario != null)

            {
                return true;
            }

            return false;
        }
    }
}
