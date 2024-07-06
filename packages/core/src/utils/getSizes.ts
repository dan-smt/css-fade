import { Side, Sizes } from "./types"

export default function getSizes(directions: string, size: string): Sizes {

  let result: Sizes = {}

  // all sides
  if(
    directions === 'a' 
    || !directions
  ) {
      
    // catch all
    result = {
      r: size,
      l: size,
      t: size,
      b: size
    }

    return result

  }

  // specific sides, and combinations
  directions.split('').forEach((directionsCharacter) => {

    if(directionsCharacter === 'x') result.r = result.l = size
    else if(directionsCharacter === 'y') result.t = result.b = size
    else if(['r', 'l', 't', 'b'].includes(directionsCharacter)) result[directionsCharacter as Side] = size

  })

  return result
  
}