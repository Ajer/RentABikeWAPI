using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RentABikeWAPI.Web.Models
{
    [Flags]
    public enum BicycleTypes
    {
        RoadBike = 1,
        ChildrensBike = 2,
        MountainBike = 3,
        UrbanBike = 4
    }
}