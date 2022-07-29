import './Shop.css'

function Shop() {
    return (
        <section className="shop">
            <div className="shop-header">
                <form className="shop-form">
                    <input className="search-bar" type="text"/>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                    
                </form>   
                
            </div>
            <div className="shop-content">
                <aside className="shop-nav">
                    <ul className="shop-nav-filters">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </aside>
                <ul className="item-list">
                    <li className="item-card">
                        <img src="243V7QDSB_01-IMS-bg_BG.png" alt="img" />
                        <div className="item-text">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
                            <span>$243</span>
                        </div>
                    </li>
                    <li className="item-card">
                        <img src="243V7QDSB_01-IMS-bg_BG.png" alt="img" />
                        <div className="item-text">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
                            <span>$243</span>
                        </div>
                    </li>
                    <li className="item-card">
                        <img src="243V7QDSB_01-IMS-bg_BG.png" alt="img" />
                        <div className="item-text">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
                            <span>$243</span>
                        </div>
                    </li>
                    <li className="item-card">
                        <img src="243V7QDSB_01-IMS-bg_BG.png" alt="img" />
                        <div className="item-text">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
                            <span>$243</span>
                        </div>
                    </li>
                    <li className="item-card">
                        <img src="243V7QDSB_01-IMS-bg_BG.png" alt="img" />
                        <div className="item-text">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
                            <span>$243</span>
                        </div>
                    </li>
                    <li className="item-card">
                        <img src="243V7QDSB_01-IMS-bg_BG.png" alt="img" />
                        <div className="item-text">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
                            <span>$243</span>
                        </div>
                    </li>
                    <li className="item-card">
                        <img src="243V7QDSB_01-IMS-bg_BG.png" alt="img" />
                        <div className="item-text">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
                            <span>$243</span>
                        </div>
                    </li>
                    <li className="item-card">
                        <img src="243V7QDSB_01-IMS-bg_BG.png" alt="img" />
                        <div className="item-text">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
                            <span>$243</span>
                        </div>
                    </li>
                    <li className="item-card">
                        <img src="243V7QDSB_01-IMS-bg_BG.png" alt="img" />
                        <div className="item-text">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
                            <span>$243</span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Shop;