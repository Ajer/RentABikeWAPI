using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace RentABikeWAPI.Web.Models
{
    public class BicycleDBContext:DbContext
    {
        public DbSet<Bicycle> Bicycles { get; set; }
    }
}