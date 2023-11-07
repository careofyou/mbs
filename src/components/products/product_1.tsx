"use client";

import React from "react";
import SectionHeading from "../section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function Product_1() {
  

  return (
    <motion.section
      
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="product"
    >
      <SectionHeading>Наши дистрибьюторы:</SectionHeading>
      <p><strong><br /><span>Наши дистрибьюторы:</span></strong><br /><br /><strong></strong><strong>Иркутск</strong><br />ООО &laquo;Восток-Интертрейд&raquo; <br />664048, г. Иркутск, ул. Розы Люксембург, 184<br />Тел./Факс: +7 (3952) 55-46-71 (многоканальный)<br />Факс: +7 (3952) 55-46-14 <br />моб: 8-908-650-11-22<br />E-mail: Malova_galina@mail.ru<br /><br /><strong>Казань </strong><br />ООО НПП &laquo;Агат&raquo;<br />420095, г. Казань, а/я 103, ул. Восстания-100, зд.140<br />Тел.: +7 (843) 512-12-14, 512-12-20<br />E&ndash;mail: agat@agatcom.ru </p>
<p><strong>Краснодар </strong><br />ООО &laquo;Паритет&raquo;<br />350005, г. Краснодар, ул. Кореновская, 43 <br />Тел.: +7 (861) 258-10-50, 258-41-25<br />E&ndash;mail: paritetkuban@mail.ru</p>
<p><strong>Пермь </strong><br />ООО &laquo;Паритет-Центр&raquo;<br />614000, г. Пермь, ул. Дружбы, 34<br />Тел.: +7 (342) 263-36-00<br />E-mail: lab@abf.perm.ru <br /><br /><strong>Ростов-на-Дону </strong><br />ООО &laquo;Вита &ndash; Рос&raquo;<br />Россия, Ростовская обл.<br />344018, г. Ростов-на-Дону, ул. Семашко, д. 117-Б<br />Тел: +7 (863) 234-02-13, 234-03-63, 234-06-48<br />E-mail: vita-ros@mail.ru<br />Сайт: www.vita-ros.ru</p>
<p><strong>Саратов</strong><br />ООО &laquo;Рилайбл&raquo;<br />410003, г. Саратов,&nbsp; ул. Б. Горная, 182<br />Тел: +7 (8452) 21-53-83, 21-53-84, 27-94-01<br />Е-mail: sale@labclub.pro<br />Сайт: www.labclub.pro</p>
<p><strong>Улан-Удэ </strong><br />ООО &laquo;Восточная медицинская компания&raquo;<br />670000, г. Улан-Удэ, ул. Борсоева, 105<br />Адрес для корреспонденции: 670000, а\я-10713<br />Тел.: +7 (3012) 221-500, 221-505<br />E-mail: amida77@mail.ru<br /><br /><strong>Чебоксары </strong><br />ООО &laquo;МЦ Открытие&raquo;<br />428025, г. Чебоксары, ул. Эльгера, 15А<br />Тел.: +7 (8352) 67-33-13<br />тел./факс: (8352) 43-08-99<br />E-mail: aleks13_2001@mail.ru<br /><br /><br /></p>
<p><span><strong>Дистрибьюторы в СНГ:</strong></span></p>
<p><strong>Республика Кыргызстан</strong><br />ОсОО &laquo;Фарватер&raquo;<br />720040, г. Бишкек,&nbsp; ул. Панфилова, 136-6<br />Тел.: +7 (10-996312) 66-25-30<br />E&ndash;mail: farvater@jet.kg<br /><br /><strong>Республика Казахстан</strong><br />ТОО &laquo;Диамед&raquo;<br />Казахстан, 050010, г. Алматы, ул.Кармысова , д. 96<br />Тел: +7 7272 913660</p>


    </motion.section>
  );
}
