import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";

const AboutMePage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                ¡Bienvenido a mi mundo digital!
                </h1>
                
                <div className="text-center md:text-left md:text-xl mt-6">
                    <p>
                        Soy un apasionado de los videojuegos y la tecnología.
                    </p>
                    <p>
                        Me encuentro en constante crecimiento, dedicando horas a lo que me apasiona (jugar videojuegos).
                    </p>
                    <p>
                        Disfruto explorando nuevas tendencias tecnológicas y sumergiéndome en emocionantes aventuras en el mundo de los videojuegos.
                    </p>
                </div>
                
                <div className="text-center md:text-left md:text-xl mt-6">
                    <p>
                        Con mi compromiso con el aprendizaje continuo y mi enfoque en el desarrollo profesional, estoy ansioso por crear mis propios proyectos.
                    </p>
                </div>
                
                <p className="text-center md:text-left md:text-xl mt-6">
                    ¡Gracias por visitar mi página! No dudes en ponerte en contacto conmigo si quieres charlar sobre juegos, anime ,tecnología o cualquier otra cosa.
                </p>
            </ContainerPage>
        </>
    );
}

export default AboutMePage;
