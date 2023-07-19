import React, {useState, useEffect} from 'react';

export default function ScrollHooks () {
    const [scrollY, setScrollY] = useState(0);
    const [name, setName] = useState("Sebastian");
    useEffect(()=> {
        console.log("Moviendo el Scroll");

        const detectectarScroll = () => setScrollY(window.pageYOffset);

        window.addEventListener("scroll",detectectarScroll);
        return()=> window.removeEventListener("scroll", detectectarScroll);
    },[scrollY]);

    useEffect(()=> {
        console.log("Fase de Montaje")
    },[]);

    useEffect(()=> {
        console.log("Fase de Actualizacíon");
    })

    useEffect(()=> {
        return() => {
            console.log("Fase de Desmontaje");
        };
    })

    return (
        <>
        <h2>Hooks - useEffect y el ciclo de vida</h2>
        <p>Scroll Y del Navegador {scrollY}px</p>
        </>
     )
}