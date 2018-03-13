using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RentABikeWAPI.Web.Models
{
    //[Flags]
    //public enum BicycleType
    //{
    //    RoadBike = 1,
    //    ChildrensBike = 2,
    //    MountainBike = 3,
    //    UrbanBike = 4
    //}

    public class BicycleType
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Bicycle> Bicycles { get; set; }

    }
}