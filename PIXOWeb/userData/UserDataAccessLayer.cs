using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PIXOWeb.userData

{
    public class UserDataAccessLayer
    {
        PixoLoginContext db = new PixoLoginContext();
        public IEnumerable<RegularUser> GetAllRegularUsers()
        {
            try
            {
                return db.RegularUsers.ToList();
            }
            catch
            {
                throw;
            }
        }
        //Add new regular User record
        public int AddRegularUser(RegularUser regularUser)
        {
            try
            {
                db.RegularUsers.Add(regularUser);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        public int UpdateEmployee(RegularUser regularUser)
        {
            try
            {
                db.Entry(regularUser).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }
        //Get details of a specified regular user
        public RegularUser GetRegularUserData(int id)
        {
            try
            {
#pragma warning disable CS8600 // Converting null literal or possible null value to non-nullable type.
                RegularUser regularUser = db.RegularUsers.Find(id);
#pragma warning restore CS8600 // Converting null literal or possible null value to non-nullable type.
#pragma warning disable CS8603 // Possible null reference return.
                return regularUser;
#pragma warning restore CS8603 // Possible null reference return.
            }
            catch
            {
                throw;
            }
        }
        //Delete a record of a particular user
        public int DeleteRegUser(int id)
        {
            try
            {
                RegularUser user = db.RegularUsers.Find(id);
                db.RegularUsers.Remove(user);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //Get Cities
        public List<Qytetet> GetQytetets()
        {
            List<Qytetet> firstCity = new List<Qytetet>();
            firstCity = (from qytetet in db.Qytetets select qytetet).ToList();

            return firstCity;
        }
    }
}
