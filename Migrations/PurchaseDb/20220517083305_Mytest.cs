using Microsoft.EntityFrameworkCore.Migrations;

namespace WebbProjekt_yr3.Migrations.PurchaseDb
{
    public partial class Mytest : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ProductId",
                table: "Purchases",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ProductId",
                table: "Purchases");
        }
    }
}
