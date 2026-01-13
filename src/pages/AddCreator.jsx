// Form to add a single content creator

import { useEffect, useState } from "react"
import { supabase } from "../client";
import { useNavigate, useParams } from "react-router";

export default function AddCreator({edit=false}) {

    const [name, setName] = useState("Name");
    const [url, setUrl] = useState("Link");
    const [desc, setDesc] = useState("Describe this creator!");

    const navigate = useNavigate();
    const {uuid} = useParams()

    const handleUpload = () => {
        const postCreator = async () => {
            const {data, error} = await supabase
                .from('creators')
                .insert({
                    name: name,
                    description: desc,
                    url: url
                })

            error ? console.error(error) : console.log(data)
        
        }
        postCreator()
        navigate('/'); // Return home after posting
    }

    const getCreatorById = () => {
        const getCreator = async () => {
            const {data, error} = await supabase
                .from('creators')
                .select()
                .eq('uuid', uuid)

            error ? console.error(error) : 
                setName(data[0].name)
                setDesc(data[0].description)
                setUrl(data[0].url)
                console.log(data)
        }

        getCreator()
    }

    useEffect(() => {
        if (uuid != null) {
            getCreatorById()
        }
    }, [uuid])

    return(
        <>

            {edit ? (<p>Edit True</p>) 
                  : (<p>Edit false</p>)
            }

            <form>
                <fieldset>
                    <label>
                        Name
                        <input
                            name="Name"
                            placeholder={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label>
                        Link
                        <input
                            name="Link"
                            placeholder={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </label>
                    <label>
                        Description
                        <textarea
                            name="Description"
                            placeholder={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                    </label>
                </fieldset>

                <input
                    type="submit"
                    value="Post"
                    onClick={handleUpload}
                />
            </form>
        </>
    )
}