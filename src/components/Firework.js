import { Fireworks } from 'fireworks/lib/react'

function Firework(props) {
  let fxProps = {
    count: 3,
    interval: 200,
    colors: ['#12E177', '#FFC72A', '#FFC72A'],
    calc: (props, i) => ({
      ...props,
      x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
      y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
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