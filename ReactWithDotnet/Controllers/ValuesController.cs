using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ReactWithDotnet.Controllers
{
    [Route("api/people")]
    public class ValuesController : Controller
    {
        protected static List<Person> people = new List<Person>
        {
            new Person
            {
                Id = 1,
                FirstName = "Artur",
                LastName = "Ziemianski",
                PhoneNumber = "+48 712311231"
            }
        };

        // GET api/values
        [HttpGet]
        public IEnumerable<Person> Get()
        {
            return people;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Person Get(int id)
        {
            return people.FirstOrDefault(w=>w.Id == id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Person value)
        {
            people.Add(value);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Person value)
        {
            var person = people.First(w=>w.Id == id);
            person.FirstName = value.FirstName;
            person.LastName = value.LastName;
            person.PhoneNumber = value.PhoneNumber;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var person = people.First(w=>w.Id==id);
            people.Remove(person);
        }
    }

    public class Person
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
    }
}
