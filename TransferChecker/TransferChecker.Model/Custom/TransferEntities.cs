using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TransferChecker.Model.JsonEntities;

namespace TransferChecker.Model
{
    public partial class TransferEntities
    {
        public IEnumerable<JsonStation> GetStationsJSON()
        {
            return from st in this.Stations
                   select new JsonStation
                   {
                       Id = st.Id,
                       Name = st.Name,
                       Number = st.Number
                   };
        }
    }
}
