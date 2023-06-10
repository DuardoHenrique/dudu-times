export const CardAsideRight = ({ wire }) => {
  // console.log('Wire', wire.multimedia[2].url);

  return (
    <div style={{ minHeight: 'min-content', width: '250px', margin: '20px', backgroundColor: 'lightblue', fontSize: '1rem' }}>
      <h1>Aside Right</h1>
      <p>Abstract: {wire.abstract}</p>
      <p>Assinatura: {wire.byline}</p>

    {!wire.multimedia && <p>Imgaem não encontrada</p>}
    {wire.multimedia && <img src={wire.multimedia[1].url} alt="" />}
      {/* <img src={wire.multimedia[1].url} alt="" /> */}
    </div>
  )
}