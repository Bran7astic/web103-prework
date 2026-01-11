// Form to add a single content creator

import { useEffect, useState } from "react"
import { supabase } from "../client";

export default function AddCreator() {

    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [desc, setDesc] = useState("");

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
    }

    return(
        <>
            <form>
                <fieldset>
                    <label>
                        Name
                        <input
                            name="Name"
                            placeholder="Name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label>
                        Link
                        <input
                            name="Link"
                            placeholder="Link"
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </label>
                    <label>
                        Description
                        <textarea
                            name="Description"
                            placeholder="Describe this creator!"
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