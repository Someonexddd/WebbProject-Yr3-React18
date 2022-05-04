using Microsoft.EntityFrameworkCore.Migrations;

namespace WebbProjekt_yr3.Migrations
{
    public partial class imageAlt : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageAlt",
                table: "Products",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageAlt",
                table: "Products");
        }
    }
}
