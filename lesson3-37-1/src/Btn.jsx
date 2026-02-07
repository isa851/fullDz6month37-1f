import { counterStore } from "./store/store";

const Btn = () => {
    const incrementCount = counterStore(s => s.incrementCount);
    const decrementCount = counterStore(s => s.decrementCount);
    const resetCount = counterStore(s => s.resetCount);
    const addFive = counterStore(s => s.addFive);
    const subtractFive = counterStore(s => s.subtractFive);
    return (
        <div>
            
            <button onClick={incrementCount}>+1</button>
            <button onClick={decrementCount}>-1</button>
            <button onClick={addFive}>+5</button>
            <button onClick={subtractFive}>-5</button>
            <button onClick={resetCount}>reset</button>

        </div>
    );
}

export default Btn;
