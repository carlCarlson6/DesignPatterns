using System;

namespace CreationalDesignPatterns.FactoryMethod.CrossPlatformUIElements
{
    public abstract class Dialog
    {
        public void Render(int dimX, int dimY)
        {

        }

        public abstract IButton CreateButton();
    }
}
