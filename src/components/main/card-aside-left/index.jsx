export const CardAsideLeft = ({ article }) => {
  // console.log('Mutimedia',article.multimedia[0].url);

  return (
    <div style={{ minHeight: 'min-content', width: '250px', margin: '20px', backgroundColor: 'lightblue' , fontSize: '1rem'}}>
      <h1>Aside Left</h1>
      <p>Abstract:{article.abstract}</p>
      <p>Assinatura: {article.byline.original}</p>
      <p>Titulo: {article.headline.main}</p>
      <p>Paragrafo Inicial:{article.lead_paragraph}</p>
      <p>Data :{article.pub_date}</p>
      <p>Trecho :{article.snippet}</p>
      <p>Font :{article.source}</p>
      
      <img src="http://graphics8.nytimes.com/images/2011/11/23/us/23abortion_span/23abortion_span-thumbStandard.jpg" alt="" />
      <img src="images/2023/06/04/multimedia/04Rohter-Review-rondon-fklp/04Rohter-Review-rondon-fklp-articleLarge.jpg" alt="" />
      
    </div>
  )
}