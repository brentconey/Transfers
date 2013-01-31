using System;
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

        [HttpPost]
        public ActionResult AddStation(Station st)
        {
            st.DateAdded = DateTime.Now;
            db.Stations.Add(st);
            db.SaveChanges();
            return Json(st, JsonRequestBehavior.DenyGet);
        }

        [HttpPost]
        public ActionResult AddCompany(Company c)
        {
            c.DateAdded = DateTime.Now;
            db.Companies.Add(c);
            db.SaveChanges();
            return Json(c, JsonRequestBehavior.DenyGet);
        }

        [HttpPost]
        public ActionResult AddBattalion(Battalion b)
        {
            b.DateAdded = DateTime.Now;
            db.Battalions.Add(b);
            db.SaveChanges();
            return Json(b, JsonRequestBehavior.DenyGet);
        }

        public ActionResult GetStations()
        {
            return Json(db.GetStationsJSON(), JsonRequestBehavior.AllowGet);
        }

    }
}
