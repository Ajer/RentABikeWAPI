namespace RentABikeWAPI.Web.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using RentABikeWAPI.Web.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<RentABikeWAPI.Web.Models.BicycleDBContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(RentABikeWAPI.Web.Models.BicycleDBContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //

            context.Bicycles.AddOrUpdate(b=>b.id,
                 new Bicycle { id = 1, name = "Roadster 12", type = BicycleTypes.RoadBike, quantity = 5, rentPrice = 15 },
                 new Bicycle { id = 2, name = "Bikinator GX", type = BicycleTypes.ChildrensBike, quantity = 5, rentPrice = 9 },
                 new Bicycle { id = 3, name = "BMX Navigator 2000 MX", type = BicycleTypes.MountainBike, quantity = 3, rentPrice = 18 },
                 new Bicycle { id = 4, name = "Urban Navigator 4000", type = BicycleTypes.UrbanBike, quantity = 10, rentPrice = 12 },
                 new Bicycle { id = 5, name = "Urban Explorer", type = BicycleTypes.UrbanBike, quantity = 10, rentPrice = 12 }
            );                     
        }
    }
}
