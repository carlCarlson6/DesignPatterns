using System;
using System.Collections.Generic;
using System.Text;

namespace CreationalDesignPatterns.FactoryMethod.CrossPlatformUIElements
{
    public interface IButton
    {
        String Render(int dimX, int dimY);
        void OnClick();
    }
}
