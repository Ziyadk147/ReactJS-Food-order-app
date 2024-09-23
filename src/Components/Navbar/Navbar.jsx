import NavBarImg from "../../assets/logo.jpg"

export function Navbar(){

    return (
        <nav id="main-header">
            <div id="title">
                <img src={NavBarImg} />
                <h1>ReactFood</h1>
            </div>
            <p className="text-button">Cart (0)</p>

        </nav>
    )


}