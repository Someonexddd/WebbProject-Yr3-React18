using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebbProjekt_yr3.Migrations.PurchaseDb
{
    public partial class Test2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Purchases_ProductModel_ProductId",
                table: "Purchases");

            migrationBuilder.DropTable(
                name: "ProductModel");

            migrationBuilder.DropIndex(
                name: "IX_Purchases_ProductId",
                table: "Purchases");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ProductModel",
                columns: table => new
                {
                    ProductId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    AddDate = table.Column<DateTime>(type: "DateTime", nullable: false),
                    Artist = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Country = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Format = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Genre = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ImageAlt = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ImageName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ReleaseYear = table.Column<DateTime>(type: "date", nullable: false),
                    UnitsInStock = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UnitsSold = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductModel", x => x.ProductId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Purchases_ProductId",
                table: "Purchases",
                column: "ProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_Purchases_ProductModel_ProductId",
                table: "Purchases",
                column: "ProductId",
                principalTable: "ProductModel",
                principalColumn: "ProductId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
