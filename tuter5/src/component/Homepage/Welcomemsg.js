  import { React,useContext} from 'react'
  import { Database } from '../../context'

export default function Welcommsg({messege,color}){
    const [stateob,stringData] = useContext(Database);
    return(
        <>
        <h1 className={`bg-${color}`}>{messege}</h1>
        {console.log(stateob,stringData)}
        {stringData}
        
        
        </>
    )
}