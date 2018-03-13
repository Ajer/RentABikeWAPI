using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RentABikeWAPI.Models
{
    public class BicycleIndexModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int BicycleTypeId { get; set; }

        public int Quantity { get; set; }

        public int RentPrice { get; set; }
    }
}