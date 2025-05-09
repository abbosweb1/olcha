import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import './navbar2.css';
import { useState } from 'react';
import Logo from "../assets/plus.lRzD4Jf7.png";
import olchaLogo from "../assets/eco-products-logo.svg";
import { useTranslation } from 'react-i18next';

const Navbar2 = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartItems2 = useSelector((state) => state.cart.items2);

  const [marketVisible, setMarketVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = `
🆕 ${t('new_user_request')}:
👤 ${t('name')}: ${formData.username}
📧 ${t('email')}: ${formData.email}
📞 ${t('phone')}: ${formData.phone}
    `;

    const TELEGRAM_BOT_TOKEN = '7849113011:AAE74V4FYl5scAmSkMwvenYiChgHHs-vJG8';
    const CHAT_ID = '6181440042';
    const API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
        }),
      });

      if (response.ok) {
        alert(t('message_sent'));
        setFormData({ username: "", email: "", phone: "" });
        setOpen(false);
      } else {
        alert(t('send_error'));
      }
    } catch (error) {
      console.error("Telegram xabari yuborishda xatolik:", error);
      alert(t('send_error'));
    }
  };

  return (
    <div className="wrapperAll">
      <div className="navbarWrapper">
        <div className="navigationPanel">
          <div className="panelLeft">
            <button>{t('installment')}</button>
            <button>{t('discounts')}</button>
            <button>{t('games')}</button>
            <a id="xaritaId" href="#">{t('sitemap')}</a>
          </div>
          <div className="panelRight">
            <h1 id='pnrgh1'>+998 (94) 003 80 25</h1>
            <button id='olchadasoting'>{t('sell_on_olcha')}</button>
            <div className="tilWrapper">
              <div className="chiziq1"></div>
              <h1 id='tlwrph1' onClick={() => i18n.changeLanguage('uz')}>O'z</h1>
              <h1 id='tlwrph1' onClick={() => i18n.changeLanguage('ru')}>Ru</h1>
              <h1 id='tlwrph1' onClick={() => i18n.changeLanguage('en')}>En</h1>
              <div className="chiziq2"></div>
            </div>
          </div>
        </div>

        <div className="navbar">
          <img src={Logo} alt="Logo" />
          <div className="katalog">
            <div className="btns">
              {!marketVisible && (
                <button id="paydoBolish" onClick={() => setMarketVisible(true)}>
                  <div className="ps">
                    <p>☰</p>
                  </div>
                </button>
              )}
              {marketVisible && (
                <button id="berkitish" onClick={() => setMarketVisible(false)}>
                  ❌
                </button>
              )}
            </div>
            <div className={`marketWrapper ${marketVisible ? "show" : ""}`}>
              <div className="market">
                <div className="imgOlchaWrapper">
                  <h1 id="olchaH1"><img src={olchaLogo} alt="" /> Olcha Market</h1>
                </div>
                <div className="televizor">
                  <h1>{t('tv')}</h1>
                  <p>Shivaki</p>
                  <p>Artel</p>
                  <p>Samsung</p>
                  <p>Premier</p>
                  <p>Vesta</p>
                </div>
                <div className="videoTexnika">
                  <h1>{t('video_tech')}</h1>
                  <p>{t('home_theater')}</p>
                  <p>{t('dvd_player')}</p>
                  <p>{t('security_cams')}</p>
                  <p>{t('accessories')}</p>
                  <p>{t('video_equipment')}</p>
                </div>
                <div className="oyinKonsollari">
                  <h1>{t('game_consoles')}</h1>
                  <p>Playstation</p>
                  <p>{t('gamepads')}</p>
                  <p>{t('vr_glasses')}</p>
                  <p>{t('ps_games')}</p>
                  <p>Playsation 5</p>
                </div>
              </div>
            </div>
          </div>

          <div className="inputBtn">
            <input
              id="navbarInput"
              type="text"
              placeholder={t('search_placeholder')}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => navigate(`/search?q=${encodeURIComponent(query)}`)}
            />
          </div>

          <div className="TSSK">
            <div id="compareBox">
              <h1>〽</h1>
              <h2>{t('compare')}</h2>
            </div>

            <div id="wishlistBox" onClick={() => navigate('/wishlist')}>
              <h1>❤</h1>
              <h2>{t('wishlist')}</h2>
              {cartItems2.length > 0 && (
                <span className="cart-count">{cartItems2.length}</span>
              )}
            </div>

            <div id="cartBox">
              <NavLink to="/cartlist" className="cart-link">
                <h1>🛒</h1>
                <h2>{t('cart')}</h2>
                {cartItems.length > 0 && (
                  <span className="cart-count">{cartItems.length}</span>
                )}
              </NavLink>
            </div>

            <div id="loginBox">
              <button className="kirish-btn" onClick={() => setOpen(true)}>
                <span>🌐</span>
                <h2>{t('login')}</h2>
              </button>

              {open && (
                <div className="btnWrapper" onClick={() => setOpen(false)}>
                  <div className="modal show-modal" onClick={(e) => e.stopPropagation()}>
                    <div className="wrapperH1Btn">
                      <h1>{t('login_or_create')}</h1>
                      <button className="close-btn" onClick={() => setOpen(false)}>X</button>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div className="inputWrapper">
                        <label htmlFor="username">{t('name')}</label>
                        <input
                          type="text"
                          id="username"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                          placeholder="Ismingiz"
                          required
                        />
                      </div>

                      <div className="inputWrapper">
                        <label htmlFor="email">{t('email')}</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          required
                        />
                      </div>

                      <div className="inputWrapper">
                        <label htmlFor="phone">{t('phone')}</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+998 90 123 45 67"
                          required
                        />
                      </div>

                      <button type="submit" className="submit-btn">{t('login')}</button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;