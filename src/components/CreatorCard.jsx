// Card view of content creator. Meant to be displayed on home feed
import { Pen } from 'lucide-react'


export default function CreatorCard({name, description, uuid}) {
    return(
        <article>
            <fieldset role="group">
                <p>img here</p>
                <div className="container">
                    <h4>{name}</h4>
                    {description}
                </div>
                <Pen/>
            </fieldset> 
        </article>
    )
}