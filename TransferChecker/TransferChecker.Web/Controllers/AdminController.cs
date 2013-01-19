﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TransferChecker.Model;

namespace TransferChecker.Web.Controllers
{
    public class AdminController : Controller
    {
        private TransferEntities db;

        public AdminController()
        {
            db = new TransferEntities();
        }
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult AddStation(Station st)
        {
            st.DateAdded = DateTime.Now;
            db.Stations.Add(st);

            return Json(db.SaveChanges(), JsonRequestBehavior.DenyGet);
        }

    }
}
