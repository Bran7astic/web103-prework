// Form to add a single content creator

import { useEffect, useState } from "react"
import { supabase } from "../client";
import { useNavigate, useParams } from "react-router";

export default function AddCreator({edit=false}) {

    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [image, setImage] = useState("");
    const [desc, setDesc] = useState("");

    const navigate = useNavigate();
    const {uuid} = useParams()

    const handleUpload = (event) => {
        event.preventDefault()
        const postCreator = async () => {
            const {data, error} = await supabase
                .from('creators')
                .insert({
                    name: name,
                    description: desc,
                    url: url,
                    imageURL: image
                })

            error ? console.error(error) : console.log(data)
        
        }
        postCreator()
        navigate('/'); // Return home after posting
    }

    const handleUpdate = (event) => {
        event.preventDefault()
        const updateCreator = async () => {
            const {error} = await supabase
                .from('creators')
                .update({
                    name: name,
                    description: desc,
                    url: url,
                    imageURL: image,
                })
                .eq('uuid', uuid)

                error && console.error(error)
        }

        updateCreator()
        navigate('/')
    }

    const handleDelete = (event) => {
        event.preventDefault()
        const deleteCreator = async () => {
            const {error} = await supabase
                .from('creators')
                .delete()
                .eq('uuid', uuid)

            error && console.error(error)
        }

        deleteCreator()
        navigate('/')
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
                setImage(data[0].imageURL)
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

            {edit ? (<h5>Edit Creator</h5>) 
                  : (<h5>Add Creator</h5>)
            }

            <form>
                <fieldset>
                    <label>
                        Name
                        <input
                            name="Name"
                            value={name}
                            placeholder={"Name"}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label>
                        Link
                        <input
                            name="Link"
                            value={url}
                            placeholder={"Link"}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </label>
                    <label>
                        Image Link
                        <input
                            name="Image Link"
                            value={image}
                            placeholder={"Image Link"}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </label>
                    <label>
                        Description
                        <textarea
                            name="Description"
                            value={desc}
                            placeholder={"Describe this creator!"}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                    </label>
                </fieldset>

                <input
                    type="submit"
                    value={edit ? "Update" : "Post"}
                    onClick={edit ? handleUpdate : handleUpload}
                />

                {edit && (
                    <input
                        type="submit"
                        value="Delete"
                        onClick={handleDelete}
                        backgroundColor="red"
                    />
                )}
            </form>
        </>
    )
}