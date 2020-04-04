using System;
using System.Collections.Generic;
using System.Text;

namespace CreationalDesignPatterns.FactoryMethod.CrossPlatformUIElements
{
    public class WebButton : IButton
    {
        public void OnClick()
        {
            throw new NotImplementedException();
        }

        public string Render(int dimX, int dimY)
        {
            throw new NotImplementedException();
        }
    }
}
