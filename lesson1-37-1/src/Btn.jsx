

const Btn = ({num, setNum}) => {
    return (
        <div>
            <button onClick={() => {
                if (num < 15) setNum(num + 5);
            }}>+5</button>

            <button onClick={() => {
                if (num > 0) setNum(num - 5);
            }}>-5</button>

            <button onClick={() => {
                setNum(0)
            }}>reset</button>
        </div>
    );
}

export default Btn;
