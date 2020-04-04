using System;
using System.Collections.Generic;
using System.Text;

namespace CreationalDesignPatterns.FactoryMethod.CrossPlatformUIElements
{
    public class DialogInitializer
    {
        public Dialog Initialize(String DialogType)
        {
            switch (DialogType)
            {
                case "Windows":
                    return new WindowsDialog();

                case "Web":
                    return new WebDialog();

                default:
                    throw new NotImplementedException();
            }
        }
    }
}
