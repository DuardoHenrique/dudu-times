export const Card = ({ article }) => {
  // console.log('Mutimedia',article.multimedia[0].url);

  return (
    <div style={{ minHeight: 'min-content', width: '150px', margin: '20px', backgroundColor: 'lightblue' , fontSize: '1rem'}}>
      <p>Abstract:{article.abstract}</p>
      <p>Assinatura: {article.byline.original}</p>
      <p>Titulo: {article.headline.main}</p>
      <p>Paragrafo Inicial:{article.lead_paragraph}</p>
      <p>Data :{article.pub_date}</p>
      <p>Trecho :{article.snippet}</p>
      <p>Font :{article.source}</p>
      
    
    </div>
  )
}