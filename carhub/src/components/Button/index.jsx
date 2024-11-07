




function Button({cor, texto, handle}) {
  return (
    <button className={`btn btn-${cor} w-full`}>{texto}</button>
  )
}

export default Button;