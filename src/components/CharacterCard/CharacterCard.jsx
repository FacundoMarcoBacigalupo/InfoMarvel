import "./characterCard.css"


const CharacterCard = (prop) => {
    return (
        <>
            {
                (prop.data) ? (
                    prop.data.map(item => {
                        return(
                        <div key={item.id} className="cardContainer">
                            <div className="row">
                                <a className="nleft col-md-6 posicion" href={item.urls[0].url} target='_black'>
                                    <img className='imgHero' src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.title} />
                                </a>
                                
                                <section className="nright col-md-6">
                                    {
                                        (item.title) ? <h2 className='nameHero'>{item.title}</h2> : <h2 className='nameHero'>{item.name}</h2>
                                    }
                                    <p className='descriptionHero'>{item.description}</p>
                                </section>
                            </div>
                        </div>
                        )
                    })
                ): <h1>not found</h1>
            }
        </>
    )
}


export default CharacterCard