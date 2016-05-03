using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TypeLite;

namespace Angular2FullApp.Models
{
    [TsClass]
    public class Person
    {
        public int Id { get; set; }
        public string FistName { get; set; }
        public string LastName { get; set; }
        public string EMail { get; set; }
        public int Age { get; set; }
        public bool Active { get; set; }
    }
}