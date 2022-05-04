using System;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using WebbProjekt_yr3.Data;
using WebbProjekt_yr3.Models;

[assembly: HostingStartup(typeof(WebbProjekt_yr3.Areas.Identity.IdentityHostingStartup))]
namespace WebbProjekt_yr3.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) => {
            });
        }
    }
}