using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using RentABikeWAPI.DAL;

namespace RentABikeWAPI.Web.Models
{
    public class BicycleDBContext:DbContext
    {
        public BicycleDBContext() : base("BicycleDBContext")
        {
            
        }


        public DbSet<Bicycle> Bicycles { get; set; }

        public DbSet<BicycleType> BicycleTypes { get; set; }
    }
}