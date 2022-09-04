import React from 'react'
import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table'
import Card from '../shared/components/UIElements/Card'

const Prices = props => {
  return (
    <Card>
      <PricingTable highlightColor='#1976D2'>
        <PricingSlot
          highlighted
          onClick={props.onShowModal}
          buttonText='ВЫБРАТЬ'
          title='ИНДИВИДУАЛЬНАЯ'
          priceText='1500 грн'
        >
          <PricingDetail>
            {' '}
            <b>Продолжительность</b> 1 час
          </PricingDetail>
          <PricingDetail>
            {' '}
            <b>50 фото</b> в базовой цветокоррекции
            <br />
            Из них в <b>профессиональной ретуши </b>- 15 фото.
          </PricingDetail>
          <PricingDetail>
            {' '}
            <b>Срок получения снимков - </b> 2 недели
          </PricingDetail>
          <PricingDetail>
            {' '}
            <b>Аренда фотостудии</b> оплачивается отдельно (<b>600-800</b> грн)
          </PricingDetail>
        </PricingSlot>
        <PricingSlot
          highlighted
          onClick={props.onShowModal}
          buttonText='ВЫБРАТЬ'
          title='ГРУППОВАЯ'
          priceText='300-500 грн/чел'
        >
          <PricingDetail>
            {' '}
            <b>Продолжительность</b> 1-3 часа
          </PricingDetail>
          <PricingDetail>
            {' '}
            <b>50 фото</b> в базовой цветокоррекции
            <br />
            Из них в <b>профессиональной ретуши </b>- 15 фото.
          </PricingDetail>
          <PricingDetail>
            {' '}
            <b>Срок получения снимков - </b> 2 недели
          </PricingDetail>
          <PricingDetail>
            {' '}
            <b>Аренда фотостудии</b> оплачивается отдельно (<b>600-800</b> грн)
          </PricingDetail>
        </PricingSlot>
      </PricingTable>
      <section name='info' style={{ marginTop: '5rem' }}>
        <h1 className='centered'>В ЦЕНУ ЛЮБОЙ ФОТОСЕССИИ ВХОДИТ:</h1>
        <ul>
          <li>
            <h2>
              <i class='camera retro icon'></i>
              Консультация по всем вопросам о фотосессии
            </h2>
          </li>
          <li>
            <h2>
              <i class='camera retro icon'></i>
              Подготовка к съемке. Поиск идеи, студии, локации, подбор одежды
            </h2>
          </li>
          <li>
            <h2>
              <i class='camera retro icon'></i>
              Помощь с позированием во время съемки
            </h2>
          </li>
        </ul>
        <h4 style={{ margin: '3rem' }}>
          Съемка возможна в различных стилях и жанрах, какой будет Ваша
          фотосессия, мы решаем заранее, на этапе подготовки. Если вы не знаете
          наверняка какой стиль вам подходит, мы поможем, предложив несколько
          вариантов. Выбор есть всегда!{' '}
        </h4>
        <h4 style={{ margin: '0 3rem' }}>
          Мы практикуем индивидуальный подход к каждой съемке, вы получите
          удовольствие и будете довольны результатом.
        </h4>
        <br />
        <br />
        <br />
      </section>
    </Card>
  )
}

export default Prices
