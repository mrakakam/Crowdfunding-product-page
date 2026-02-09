import hamburgerimg from "../assets/images/icon-hamburger.svg"
import closeimg from "../assets/images/icon-close-menu.svg"

export const Navbar = () =>{

    return(

        <>
        
            <nav className="bg-center h-98 bg-cover  flex flex-row items-center justify-between p-25" style={{backgroundImage:"url('/image-hero-desktop.jpg')"}}>


                <h3 className="font-extrabold text-white ">Crowdfund</h3>

                <ul className="flex flex-row gap-12">

                    <li className="text-white font-serif">About</li>

                    <li className="text-white font-serif">Discovery</li>

                    <li className="text-white font-serif">Get Started</li>

                </ul>
            </nav>
        
        </>
    )
}