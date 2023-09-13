using System;
using System.Collections.Generic;
using System.Resources;
using DocsVision.Platform.Tools.LayoutEditor.Extensibility;


namespace SampleCustomTablesDesignerExtension
{
    /// <summary>
    /// Представляет собой пример расширения для редактора разметок
    /// </summary>
    class SampleCustomTablesLayoutsDesignerExtension : WebLayoutsDesignerExtension
    {

        /// <summary>
        /// Создаёт новый экземпляр <see cref="SampleCustomTablesLayoutsDesignerExtension"/>
        /// </summary>
        /// <param name="provider">Сервис-провайдер</param>
        public SampleCustomTablesLayoutsDesignerExtension(IServiceProvider provider)
            : base(provider)
        {
        }


        /// <summary>
        /// Возвращает ResourceManager этого расширения (расширяет словарь локализации конструктора разметок, не путать с окном Localization конструктора разметок)
        /// </summary>
        protected override List<ResourceManager> GetResourceManagers()
        {
            return new List<ResourceManager>
            {
                Resources.ResourceManager
            };
        }
    }
}
