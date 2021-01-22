import { Fireworks } from 'fireworks/lib/react'

function Firework(props) {
  let fxProps = {
    count: 5,
    interval: 1000,
    colors: ['#12E177', '#FFC72A', '#FFC72A'],
    calc: (props, i) => ({
      ...props,
      x: (i + 1) * (window.innerWidth / 3.5 ) - (i + 1) * 100,
      y: 350 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
    })
  }

  if(props.winner){
    return ( 
        <div>
          <Fireworks {...fxProps} />
          <h2>Congrats!</h2>
        </div>
      )
  }else{
      return (
          <div>

          </div>
      )
  }
  
}

export default Firework;