"use client"
import { useState, FormEvent, ChangeEvent } from 'react';
import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";
import axios from 'axios'; // Importa axios para hacer la solicitud HTTP

// Define la interfaz para los datos del formulario
interface FormData {
    name: string;
    email: string;
    phone: string; // Agrega el campo phone
    message: string;
}

const AboutMePage = () => {
    // Define el estado inicial para los campos del formulario
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    // Maneja los cambios en los campos del formulario
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Maneja la función de envío del formulario
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // Realiza la solicitud POST a la URL especificada con los datos del formulario
            await axios.post('http://localhost:3001/contacts', formData);
            // Limpia el formulario después de enviar
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });
            console.log("Formulario enviado con éxito");
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
        }
    };

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
                    ¡Gracias por visitar mi página! No dudes en ponerte en contacto conmigo si quieres charlar sobre juegos, anime, tecnología o cualquier otra cosa.
                </p>

                {/* Agrega el formulario */}
                <form onSubmit={handleSubmit} className="mt-6">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-lg mb-2">Nombre:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="border border-gray-300 p-2 rounded-lg mb-4" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-lg mb-2">Correo Electrónico:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="border border-gray-300 p-2 rounded-lg mb-4" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phone" className="text-lg mb-2">Teléfono:</label> {/* Agrega el campo phone */}
                        <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="border border-gray-300 p-2 rounded-lg mb-4" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-lg mb-2">Mensaje:</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} className="border border-gray-300 p-2 rounded-lg mb-4" required />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar</button>
                </form>
            </ContainerPage>
        </>
    );
}

export default AboutMePage;