using System;
using System.Collections.Generic;

namespace PIXOWeb.userData
{
    public partial class RegularUser
    {
        public int UserId { get; set; }
        public string Emri { get; set; } = null!;
        public string Mbiemri { get; set; } = null!;
        public string EmailAddress { get; set; } = null!;
        public string PhoneNumber { get; set; } = null!;
        public string Qyteti { get; set; } = null!;
    }
}
