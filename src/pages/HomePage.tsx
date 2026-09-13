import { gallery, services, site } from '../content/site'

export function HomePage() {
  return <>
    <section className="hero" id="top">
      <div className="hero-copy"><p className="eyebrow">Студия красоты Алии Ситдиковой · Казань</p><h1>{site.tagline}</h1><p className="lede">{site.description}</p>
        <div className="actions"><a className="button button-primary" href={site.booking[0].url} target="_blank" rel="noreferrer">Записаться онлайн <span>↗</span></a><a className="button button-light" href="#services">Выбрать услугу</a></div>
      </div>
      <div className="hero-visual"><img src={`${import.meta.env.BASE_URL}images/hero.jpg`} alt="Интерьер и атмосфера AS Studio" /><div className="hero-stamp">AS<br /><span>studio</span></div></div>
      <div className="hero-note">Красота<br />как состояние</div>
    </section>

    <section className="intro" id="studio"><div className="intro-mark">AS</div><div><p className="eyebrow">Всё в одном месте</p><h2>От первого штриха<br />до полного образа</h2><p>В AS Studio можно собрать образ целиком: обновить цвет и форму волос, сделать маникюр, подчеркнуть взгляд, добавить макияж или выбрать время для массажа.</p></div></section>

    <section className="services" id="services"><header className="section-head"><div><p className="eyebrow">Что делаем</p><h2>Услуги студии</h2></div><p>Выберите направление, а точную стоимость и свободное время уточните при онлайн-записи.</p></header><div className="service-list">{services.map((service, index) => <article key={service.title}><span className="service-number">0{index + 1}</span><h3>{service.title}</h3><p>{service.summary}</p><strong>{service.price}</strong></article>)}</div></section>

    <section className="gallery-section" id="gallery"><div className="gallery-copy"><p className="eyebrow">Портфолио</p><h2>Работы,<br />которые говорят<br />за нас</h2><a className="text-link" href={site.instagram} target="_blank" rel="noreferrer">Больше в Instagram ↗</a></div><div className="gallery-reel">{gallery.map((item, index) => <figure key={item.src} className={`gallery-item item-${index + 1}`}><img src={`${import.meta.env.BASE_URL}${item.src}`} alt={item.alt} /><figcaption>AS Studio · 0{index + 1}</figcaption></figure>)}</div></section>

    <section className="booking" id="contacts"><div><p className="eyebrow">Онлайн-запись</p><h2>Ваше время<br />уже ждёт</h2><p>Две студии в Казани. Выберите удобную локацию и услугу в расписании мастеров.</p></div><div className="booking-links">{site.booking.map((item) => <a key={item.label} className="booking-link" href={item.url} target="_blank" rel="noreferrer"><span>{item.label}</span><b>Записаться ↗</b></a>)}</div></section>

    <section className="contact-band"><div><p className="eyebrow">Контакты</p><h2>Казань</h2></div><div className="locations">{site.contact.addresses.map((address, index) => <div key={address}><span>0{index + 1}</span><strong>{address}</strong><a href={index === 0 ? site.contact.phoneHref : site.contact.secondPhoneHref}>{index === 0 ? site.contact.phone : site.contact.secondPhone}</a></div>)}</div><div className="socials"><a href={site.instagram} target="_blank" rel="noreferrer">Instagram ↗</a><a href={site.telegram} target="_blank" rel="noreferrer">Telegram ↗</a><a href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a></div></section>
  </>
}
