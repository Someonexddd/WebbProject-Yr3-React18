using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebbProjekt_yr3.Data;
using WebbProjekt_yr3.Models;
using Microsoft.AspNetCore.Hosting;

namespace WebbProjekt_yr3.Controllers
{
    [Route("api/[controller]")]
    public class ProductModelsController : ControllerBase
    {
        private readonly ProductDbContext _context;
        private readonly IWebHostEnvironment _hostEnviroment;

        public ProductModelsController(ProductDbContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            this._hostEnviroment = hostEnvironment;
        }

        // GET: api/ProductModels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductModel>>> GetProducts()
        {

            var result = await _context.Products
                .Select(x => new ProductModel()
                {
                    ProductId = x.ProductId,
                    Name = x.Name,
                    Artist = x.Artist,
                    ReleaseYear = x.ReleaseYear,
                    AddDate = x.AddDate,
                    Country = x.Country,
                    Format = x.Format,
                    Genre = x.Genre,
                    UnitsInStock = x.UnitsInStock,
                    UnitsSold = x.UnitsSold,
                    ImageName = x.ImageName,
                    ImageSrc = String.Format("{0}://{1}{2}/Images/{3}", Request.Scheme, Request.Host, Request.PathBase, x.ImageName),
                    ImageAlt = x.ImageAlt
                })
                .ToListAsync();
            return result;
        }

        // GET: api/ProductModels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProductModel>> GetProductModel(Guid id)
        {
            var productModel = await _context.Products.FindAsync(id);

            if (productModel == null)
            {
                return NotFound();
            }

            return productModel;
        }

        // PUT: api/ProductModels/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProductModel(Guid id, [FromForm]ProductModel productModel)
        {
            if (id != productModel.ProductId)
            {
                return BadRequest();
            }

            if (productModel.ImageFile != null)
            {
                DeleteImage(productModel.ImageName);
                productModel.ImageName = await SaveImage(productModel.ImageFile);
            }

            _context.Entry(productModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ProductModels
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ProductModel>> PostProductModel([FromForm]ProductModel productModel)
        {
            productModel.ProductId = new Guid();
            productModel.AddDate = new DateTime();
            productModel.UnitsSold = 0;
            productModel.ImageName = await SaveImage(productModel.ImageFile);
            _context.Products.Add(productModel);
            await _context.SaveChangesAsync();

            return StatusCode(201);
        }

        // DELETE: api/ProductModels/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProductModel(Guid id)
        {
            var productModel = await _context.Products.FindAsync(id);
            if (productModel == null)
            {
                return NotFound();
            }

            _context.Products.Remove(productModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProductModelExists(Guid id)
        {
            return _context.Products.Any(e => e.ProductId == id);
        }

        [NonAction]
        public async Task<string> SaveImage(IFormFile imageFile)
        {
            string imageName = new String(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
            imageName = imageName+DateTime.Now.ToString("yymmssfff")+Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_hostEnviroment.ContentRootPath, "Images", imageName);
            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(fileStream);
            }
            return imageName;
        }
        [NonAction]
        public void DeleteImage(string imageName)
        {
            var imagePath = Path.Combine(_hostEnviroment.ContentRootPath, "Images", imageName);
            if (System.IO.File.Exists(imagePath))
                System.IO.File.Delete(imagePath);
        }
    }
}
