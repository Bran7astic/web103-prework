export default function CreatorCard({name, description}) {
    return(
        <article>
            <fieldset role="group">
                <p>img here</p>
                <div className="container">
                    <h4>{name}</h4>
                    {description}
                </div>
            </fieldset> 
        </article>
    )
}