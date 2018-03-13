    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using RentABikeWAPI.Web.Models;

    namespace RentABikeWAPI.DAL
    {
        internal sealed class Configuration : DbMigrationsConfiguration<RentABikeWAPI.Web.Models.BicycleDBContext>
        {
            public Configuration()
            {
                AutomaticMigrationsEnabled = false;
            }

            protected override void Seed(RentABikeWAPI.Web.Models.BicycleDBContext context)
            {
                //  This method will be called after migrating to the latest version.

                //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
                //  to avoid creating duplicate seed data. E.g.
                //
                context.BicycleTypes.AddOrUpdate(b => b.Id,
                    new BicycleType {Id = 1, Name = "Road Bike"},
                    new BicycleType {Id = 2, Name = "Childrens Bike"},
                    new BicycleType {Id = 3, Name = "Mountain Bike"},
                    new BicycleType {Id = 4, Name = "Urban Bike"}
                );

                context.Bicycles.AddOrUpdate(b => b.Id,
                    new Bicycle {Id = 1, Name = "Roadster 12", BicycleTypeId = 1, Quantity = 5, RentPrice = 15},
                    new Bicycle {Id = 2, Name = "Bikinator GX", BicycleTypeId = 2, Quantity = 5, RentPrice = 9},
                    new Bicycle
                    {
                        Id = 3,
                        Name = "BMX Navigator 2000 MX",
                        BicycleTypeId = 3,
                        Quantity = 3,
                        RentPrice = 18
                    },
                    new Bicycle
                    {
                        Id = 4,
                        Name = "Urban Navigator 4000",
                        BicycleTypeId = 4,
                        Quantity = 10,
                        RentPrice = 12
                    },
                    new Bicycle {Id = 5, Name = "Urban Explorer", BicycleTypeId = 4, Quantity = 10, RentPrice = 12}
                );
            }
        }
 }

