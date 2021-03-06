﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace TransferChecker.Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "AddBattalion",
                url: "AddBattalion",
                defaults: new { controller = "Admin", action = "AddBattalion" }
            );

            routes.MapRoute(
                name: "AddStation",
                url: "AddStation",
                defaults: new { controller = "Admin", action = "AddStation" }
            );

            routes.MapRoute(
                name: "AddCompany",
                url: "AddCompany",
                defaults: new { controller = "Admin", action = "AddCompany" }
            );

            routes.MapRoute(
                name: "GetStations",
                url: "GetStations",
                defaults: new { controller = "Admin", action = "GetStations" }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Main", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}