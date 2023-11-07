import React from "react";
import SectionHeading from "../section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function Contact_1() {
  

  return (
    <motion.section
     
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="contact"
    >
      <SectionHeading>
        Отдел продаж ООО &ldquo;Медико-биологический Союз&ldquo;
      </SectionHeading>
      <div  id="print_cont">
        <h3 className="mt-2 text-lg  text-gray-700">
          <span>
            <strong>
              Уважаемые коллеги!&nbsp;
              <br />
              По всем вопросам, связанным с приобретением продукции, ценами,
              условиями поставки просим обращаться в Отдел продаж.
              <br />
              <br />
            </strong>
          </span>
        </h3>
        <h2 className="mt-2 text-lg text-gray-700">
          <span>Отдел продаж</span>
        </h2>
        <p className="mt-2 text-lg text-gray-700">
          <span>
            Россия, 630090, г.&nbsp;Новосибирск, ул. Инженерная, 16 (
            <a href="index.php?id=263" target="_blank">
              схема проезда
            </a>
            )
          </span>
          <br />
          <span>Телефон: (383) 363-77-01</span>
          <br />
          <span>Факс: (383) 363-77-09</span>
          <br />
          <span>
            E-mail:{" "}
            <a href="mailto:products@mbu.ru" target="_blank">
              products@mbu.ru
              <br />
              <br />
            </a>
          </span>
          <span>
            <strong>Коммерческий директор</strong>
          </span>
          <br />
          <span>
            Баукова Анастасия Геннадьевна
            <br />
            <span>Телефон: +7 913 955 5597</span>
            <br />
            <span>E-mail:</span>
            <a href="mailto:A.baukova@mbu.ru">
              A.baukova@mbu.ru
              <br />
            </a>
          </span>
        </p>
        <p className="mt-2 text-lg text-gray-700">
          <span>
            <strong>Заведующий складом&nbsp;</strong>
          </span>
          <br />
          <span>Рязанцева Елена Юрьевна</span>
          <br />
          <span>
            E-mail:
            <a href="mailto:lena.ryazantseva@mbu.ru">
              {" "}
              lena.ryazantseva@mbu.ru
              <br />
              <br />
            </a>
          </span>
        </p>
        <h2>
          <span>Производственный отдел</span>
        </h2>
        <p className="mt-2 text-lg text-gray-700">
          <span>
            <strong>Заместитель директора по производству</strong>
          </span>
          <br />
          <span>Ломовская Татьяна Давыдовна </span>
          <br />
          <span>
            E-mail: <a href="mailto:lomovskaya@mbu.ru">lomovskaya@mbu.ru</a>
          </span>
        </p>
        <p className="mt-2 text-lg text-gray-700">
          <span>
            <br />
          </span>
        </p>
        <h2 className="mt-2 text-lg text-gray-700"></h2>
        <h2 className="mt-2 text-lg text-gray-700">
          <span>Отдел биологического и технологического контроля (ОБТК)</span>
        </h2>
        <p className="mt-2 text-lg text-gray-700">
          <span>Тел./Факс: +7 (383) 363-77-23&nbsp;</span>
          <br />
          <span>
            E-mail: <a href="mailto:obtk@mbu.ru">obtk@mbu.ru</a>
          </span>
        </p>
        <h2 className="mt-2 text-lg text-gray-700">
          <br />
          <span>Офис</span>
        </h2>
        <p className="mt-2 text-lg text-gray-700">
          <span>
            Почтовый адрес: Россия, 630090, г.&nbsp;Новосибирск, ул. Инженерная,
            16 (
            <a href="index.php?id=263" target="_blank">
              схема проезда
            </a>
            )&nbsp;
          </span>
          <br />
          <span>Телефон: +7 (383) 363-77-14, 363-77-16</span>
          <br />
          <span>Бухгалтерия: (383) 363-77-12, 363-77-10</span>
          <br />
          <span>Факс&nbsp;+7 (383) 363-77-18&nbsp;</span>
          <br />
          <span>
            Е-mail: <a href="mailto:info@mbu.ru">info@mbu.ru</a>{" "}
          </span>
          <br />
          <span>www.mbu.ru</span>
        </p>
        <p className="mt-2 text-lg text-gray-700">
          <span>
            <strong>
              Директор
              <br />
            </strong>
          </span>
        </p>
        <p className="mt-2 text-lg text-gray-700">
          <span>Лосев Михаил Викторович</span>
          <br />
          <span>Тел./факс:&nbsp; +7 (383) 363-77-14</span>
          <br />
          <span>
            E-mail:{" "}
            <a href="mailto:lossev@mbu.ru">
              lossev@mbu.ru
              <br />
              <br />
            </a>
          </span>
        </p>
        <p className="mt-2 text-lg text-gray-700">&nbsp;</p>
        <p className="mt-2 text-lg text-gray-700">
          <span>
            <strong>Банковские реквизиты&nbsp;</strong>
          </span>
        </p>
        <p className="mt-2 text-lg text-gray-700">
          <span>
            {" "}
            laquo;Медико-биологический Союз&raquo;
            <br />
            Р/сч&nbsp; 40702810200020001596
            <br />в Ф-ЛЕ СИБИРСКИЙ ПАО БАНКА &ldquo;ФК ОТКРЫТИЕ&ldquo; г. Новосибирск,
            <br />
            ИНН 5408010614, КПП 540801001
          </span>
          <br />
          <span>БИК 045004867, к/сч № 30101810250040000867</span>
        </p>
        <p className="mt-2 text-lg text-gray-700">
          <span>
            <strong>Юридический адрес:</strong>&nbsp;Россия, 630090,
            г.&nbsp;Новосибирск, ул. Инженерная, д.16, оф. 353
          </span>
        </p>
      </div>
    </motion.section>
  );
}
