// Detail view of a single content creator

import { useParams } from "react-router"
import { supabase } from "../client"
import { useEffect, useState } from "react"
import { Link } from "lucide-react"

export default function ViewCreator() {

    const [name, setName] = useState("")
    const [url, setUrl] = useState("")
    const [desc, setDesc] = useState("")
    const {uuid} = useParams()

    useEffect(() =>{

            const getCreatorById = async () => {
            const {data, error} = await supabase
                .from('creators')
                .select()
                .eq('uuid', uuid)

            error && console.error(error) 

            setName(data[0].name)
            setDesc(data[0].description)
            setUrl(data[0].url)
            console.log(data)
        }

        if (uuid!=null) {
            getCreatorById()
        }
    }, [uuid])
    
    return(
        <>

            <div>
                <a 
                    href={url} 
                    style={{display: "flex",
                        alignItems: "center", 
                        justifyContent: "center", 
                        gap: "1em",
                        color: "black"
                    }}
                >
                    <Link/>
                    <h2 style={{margin: '0'}}>{name}</h2>
                </a>
            </div>
            
            <hr/>
            <p>{desc}</p>
        </>
    )
}