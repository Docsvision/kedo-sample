# КЭДО

## Описание примера

Пример включает следующие компоненты: 
- Data > SolutionKEDO.sol - решение, добавляющее в систему Docsvision новые виды ... 
- Data > KEDOSolution - папка с решением, включающим разметки ...
- Data >  - артефакты серверного расширения Web-клиента ... 
- Data >  - артефакты расширения для Конструктора разметок ...

  *С кодом расширений можно ознакомиться перейдя по [ссылке](https://ddsm-gitlab.digdes.com/dv/web-client/samples/-/tree/develop/Controls/SampleCustomTables).*
  
  <!---
  Todo:
  * запушить 
    * решения из МР и КР
	* собранные расширения
  * обновить раздел Описание примера, добавить подробности
  -->

## Проверка примера

1. Установить на стенд решение "ЛК КЭДО" из Менеджера Решений.

Компоненты данного решения:
Справочник видов: Документ - Кадровый документ, Задание - на подписание кэдо
Общие роли: Сотрудник ЛК КЭДО
Метаданные: Кадровые документы
Конструктор Нумерации: Кадровый документ
Конструктор справочников: Кадровые документы, Заявка сотрудника
Поиск: кэдо и все вложенные (Мои задания на ознакомление, Мои задания на подписание, Мои кадровые документы, Поиск кадровых документов, Мои заявки, Заявки для HR)
Представление: кэдо -> "Документы дашборда","Документы лк кэдо", "Задания кэдо", "Заявки лк кэдо", "Заявки лк кэдо дашборд", "Заявки лк кэдо для HR"
Папки: "КЭДО" - все подчиненные,внутри папки маршруты согласования. "КЭДО кадровика"



После переноса решения из Менеджера решений:
2. Компоненты для сервера Web-клиент - скрипты и расширения.

   1. Скопируйте содержимое папки `Modules` в  `<Каталог установки Web-клиента>\Site\Content\Modules`.
   2. Перезапустите IIS.


3. Загрузить Решение "КЭДО"  в конструктор веб-разметок. Должны появиться:
а)Webframe
1.1 корень веб-фрейм
1.2 главная страница
1.3 диалог профиля пользователя
б)backoffice
1.1 Документ - Кадровый документ, заявка сотрудника
1.2 Задание КС - На согласование, На подписание КЭДО
1.3 Задание УД - На ознакомление


  <!---
  Todo:
  * актуализировать, пока добавлено, что есть на текущий момент
  -->