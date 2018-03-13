using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using RentABikeWAPI.Web.Models;
using WebGrease.Css.Extensions;

namespace RentABikeWAPI.DAL
{
    public class BicyclesInitializer:System.Data.Entity.DropCreateDatabaseAlways<BicycleDBContext>
    {
        protected override void Seed(BicycleDBContext context)
        {
            
            context.BicycleTypes.Add(new BicycleType { Id = 1, Name = "Road Bike"});
            context.BicycleTypes.Add(new BicycleType { Id = 2, Name = "Mountain Bike" });
            context.BicycleTypes.Add(new BicycleType { Id = 3, Name = "Urban Bike" });


            context.Bicycles.Add(new Bicycle
            {
                Id = 1,
                Name = "Urban Navigator 4000",
                BicycleTypeId = 3,
                Quantity = 10,
                RentPrice = 12
            });

            //var bicycles = new List<Bicycle>
            //{
            //    new Bicycle {Id = 1, Name = "Roadster 12", BicycleTypeId = 1, Quantity = 5, RentPrice = 15},
            //    new Bicycle {Id = 2, Name = "Bikinator GX", BicycleTypeId = 2, Quantity = 5, RentPrice = 9},
            //    new Bicycle {Id = 3, Name = "BMX Navigator 2000 MX", BicycleTypeId = 3, Quantity = 3, RentPrice = 18},
            //    new Bicycle {Id = 4, Name = "Urban Navigator 4000", BicycleTypeId = 4, Quantity = 10, RentPrice = 12},
            //    new Bicycle {Id = 5, Name = "Urban Explorer", BicycleTypeId = 4, Quantity = 10, RentPrice = 12}
            //};
            //bicycles.ForEach(b => context.Bicycles.Add(b));
            //context.SaveChanges();

            base.Seed(context);
        }
    }
}