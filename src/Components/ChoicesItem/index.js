import './index.css'

const ChoicesItem = props => {
  const {data, onClickChoice} = props
  const {id, imageUrl} = data
  const funn = () => {
    onClickChoice(id)
  }
  const id1 = id.toLowerCase()
  const dataTestId = `${id1}Button`

  return (
    <button
      data-testid={dataTestId}
      onClick={funn}
      type="button"
      className="choice-btn"
    >
      <img className="chioce-img" alt={id} src={imageUrl} />
    </button>
  )
}
export default ChoicesItem
