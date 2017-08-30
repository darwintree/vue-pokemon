export function hello () {
  console.log('hello')
  return 0
}

export function getStat ({base, iv, ev, level, factor = 1, isHp = false}) {
  let temp = base * 2 + iv + Math.floor(ev / 4)
  temp = Math.floor(temp * level / 100)
  if (isHp) {
    return temp + 10 + level
  } else {
    return Math.floor((temp + 5) * factor)
  }
}
