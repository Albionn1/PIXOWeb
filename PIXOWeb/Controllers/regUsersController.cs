using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PIXOWeb.userData;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PIXOWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class regUsersController : Controller
    {
        UserDataAccessLayer objUser = new UserDataAccessLayer();

        [HttpGet]

        [Route("api/User/Index")]
        public IEnumerable<RegularUser> Index()
        {
            return objUser.GetAllRegularUsers();  
        }
        [HttpPost]
        [Route("api/User/Create")]
        public int Create(RegularUser regUser)
        {
            return objUser.AddRegularUser(regUser);
        }

        [HttpGet]
        [Route("api/User/Details/{id}")]
        public RegularUser Details(int id)
        {
            return objUser.GetRegularUserData(id);
        }
        [HttpPut]
        [Route("api/User/Edit")]
        public int Edit(RegularUser regUser)
        {
            return objUser.UpdateEmployee(regUser);
        }

        [HttpDelete]
        [Route("api/User/Delete/{id}")]
        public int Delete(int id)
        {
            return objUser.DeleteRegUser(id);
        }

        [HttpGet]
        [Route("api/User/ListaQyteteve")]
        public IEnumerable<Qytetet> Details()
        {
            return objUser.GetQytetets();
        }
    }
}
