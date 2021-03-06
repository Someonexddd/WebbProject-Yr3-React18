using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;

namespace WebbProjekt_yr3.Models
{       
    public class PurchaseModel
    {
        [JsonIgnore]
        [Key]
        public Guid PurchaseId { get; set; }
        [Column(TypeName ="nvarchar(max)")]
        public string Name { get; set; }
        [Column(TypeName = "nvarchar(max)")]
        public string Adress { get; set; }
        [Column(TypeName ="nvarchar(max)")]
        public string PostNum { get; set; }
        [Column (TypeName ="DateTime")]
        public DateTime PurchaseDate { get; set; }

        [Column(TypeName = "nvarchar(max)")]
        public string Country { get; set; }
        [Column(TypeName = "nvarchar(max)")]
        public int CardNum { get; set; }
        [Column(TypeName = "nvarchar(max)")]
        public int CardCCV { get; set; }
        [Column(TypeName = "nvarchar(max)")]
        public string CardName { get; set; }
        [Column(TypeName = "nvarchar(max)")]
        public string ProductId { get; set; }


    }
}
