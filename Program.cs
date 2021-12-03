using System;
using HRLib;

namespace ABCCorporation
{
    class Program
    {
        static void Main(string[] args)
        {
            Employee employee = new Employee("Siva", "Mumbai");
            Console.WriteLine(employee.ToString());
        }
    }
}
