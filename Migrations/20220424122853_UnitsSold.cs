using Microsoft.EntityFrameworkCore.Migrations;

namespace WebbProjekt_yr3.Migrations
{
    public partial class UnitsSold : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UnitsSold",
                table: "Products",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UnitsSold",
                table: "Products");
        }
    }
}
