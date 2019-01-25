using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication3
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("How many hours of gaming do you do a day?");
            int gamingHours = Convert.ToInt32(Console.ReadLine());

            if (gamingHours == 18)
            {
                Console.WriteLine("You are a legendary gamer.");
                Console.ReadLine();
            }else if (gamingHours < 18)
            {
                int needed = 18 - gamingHours;
                Console.WriteLine("You need " + needed + " more hours to be a true gamer.");
                Console.ReadLine();
            }else if (gamingHours > 18)
            {
                Console.WriteLine("You are...   T H E  A S C E N D E D  G A M E R");
                Console.ReadLine();
            }
        }
    }
}
