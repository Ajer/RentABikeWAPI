using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RentABikeWAPI.Web.Models
{
    public class Bicycle
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int BicycleTypeId { get; set; }

        //public string TypeName
        //{
        //    get
        //    {
        //        return BicycleType.Name.ToString();
        //    }

        //}

        // public string TypeName { get; set; }

        public int Quantity { get; set; }

        public int RentPrice { get; set; }

        public virtual BicycleType BicycleType { get; set; }
    }
}