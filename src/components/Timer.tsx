import { useState, useEffect, useRef } from 'react'

type TimerArgs = {
    milisegundos: number,
    segundos?: number
}

export const Timer = ({milisegundos}: TimerArgs) => {

    const [segundos, setSegundos] = useState(0);
    const ref = useRef<NodeJS.Timeout>();

    useEffect(() => {
        ref.current && clearInterval(ref.current);
        ref.current = setInterval(()=> setSegundos(s => s + 1), milisegundos);
    }, [milisegundos])
    

  return (
    <>
        <span>Timer: <small>{segundos}</small></span>   
    </>
  )
}
