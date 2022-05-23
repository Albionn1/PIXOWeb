using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace PIXOWeb.userData
{
    public partial class PixoLoginContext : DbContext
    {
        public PixoLoginContext()
        {
        }

        public PixoLoginContext(DbContextOptions<PixoLoginContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Qytetet> Qytetets { get; set; } = null!;
        public virtual DbSet<RegularUser> RegularUsers { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-GN06IKO\\SQLEXPRESS;Database=PixoLogin;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Qytetet>(entity =>
            {
                entity.HasKey(e => e.QytetiId)
                    .HasName("PK__qytetet__51DE6112CA385F69");

                entity.ToTable("qytetet");

                entity.Property(e => e.QytetiId).HasColumnName("qytetiID");

                entity.Property(e => e.EmriQytetit)
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("emriQytetit");
            });

            modelBuilder.Entity<RegularUser>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK__regularU__CB9A1CFF57D7C1D7");

                entity.ToTable("regularUsers");

                entity.Property(e => e.UserId).HasColumnName("userId");

                entity.Property(e => e.EmailAddress)
                    .HasMaxLength(55)
                    .IsUnicode(false)
                    .HasColumnName("emailAddress");

                entity.Property(e => e.Emri)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("emri");

                entity.Property(e => e.Mbiemri)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("mbiemri");

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("phoneNumber");

                entity.Property(e => e.Qyteti)
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("qyteti");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
