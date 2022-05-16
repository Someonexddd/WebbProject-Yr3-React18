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
    public class PurchaseModelsController : ControllerBase
    {
        private readonly PurchaseDbContext _context;
        private readonly IWebHostEnvironment _hostEnviroment;

        public PurchaseModelsController(PurchaseDbContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            this._hostEnviroment = hostEnvironment;
        }

        // GET: api/PurchaseModels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PurchaseModel>>> GetPurchases()
        {
            
            var result = await _context.Purchases
                .Select(x => new PurchaseModel()
                {
                    PurchaseId = x.PurchaseId,
                    Name = x.Name,
                    Adress = x.Adress,
                    Country = x.Country,
                    PurchaseDate = x.PurchaseDate,
                    PostNum = x.PostNum,
                    CardName = x.CardName,
                    CardNum = x.CardNum,
                    CardCCV = x.CardCCV
                })
                .ToListAsync();
            return result;
        }

        // GET: api/PurchaseModels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PurchaseModel>> GetPurchaseModel(Guid id)
        {
            var purchaseModel = await _context.Purchases.FindAsync(id);

            if (purchaseModel == null)
            {
                return NotFound();
            }

            return purchaseModel;
        }

        // PUT: api/PurchaseModels/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPurchaseModel(Guid id, PurchaseModel purchaseModel)
        {
            if (id != purchaseModel.PurchaseId)
            {
                return BadRequest();
            }


            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PurchaseModelExists(id))
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

        // POST: api/PurchaseModels
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PurchaseModel>> PostPurchaseModel([FromForm]PurchaseModel purchaseModel)
        {
            purchaseModel.PurchaseId = new Guid();
            purchaseModel.PurchaseDate = new DateTime();
            _context.Purchases.Add(purchaseModel);
            await _context.SaveChangesAsync();

            return StatusCode(201);
        }

        // DELETE: api/PurchaseModels/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePurchaseModel(Guid id)
        {
            var purchaseModel = await _context.Purchases.FindAsync(id);
            if (purchaseModel == null)
            {
                return NotFound();
            }

            _context.Purchases.Remove(purchaseModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PurchaseModelExists(Guid id)
        {
            return _context.Purchases.Any(e => e.PurchaseId == id);
        }
    }
}
