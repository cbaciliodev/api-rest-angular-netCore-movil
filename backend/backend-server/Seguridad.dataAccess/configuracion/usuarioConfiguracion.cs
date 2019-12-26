using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Seguridad.Models;

namespace Seguridad.dataAccess.configuracion
{
    class usuarioConfiguracion : IEntityTypeConfiguration<tbl_usuario>
    {
        public void Configure(EntityTypeBuilder<tbl_usuario> builder)
        {
            builder.HasKey(prop => prop.Id);

            builder.Property(prop => prop.username)
                .HasColumnType("varchar(50)")
                .HasMaxLength(50)
                .IsRequired();

            builder.Property(prop => prop.clave)
                .HasColumnType("varchar(50)")
                .HasMaxLength(50)
                .IsRequired();

            builder.Property(prop => prop.estado)
                .HasColumnType("char(1)")
                .HasMaxLength(1)
                .IsRequired();
        }
    }
}
