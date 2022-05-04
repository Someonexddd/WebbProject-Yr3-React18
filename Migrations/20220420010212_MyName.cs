using Microsoft.EntityFrameworkCore.Migrations;

namespace WebbProjekt_yr3.Migrations
{
    public partial class MyName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Artist",
                table: "Products",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Artist",
                table: "Products");
        }
    }
}
