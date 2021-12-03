using System;

namespace HRLib
{
    public class Employee
    {
        #region Fields &Properties
        private string empName;
        public string EmpName
        {
            get { return empName; }
            set { empName = value; }
        }
        private string address;
        public string Address
        {
            get { return address; }
            set { address = value; }
        }
        #endregion
        #region Constructor
        public Employee()
        {
            string EmpName = "siva";
            String Address = "Mumbai";
        }
        public Employee(string firstname, string address)
        {
            this.EmpName = firstname;
            this.Address = address;
        }
        #endregion
        public override string ToString()
        { 
          return "EmpName: " + empName + " Address: " + address;
  

        }
    }
}
