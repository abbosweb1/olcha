import { use, useState } from "react";
import "./navbar.css";
import Logo from "../assets/plus.lRzD4Jf7.png";
import olchaLogo from "../assets/eco-products-logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
    const [isMarketVisible, setMarketVisible] = useState(false);
    const [open , setOpen] = useState(false)

    return (
        <><div className="wrapperAll">
            <div className="navbarWrapper">
                <div className="navigationPanel">
                    <div className="panelLeft">
                        <button>0% Muddatli tolov</button>
                        <button>chegirmalar</button>
                        <button>Yutuqli oyinlar</button>
                        <a id="xaritaId" href="#">Sayt haritasi</a>
                    </div>
                    <div className="panelRight">
                        <h1>+998 (94) 003 80 25</h1>
                        <button>Olcha da soting</button>
                        <div className="tilWrapper">
                            <div className="chiziq1"></div>
                            <h1>Kril</h1>
                            <h1>O'z</h1>
                            <h1>Ru</h1>
                            <div className="chiziq2"></div>
                        </div>
                    </div>
                </div>
                <div className="navbar">
                    <img src={Logo} alt="Logo" />
                    <div className="katalog">
                        <div className="btns">
                            <button id="berkitish" onClick={() => setMarketVisible(false)}>❌</button>
                            <button id="paydoBolish" onClick={() => setMarketVisible(true)}>Katalog</button>
                        </div>
                        <div className={`marketWrapper ${isMarketVisible ? "show" : "hide"}`}>
                            <div className="market">
                                <div className="imgOlchaWrapper">
                                    <h1 id="olchaH1"><img src={olchaLogo} alt="" /> Olcha Market</h1>
                                </div>
                                <div className="televizor">
                                    <h1>Televizorlar</h1>
                                    <p>Shivaki</p>
                                    <p>Artel</p>
                                    <p>Samsung</p>
                                    <p>Premier</p>
                                    <p>Vesta</p>
                                </div>
                                <div className="videoTexnika">
                                    <h1>Video texnika</h1>
                                    <p>Uy kinoteatri</p>
                                    <p>DVD-Pleer</p>
                                    <p>Xavfsizlik kameralari</p>
                                    <p>Aksesuarlar</p>
                                    <p>Video uskunalar uchun</p>
                                </div>
                                <div className="oyinKonsollari">
                                    <h1>Oyin Konsollari</h1>
                                    <p>Playstation</p>
                                    <p>Geympodlar</p>
                                    <p>Virtual kozoynaklar</p>
                                    <p>Playstation uchun oyinlar</p>
                                    <p>Playsation 5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="inputBtn">
                        <Link to={"/search"}><input id="navbarInput" type="text" placeholder="Katalog boyicha qidirish"/></Link>
                    </div>
                    <div className="TSSK">
                        <div className="taqqoslash">
                            <img src="" alt="" />
                            <h1>〽</h1>
                            <h2>Taqqoslash</h2>
                        </div>
                        <div className="sevimlilar">
                            <img src="" alt="" />
                            <h1>❤</h1>
                            <h2>Sevimlilar</h2>
                        </div>
                        <div className="savatcha">
                            <img src="" alt="" />
                            <h1>🔰</h1>
                            <h2>Savatcha</h2>
                        </div>
                        <div className="kirish">
            <button className="kirish-btn" onClick={() => setOpen(true)}>
                <span>🌐</span>
                <h2>Kirish</h2>
            </button>

            {open && (
                <div className="btnWrapper" onClick={() => setOpen(false)}>
                    <div className="modal show-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="wrapperH1Btn">
                            <h1>Kirish yoki yaratish</h1>
                            <button className="close-btn" onClick={() => setOpen(false)}>X</button>
                        </div>
                        <div className="inputWrapper">
                            <label htmlFor="phone">Telefon raqam</label>
                            <input type="number" id="phone" placeholder="+998 90 123 45 67" />
                        </div>
                        <button className="submit-btn">Kirish</button>
                    </div>
                </div>
            )}
        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default Navbar;