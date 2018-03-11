using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RentABikeWAPI.Web.Models
{
    public class Bicycle
    {
        public int id { get; set; }

        public string name { get; set; }

        public BicycleTypes type { get; set; }

        public string typeName
        {
            get
            {
                return type.ToString().Replace("Bike", " Bike");
            }
         
        }

        public int quantity { get; set; }

        public int rentPrice { get; set; }
    }
}