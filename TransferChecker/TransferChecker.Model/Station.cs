//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace TransferChecker.Model
{
    using System;
    using System.Collections.Generic;
    
    public partial class Station
    {
        public Station()
        {
            this.Companies = new HashSet<Company>();
        }
    
        public int Id { get; set; }
        public int Number { get; set; }
        public string Name { get; set; }
        public System.DateTime DateAdded { get; set; }
    
        public virtual ICollection<Company> Companies { get; set; }
    }
}
