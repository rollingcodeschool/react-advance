const Square = ({ count }) => (
  <div
    style={{
      height: '50%',
      fontSize: 200,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'lightgray',
      borderRadius: 20,
      textAlign: 'center'
    }}
  >
    {count}
  </div>
);

export default Square;