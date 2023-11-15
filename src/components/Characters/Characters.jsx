import { Fragment, useEffect, useState} from 'react'
import axios from 'axios';
import Load from '../Load/Load.jsx';
import "./characters.css"
import CharacterCard from '../CharacterCard/CharacterCard.jsx';


const Characters = () => {
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState("")

    const url = "https://gateway.marvel.com:443/v1/public/characters?&ts=1&apikey=fc8a8881503947fb513c78a36047608e&hash=a264eef8521940b678803208b0f99452"


    useEffect(() => {
        setLoading(true)
        
        const fetch= async()=>{
            const response = await axios.get(url)
            setItem(response.data.data.results)
        }
        fetch()
        
        .finally(() => setLoading(false))
    }, [url])



    if (loading){
        return <Load />
    }

    return (
        <Fragment>
            <h1 className="titleHome"><strong>Characters</strong></h1>

            <div>
            {
                (!item) ? <h1>Not found</h1> : <CharacterCard data={item} />
            }
            </div>
        </Fragment>
    )
}


export default Characters