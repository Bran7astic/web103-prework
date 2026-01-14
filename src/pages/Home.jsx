import { use, useEffect, useState } from "react";
import CreatorCard from "../components/CreatorCard";
import { supabase } from "../client";

export default function Home() {

    const [creators, setCreators] = useState([]);

    const handleFetchCreators = () => {
        const getCreators = async () => {
            const {data, error} = await supabase
                .from('creators')
                .select()
                .order('created_at', {ascending: false})
            error ? console.error(error) : setCreators(data)
        }
        getCreators()
    }

    useEffect(() => {
        handleFetchCreators()
    }, [])

    useEffect(() => {
        console.log(creators)
    }, [creators])

    return(
        <>
            <h1>SubHub</h1>
            <p>SubHub is a platform meant to promote a wide variety of content creators!</p>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "5%",
                }}
            >
                {
                    !creators ? (
                        <article aria-busy="true"></article>
                    ) : (
                        creators.map((creator) => (
                            <CreatorCard
                            key={creator.uuid}
                            name={creator.name}
                            description={creator.description}
                            uuid={creator.uuid}
                            image={creator.imageURL}
                            />
                        ))
                    )
                }
            </div>
        </>
    )
}