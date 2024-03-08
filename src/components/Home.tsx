import { Link } from "react-router-dom"
import juno from "../photos/juno.png"


function Home() {
    return (
        <section className="hero is-primary height-with-navbar is-danger">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h2 className="title is-1 has-text-centered has-text-white">
                        Welcome to Future FurBaby!
                    </h2>
                    <div>
                        <img className="juno" src={juno} alt="Grey Cat" /> </div>

                    <h3 className="is halfheight"> Are you looking for your next future furbaby? If so, you've come to the right place! Our site is dedicated
                        to making sure all of our furry friends go to loving homes. Are you curious which type of cat personality fits you best?
                        Click on "Cat Breeds" to find out more about which feline suits you!  </h3>



                </div>
            </div>
        </section>
    )
}
export default Home

// JSX to create the homepage along with Bulma CSS. 