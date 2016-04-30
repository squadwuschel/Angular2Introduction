﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Angular2FullApp.Controllers
{
    public class TemplatesController : Controller
    {
        // GET: Templates
        public PartialViewResult BindingTests()
        {
            return PartialView("~/ScriptsApp/Components/BindingTests/BindingTests.cshtml");
        }

        public PartialViewResult Favorite()
        {
            return PartialView("~/ScriptsApp/Components/Favorite/FavoriteComponent.cshtml");
        }

        public PartialViewResult Accordion()
        {
            return PartialView("~/ScriptsApp/Components/Accordion/AccordionComponent.cshtml");
        }

        public PartialViewResult FormularTests()
        {
            return PartialView("~/ScriptsApp/Components/FormularTests/FormularTests.cshtml");
        }
    }
}