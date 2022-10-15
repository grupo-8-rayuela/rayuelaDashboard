
import SmallCard from './SmallCard';



function ContentRowDataCards(props){
   

    return (
    
        <div className="row">
            
            {props.dataCardProps.map( (element, i) => {

                return <SmallCard {...element} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowDataCards;