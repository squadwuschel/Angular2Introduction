using System;
using System.Collections.Generic;

namespace Angular2FullApp.Models
{
    public class PersonCreator
    {
        public static List<string> FirstNames = new List<string>() { "Klaus", "Elena", "Deamon", "Kai", "Horst", "Stephan", "John", "Elisa", "Thomas", "Lars", "Johannes", "Joe", "Anna", "Daniel" };

        public static List<string> LastNames = new List<string>() { "Hützel", "Müller", "Mayer", "Brandt", "Stork", "Hengst", "Hermsdorf", "Fila", "Knork" };

        public static List<string> MailProvider = new List<string>() {"gmx.de", "gmx.net", "gmail.de", "googlemail.com", "outlook.de", "aol.de" };

        public static List<Person> CreatePersons(int count)
        {
            var persons = new List<Person>();

            for (int i = 0; i < count; i++)
            {
               persons.Add(GetPerson(i));
            }

            return persons;
        }

        public static Person GetPerson(int id)
        {
            var rnd = new Random((int)DateTime.Now.Ticks);
            var person = new Person()
            {
                Active = (rnd.Next() % 3) == 0,
                Age = rnd.Next(1, 99),
                FistName = FirstNames[rnd.Next(0, FirstNames.Count)],
                LastName = FirstNames[rnd.Next(0, LastNames.Count)],
                EMail = String.Format("{0}.{1}@{2}", FirstNames, LastNames, MailProvider[rnd.Next(0, MailProvider.Count)]),
                Id = id
            };

            return person;
        }
    }
}