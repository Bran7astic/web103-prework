// Card view of content creator. Meant to be displayed on home feed
import { Pen } from 'lucide-react'
import { useNavigate } from 'react-router'


export default function CreatorCard({name, description, uuid, image}) {
    
    const navigate = useNavigate();

    const handleNavigate = () => {
        console.log("Navigating..")
        navigate(`/edit/${uuid}`)
    }

    return(
        <article 
            style={{
                width: "30%",
                minHeight: "15em",
            }}
        >
            <fieldset role="group">
                <div 
                    
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >

                    <h4 
                        onClick={()=>{navigate(`/view/${uuid}`)}}
                        style={{cursor: "pointer"}}
                    >
                        {name}
                    </h4>

                    
                    {image && (
                        <img 
                            src={image}
                            style={{
                                width: "8em",
                                height: "8em",
                                objectFit: "cover",
                                borderRadius: "20px",
                                margin: "5%"
                            }}
                        />
                    )}

                    {description}
                </div>

                <div onClick={handleNavigate} style={{cursor: "pointer", position: "absolute"}}>
                    <Pen/>
                </div>
            </fieldset> 
        </article>
    )
}