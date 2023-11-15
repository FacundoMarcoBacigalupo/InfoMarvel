import { Fragment, useEffect, useState} from 'react'
import axios from "axios"
import ModelCard from '../ModelCard/ModelCard.jsx';
import Load from '../Load/Load.jsx';
import "./comics.css"


const Comics = () => {
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState("")

    const url = "https://gateway.marvel.com:443/v1/public/comics?&ts=1&apikey=fc8a8881503947fb513c78a36047608e&hash=a264eef8521940b678803208b0f99452"


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
            <h1 className="titleHome"><strong>Comics</strong></h1>
            
            <div>
            {
                (!item) ? <h1>Not found</h1> : <ModelCard data={item} />
            }
            </div>
        </Fragment>
    )
}


export default Comics