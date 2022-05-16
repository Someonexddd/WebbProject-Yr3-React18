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
    public class PurchaseDbContext : DbContext
    {
        public PurchaseDbContext(DbContextOptions<PurchaseDbContext> options) : base(options) { }
        public DbSet<PurchaseModel> Purchases { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PurchaseModel>()
                .Property(b => b.PurchaseDate)
                .HasDefaultValueSql("getdate()");
            modelBuilder.Entity<PurchaseModel>()
                .Property(b => b.PurchaseId)
                .HasDefaultValueSql("(newid())");
        }
    }
}