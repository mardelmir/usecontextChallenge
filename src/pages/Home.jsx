function Home() {
    return (
        <>
            <h1>¡Bienvenidos!</h1>
            <p>Esta es la página principal del proyecto.</p>
            <div className='features'>
                <p> Algunas de las funcionalidades/características incluidas son:</p>
                <ul className='list'>
                    <li><span>Dark Mode:</span> en la esquina superior derecha, se desplaza hacia abajo al hacer scroll.</li>
                    <li><span>Waves:</span> cabecera con efecto de olas (también para modo oscuro).</li>
                    <li><span>Responsive:</span> para anchos menores de 660px.</li>
                    <li><span>Rutas:</span> con el método que aprendimos en clase la semana pasada.</li>
                </ul>
            </div>
        </>
    )
}

export default Home