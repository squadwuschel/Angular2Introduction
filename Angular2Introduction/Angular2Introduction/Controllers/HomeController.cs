using System.Web.Mvc;

namespace Angular2Introduction.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult MainComponent()
        {
            return View();
        }

        public ActionResult CoursesComponent()
        {
            return View();
        }
    }
}