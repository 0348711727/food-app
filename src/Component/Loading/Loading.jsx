import './loading.css';

const Loading = () => {
  return (
    <>
      <div className="loadingspinner">
        <h3 className='loading_title'>Loading...</h3>
        <div id="square1"></div>
        <div id="square2"></div>
        <div id="square3"></div>
        <div id="square4"></div>
        <div id="square5"></div>
      </div>
    </>
  )
}

export default Loading;