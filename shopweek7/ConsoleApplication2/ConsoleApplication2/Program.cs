using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication2
{
    
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello! What is your name? ");
            string userName = Console.ReadLine();

            Console.WriteLine("Nice to meet you, " + userName + ". Now, what is your age? ");
            int age = Convert.ToInt32(Console.ReadLine());

            if (age < 1 || age > 99){
                Console.WriteLine("Please enter a valid age. Enter R to restart.");
                string invalid = Console.ReadLine();
                if (invalid.ToUpper() == "R"){
                    Environment.Exit(0);
                }else
                {
                    Console.WriteLine("Wow aren't you original");
                    Console.ReadLine();
                    Environment.Exit(0);
                }
            }
            if (age < 14 && age >= 1)
            {
                Console.WriteLine("lol u small");
                Console.ReadLine();
                Environment.Exit(0);
            }
           if (age >= 14 && age <= 18)
            {
                Console.WriteLine("How are you liking high school so far?");
                Console.ReadLine();
                Environment.Exit(0);
            }
            if (age >= 19 && age <= 99)
            {
                Console.WriteLine("Congrats on graduating from high school!");
                Console.ReadLine();
                Environment.Exit(0);
            }
        }
    }
}
