const buttonStyle = {
  textDecoration: 'none',
  backgroundColor: 'aliceblue'
};

const Actions = ({
  handleIncrementCount,
  handleDecrementCount,
  handleClearCount
}) => (
    <div
      style={{
        width: '75%',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'lightgray',
        borderRadius: 20,
      }}
    >
      <button
        style={buttonStyle}
        type='button'
        onClick={handleIncrementCount}
      >
        +
      </button>
      <button
        style={buttonStyle}
        type='button'
        onClick={handleDecrementCount}
      >
        -
      </button>
      <button
        style={buttonStyle}
        type='button'
        onClick={handleClearCount}
      >
        CLEAR
      </button>
    </div>
  );

export default Actions;