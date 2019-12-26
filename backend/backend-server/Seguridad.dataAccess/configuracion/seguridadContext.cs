using Microsoft.EntityFrameworkCore;
using Seguridad.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Seguridad.dataAccess.configuracion
{
    public class seguridadContext : DbContext
    {

        public seguridadContext(DbContextOptions<seguridadContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            /*
            modelBuilder.ForSqlServerUseIdentityColumns();
            //modelBuilder.HasSequence<int>("OrderNumber");
                
            modelBuilder.Entity<tbl_usuario>()
                .Property(data => data.Id)
                .HasDefaultValueSql("Id");
                */

            modelBuilder.Entity<tbl_usuario>().ToTable("tbl_usuario");
            modelBuilder.ApplyConfiguration(new usuarioConfiguracion());
        }

        public DbSet<tbl_usuario> tbl_Usuario { get; set; }
    }
}
