export default function Header() {
    return (
        <header>
            <div className="container header__container">
                <a href="/" className="header__logo">
                    Your logo
                </a>
                <nav className="header__nav">
                    <ul>
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="">Genre</a></li>
                        <li><a href="">Tag</a></li>
                        <li><a href="">Movie</a></li>
                        <li><a href="">TV Series</a></li>
                    </ul>
                </nav>
                <div className="header__search">
                    <input type="text" placeholder="Search" />
                </div>
            </div>
        </header>
    );
}