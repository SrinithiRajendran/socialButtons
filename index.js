const Button = props => {
  const {className, buttonText} = props
  return <button className={`${className}`}>{buttonText}</button>
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1>Social Buttons</h1>
    <div className='button-container'>
      <Button className='like-button' buttonText='Like' />
      <Button className='comment-button' buttonText='Comment' />
      <Button className='share-button' buttonText='Share' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
