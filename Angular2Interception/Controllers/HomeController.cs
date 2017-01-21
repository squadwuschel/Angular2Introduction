using System.Web.Mvc;

namespace Angular2Interception.Controllers
{
    public class HomeController : Controller
    {
        [AllowAnonymous]
        public ActionResult Index()
        {
            //die Index.html wird von WebPack in das Verzeichnis kopiert und die Standardroute 
            //lädt dann automatisch die index.html
            return new FilePathResult("~/wwwroot/index.html", "text/html");
        }

        [AllowAnonymous]
        public ActionResult GetCurrentUsername()
        {
            return Json("SquadWuschel", JsonRequestBehavior.AllowGet);
        }
    }
}