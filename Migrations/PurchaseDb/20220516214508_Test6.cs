using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebbProjekt_yr3.Migrations.PurchaseDb
{
    public partial class Test6 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Purchases_ProductModel_ProductId",
                table: "Purchases");

            migrationBuilder.AlterColumn<Guid>(
                name: "ProductId",
                table: "Purchases",
                type: "uniqueidentifier",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.AddForeignKey(
                name: "FK_Purchases_ProductModel_ProductId",
                table: "Purchases",
                column: "ProductId",
                principalTable: "ProductModel",
                principalColumn: "ProductId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Purchases_ProductModel_ProductId",
                table: "Purchases");

            migrationBuilder.AlterColumn<Guid>(
                name: "ProductId",
                table: "Purchases",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier",
                oldNullable: true);

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
