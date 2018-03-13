using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Web;
using System.Web.Helpers;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Http.Description;
using System.Web.Mvc;
//using System.Web.Mvc;
using Newtonsoft.Json;
using RentABikeWAPI.Models;
using RentABikeWAPI.Web.Models;

namespace RentABikeWAPI.Web.Controllers
{
    public class BicycleController : ApiController
    {
        private BicycleDBContext db = new BicycleDBContext();

        // GET api/Bicycle
        [System.Web.Mvc.HttpGet]
        public JsonResult<List<BicycleIndexModel>> GetBicycles()   // IQueryable<Bicycle> JsonResult<DbSet<Bicycle>>
        {
            var j = Request.RequestUri;
            var k = System.Web.HttpContext.Current.Request.UrlReferrer;
            if (k == null)
                //return NotFound();
                throw new HttpResponseException(HttpStatusCode.NotFound);
            //var h = new JsonSerializerSettings();
            //HttpContext.Current.Response.ContentType = "application/json";

            
            var res = new List<BicycleIndexModel>();

            foreach (var p in db.Bicycles)
            {
                var bI = new BicycleIndexModel();
                bI.Id = p.Id;
                bI.BicycleTypeId = p.BicycleTypeId;
                bI.Name = p.Name;
                bI.Quantity = p.Quantity;
                bI.RentPrice = p.RentPrice;
              
                res.Add(bI);
            }

            return Json(res);
            //return db.Bicycles;    // return base.Json(db.Bicycles);
        }

        // GET api/Bicycle/5
        [ResponseType(typeof(Bicycle))]
        public IHttpActionResult GetBicycle(int id)
        {
            Bicycle bicycle = db.Bicycles.Find(id);
            if (bicycle == null)
            {
                return NotFound();
            }

            return Ok(bicycle);
        }

        // PUT api/Bicycle/5
        public IHttpActionResult PutBicycle(int id, Bicycle bicycle)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != bicycle.Id)
            {
                return BadRequest();
            }

            db.Entry(bicycle).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BicycleExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST api/Bicycle
        [ResponseType(typeof(Bicycle))]
        public IHttpActionResult PostBicycle(Bicycle bicycle)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Bicycles.Add(bicycle);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = bicycle.Id }, bicycle);
        }

        // DELETE api/Bicycle/5
        [ResponseType(typeof(Bicycle))]
        public IHttpActionResult DeleteBicycle(int id)
        {
            Bicycle bicycle = db.Bicycles.Find(id);
            if (bicycle == null)
            {
                return NotFound();
            }

            db.Bicycles.Remove(bicycle);
            db.SaveChanges();

            return Ok(bicycle);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BicycleExists(int id)
        {
            return db.Bicycles.Count(e => e.Id == id) > 0;
        }
    }
}