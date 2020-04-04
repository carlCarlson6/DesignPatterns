using System;

namespace CreationalDesignPatterns.FactoryMethod.CrossPlatformUIElements
{
    class Program
    {
        static void Main(string[] args)
        {
            Dialog dialog = new DialogInitializer().Initialize("Web");

            dialog.Render(5, 5);
        }
    }
}
