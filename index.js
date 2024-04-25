const element = (
  // Write your code here.
  <div className='bg-container'>
    <h1 className='heading'>Congratulation</h1>
    <div className='card-container'>
      <img
        className='image'
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
      />
      <h1 className='name'>Kiran V</h1>
      <p className='college'>
        Vishnu Institute of Comuter Education and Technology. Bhimavaram
      </p>
      <img
        className='image'
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
