namespace CreationalDesignPatterns.FactoryMethod.CrossPlatformUIElements
{
    internal class WebDialog : Dialog
    {
        public override IButton CreateButton()
        {
            return new WebButton();
        }
    }
}