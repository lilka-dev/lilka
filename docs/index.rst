.. Lilka documentation master file, created by
   sphinx-quickstart on Tue Feb 20 21:34:30 2024.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Вітаємо вас у документації проєкту Lilka!
=========================================

Що таке Лілка?
--------------

Лілка - це консоль на базі :term:`мікроконтролера<Мікроконтролер>` ESP32-S3-WROOM-1-N16R8.

Її головна особливість - це те, що її можна легко зібрати з готових модулів, які продаються в магазинах.

Інший важливий фактор - це ціна: сумарна вартість всіх компонентів базового набору Лілки в Україні - близько 500-600 гривень.

.. image:: ./_static/v21.jpg
   :alt: Лілка
   :align: center
   :width: 50%

Мета цього пристрою - це насамперед навчання. Зібравши її, в вас в руках опиниться проста, але повноцінна залізяка з купою цікавих можливостей:

- :ref:`Емулятор NES <sd-card-feature>`, який дозволить вам грати в нінтендівські ігри
- Можливість :ref:`запускати DOOM <sd-card-feature>` з непоганим FPS
- Вбудований WiFi- та Bluetooth-передавач
- :ref:`Роз'єм розширення <extension>` для під'єднання власних модулів
- :ref:`Підтримка Lua <lua-intro>` для легкого створення власних ігор та програм
- Можливість запуску програм з SD-карти

.. warning::

   Слід зауважити, що Лілка не позиціонується як ігрова консоль.

   Вона - це :term:`DIY`-набір, який буде дуже легко зібрати навіть недосвідченим початківцям, і її мета - дати вам дешевий набір заліза, з яким можна погратись,
   а також готову бібліотеку взаємодії з дисплеєм, SD-картою, кнопками, звуком, батареєю та іншими компонентами.

   Звісно ж, ви зможете грати на ній в ігри! Але ігри - це не основне її призначення.

.. toctree::
    :maxdepth: 2
    :caption: Зміст:

    about/index
    hardware/index
    assembly/index
    programming/index
    KeiraOS <https://docs.lilka.dev/projects/keira/>
    SDK <https://docs.lilka.dev/projects/sdk/>
    case/index
    faq/index
    glossary
    community
    contributing/index

.. .. sidebar-links::
..     :caption: Посилання:
..     :github:

.. toctree::
    :caption: Посилання

    Головна документація <https://docs.lilka.dev>
    Документація KeiraOS <https://docs.lilka.dev/projects/keira/>
    Документація SDK <https://docs.lilka.dev/projects/sdk/>

    GitHub <https://github.com/lilka-dev/lilka>
    Discord <https://discord.gg/HU68TaKCu6>

.. toctree::
    :caption: Проєкти нашої спільноти

    "Rustilka": Rust для Лілки <https://rust.lilka.dev>
    "Meowui": альтернативний UI для Лілки <https://github.com/Kolodieiev/lilka_v2_meowui>

Indices and tables
==================

* :ref:`genindex`
