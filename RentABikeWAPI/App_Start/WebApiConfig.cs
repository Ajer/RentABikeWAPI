using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Net.Http.Headers;
using System.Net.Http.Formatting;
using System.Web.Routing;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;


namespace RentABikeWAPI.Web
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            
            // -------------------------------          

            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

           
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
                //constraints:null,
                //handler:null
            );


            //config.Formatters.Remove(config.Formatters.XmlFormatter); 

//            GlobalConfiguration.Configuration.IncludeErrorDetailPolicy =
//IncludeErrorDetailPolicy.LocalOnly;
           
          
            //var formatters = GlobalConfiguration.Configuration.Formatters;
            //var jsonFormatter = formatters.JsonFormatter;

            //jsonFormatter.MediaTypeMappings.Clear();
            //settings.Formatting = Formatting.Indented;
            //settings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            

            //config.EnsureInitialized();
        }
    }
}
