import jobs from "../data/jobs"
import { useTheme } from "../themes/ThemeContext"

function MyJob() {
    const { theme } = useTheme()
    return (
        <>
            <h1>Mis trabajos</h1>
            <div className='jobs-container'>
                {jobs.map(job => {
                    const { id, name, image, description, url } = job
                    return (
                        <div className="job" key={id + name}>
                            <div>
                                <img src={image} alt={name} />
                            </div>
                            <ul>
                                <li><span>Nombre</span>: {name}</li>
                                <li><span>Descripción</span>: {description}</li>
                                <li className={`${theme}A`}><span>Link</span>: <a href={url} target='_blank'>{url}</a></li>
                            </ul>
                        </div>)
                })}
            </div>

        </>
    )
}

export default MyJob