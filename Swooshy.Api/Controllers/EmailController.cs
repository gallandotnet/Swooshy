using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Microsoft.Owin.Security;
using System.Web.Http.Cors;
namespace Swooshy.Api.Controllers
{
   // [EnableCors(origins: "http://localhost:60705/", headers: "*", methods: "get,post")]
    public class EmailController : ApiController
    {
        // GET: api/Email
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet]
        [ResponseType(typeof(ContactInfo))]
        [Route("email/{id}")]
        public async Task<IHttpActionResult> Get(int id)
        {
            List<ContactInfo> contacts = new List<ContactInfo>();

            ContactInfo ci = new ContactInfo { DisplayText = "Hello From The Email Controller", FullName = "Gary Allan" };
            contacts.Add(ci);
            
            var httpResponse = Request.CreateResponse(HttpStatusCode.OK, contacts);
            return ResponseMessage(await Task.FromResult(httpResponse));
        }

        // POST: api/Email
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Email/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Email/5
        public void Delete(int id)
        {
        }
    }

    public class ContactInfo
    {
        public string FullName { get; set; }
        public string DisplayText { get; set; }
    }
}
