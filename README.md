# КЭДО

## Сокращения

* КЭДО - кадровый электронный документооборот.
* ЛК - личный кабинет.

## Описание примера

Пример включает следующие компоненты: 
- Data > KEDO.sol - решение, добавляющее в систему Docsvision новые виды для карточек Документ и Задание, а также необходимые расширенные метаданные.
- Data > KEDOSolution - папка с решением, включающим web-разметки для личного кабинета сотрудника КЭДО.
- Extensions > InsertGreetingExtension - папка с клиентским расширением, в котором реализованы скрипты для добавления приветствия в личный кабинет сотрудника.
- Extensions > SignatureWebExtension - папка с клиентским расширением, в котором реализованы скрипты для ограничения функционала электронной подписи для сотрудников из группы "Сотрудники КЭДО".
- Extensions > CustomTablesWebExtension - папка с клиентским расширением, содержит клиентский скрипт и стили для элемента управления "SampleCustomTables".
- Extensions > CustomTablesDesignerExtension - папка с расширением для Конструктора разметок, содержит описание элемента управления "SampleCustomTables".
- Images - папка с иконками для личного кабинета сотрудника КЭДО.
- Styles - папка со стилями для личного кабинета сотрудника КЭДО.
  - add-style.button.css - стили, назначающие серый цвет, для кнопок в заданиях На подписание КЭДО.
  - fix-layout.css - стили для главной страницы личного кабинета Сотрудника КЭДО.
  - UrlButton.css - стили для кнопки создания заявки в личном кабинете сотрудника.

### Контрол "SampleCustomTables"
Контрол "SampleCustomTables" содержит базовый функционал контрола "Виджет / Карточки папки" ("FolderCardsDashboardWidget") с дополнительными параметрами: изменение наименования ссылки под таблицей, добавление счетчика документов / заданий / заявок и дополнительную кнопку с заданной ссылкой и наименованием.

## Настройка среды разработки

**Перечень необходимых инструментов:** 
* [Visual Studio 2017/2019](https://www.visualstudio.com)
* [NodeJS v14.17.0+](https://nodejs.org/en/)

## Сборка примера
1. Откройте Samples.sln и соберите проект SampleCustomTablesDesignerExtension.
2. Соберите клиентские расширения:
   - Откройте командную строку и перейдите в текущую директорию.
   - Выполните команду `.\install.ps1 3`.
   - Дождитесь завершения сборки клиентских расширений. 
3. Скопируйте каталог `SamplesOutput\Plugins\SampleCustomTablesDesignerExtension` в `<Каталог установки Web-клиента>\Plugins`
4. Скопируйте каталог `SamplesOutput\Site\Content\Modules\KEDO` в `<Каталог установки Web-клиента>\Site\Content\Modules`

## Проверка примера

**Для проверки примера требуется установить:**
*  Backoffice 5.5.8650.0 или выше.
*  Web-клиент 5.5.6478.184 или выше.

1. В Менеджере Решений импортируйте решение "КЭДО" - `Data\KEDO.sol`.

    Компоненты данного решения:
    - Справочник видов: 
		1. Документ - КЭДО - Кадровый документ, Заявки сотрудника.
		2. Задание - Задание КС - На подписание КЭДО.
    - Общие роли: Сотрудник ЛК КЭДО.
    - Метаданные: Кадровые документы.
    - Конструктор правил нумерации: Кадровый документ.
    - Конструктор справочников: Кадровые документы, Заявка сотрудника.
    - Поиск: КЭДО и все подчиненные поисковые запросы.
    - Представление: КЭДО и все подчиненные.
    - Папки: КЭДО и подчиненные:
        1. Виртуальная папка "Заявки от сотрудников" для HR-специалистов.
        2. Папка "КЭДО сотрудника" для хранения маршрутов согласования и подчиненные папки для личного кабинета сотрудника.

2. В конструкторе web-разметок импортируйте решение "КЭДО". Для этого выберите файл Solution.xml в папке решения `Data\KEDOSolution`
 
3. Добавьте сотрудников, для которых необходим личный кабинет в группу "Сотрудники КЭДО" в справочнике сотрудников.

4. Добавьте сотрудников кадрового документооборота в группу "Cпециалисты по КЭДО" в справочнике сотрудников.

5. В справочнике видов (тип - Согласование, вид - Усовершенствованное согласование) настройте согласование для видов карточек Кадровый документ. Заполнините названия "Первый подписывает сотрудник" и "Первый подписывает работодатель", способ создания "Создание согласования", затем выберите соответствующие шаблоны из папки "КЭДО сотрудника".

6. В Web-клиенте добавьте папку для специалистов по КЭДО. Главное меню - Настроить - Добавить папку - "КЭДО" - "Заявки от сотрудников".
