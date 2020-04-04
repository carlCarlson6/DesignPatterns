using System;
using System.Collections.Generic;
using System.Text;

namespace CreationalDesignPatterns.FactoryMethod.CrossPlatformUIElements
{
    class WindowsButton : IButton
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
