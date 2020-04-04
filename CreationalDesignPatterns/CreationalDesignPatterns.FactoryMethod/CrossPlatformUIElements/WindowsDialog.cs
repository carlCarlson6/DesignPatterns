using System;
using System.Collections.Generic;
using System.Text;

namespace CreationalDesignPatterns.FactoryMethod.CrossPlatformUIElements
{
    public class WindowsDialog : Dialog
    {
        public override IButton CreateButton()
        {
            throw new NotImplementedException();
        }
    }
}
