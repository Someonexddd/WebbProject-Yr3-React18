using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebbProjekt_yr3.Models;

namespace WebbProjekt_yr3.Data
{
    public class ProductDbContext : DbContext
    {
        public ProductDbContext(DbContextOptions<ProductDbContext> options) : base(options) { }
        public DbSet<ProductModel> Products { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ProductModel>()
                .Property(b => b.AddDate)
                .HasDefaultValueSql("getdate()");
            modelBuilder.Entity<ProductModel>()
                .Property(b => b.ProductId)
                .HasDefaultValueSql("(newid())");
        }
    }
}