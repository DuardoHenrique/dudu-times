export const CardMain = ({popular}) => {
  
  return (

    <div style={{ minHeight: 'min-content', width: '250px', margin: '20px', backgroundColor: 'lightblue' , fontSize: '1rem'}}>
      <h1>Main</h1>
    <p>Titulo: {popular.title}</p>
    <p>Abstract:{popular.abstract}</p>
    <p>Assinatura: {popular.byline}</p>
    <p>Caption(acho q é resumo): {popular.media[0].caption}</p>
    <p>Data: {popular.published_date}</p>
    <p>Font :{popular.source}</p>
    
    <img src={popular.media[0]['media-metadata'][1].url} alt="" />
    
    
  
  </div>
  )
}

// popular.url