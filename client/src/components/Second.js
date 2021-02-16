import React from 'react'
import Scrollbars from 'react-custom-scrollbars'
import { Link } from 'react-router-dom'

class Second extends React.Component {
  constructor() {
    super()
    this.state = [
      { genre: 'Country' },
      { genre: 'R&B' },
      { genre: 'EDM' },
      { genre: 'Pop' },
      { genre: 'Orchestral' },
      { genre: 'Rap' },
      { genre: 'Hip hop' },
      { genre: 'Metal' },
      { genre: 'Latin American' },
      { genre: 'Jazz' },
      { genre: 'Classic rock' }
    ]
  }
  render() {
    const list = this.state.map(item => {
      return <p className='genre'> {item.genre} </p>
    })
    return (
        <div className='AppBackground'>
          
          <h1 className='center'> What genre of music do you like? </h1>

          <Scrollbars style={{ width: 300, height: 170, margin: 10 }}>
            {list}
          </Scrollbars>

          <Link to='/First'><button type='submit' className='next'> Back </button></Link>
          <Link to='/Third'><button type='submit' className='next'> next </button></Link>
        </div>
      )
    }    
  }
  

export default Second
