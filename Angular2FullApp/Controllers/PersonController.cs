using System.Web.Mvc;
using Angular2FullApp.Models;

namespace Angular2FullApp.Controllers
{
    public class PersonController : Controller
    {
        public ActionResult GetPersons()
        {
            return Json(PersonCreator.CreatePersons(10), JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetPerson(int id)
        {
            return Json(PersonCreator.GetPerson(id), JsonRequestBehavior.AllowGet);
        }



    }
}