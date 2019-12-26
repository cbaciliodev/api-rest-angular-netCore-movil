using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Seguridad.Models;
using Seguridad.negocio.servicio;

namespace Seguridad.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class usuarioController : ControllerBase
    {
        private usuarioInterface _usuarioInterface;

        public usuarioController(usuarioInterface usuarioInterface)
        {
            _usuarioInterface = usuarioInterface;
        }

        [HttpPost]
        [Route("login")]
        public IActionResult ValidarUsuario([FromBody] tbl_usuario usuario)
        {
            bool result = _usuarioInterface.ValidarUsuario(usuario.username, usuario.clave);

            if (!result)
            {
                return Unauthorized(new { message="Ud no esta autorizado"});
            }

            return Ok(new { authorization = result });
        }
    }
}