using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            double[] numbers = { 3.123, 1.23, 5.345, 23.5 };
            Console.WriteLine("{0:C}", numbers[1]);
            Console.ReadLine();
        }
    }
}
