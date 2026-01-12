// Card view of content creator. Meant to be displayed on home feed
import { Pen } from 'lucide-react'
import { useNavigate } from 'react-router'


export default function CreatorCard({name, description, uuid}) {
    
    const navigate = useNavigate();

    const handleNavigate = () => {
        console.log("Navigating..")
        navigate(`/edit/${uuid}`)
    }

    return(
        <article>
            <fieldset role="group">
                <p>img here</p>
                <div className="container">
                    <h4>{name}</h4>
                    {description}
                </div>

                <div onClick={handleNavigate} style={{cursor: "pointer"}}>
                    <Pen/>
                </div>
            </fieldset> 
        </article>
    )
}