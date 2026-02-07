import { counterStore } from "./store/store";

const Num = () => {
    const count = counterStore(s => s.count);
    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
}

export default Num;
