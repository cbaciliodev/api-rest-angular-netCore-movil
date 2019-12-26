using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Seguridad.Models
{
    public class tbl_usuario
    {

        public tbl_usuario()
        {

        }

        [Column("Id")]
        public int Id { get; set; }
        [Column("username")]
        public string username { get; set; }
        [Column("clave")]
        public string clave { get; set; }
        [Column("estado")]
        public string estado { get; set; }

    }
}
