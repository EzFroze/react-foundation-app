import {FC, useState} from "react";
import styles from './Counter.module.scss'

export const Counter: FC = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)} className={styles.btn}>increment</button>
        </div>
    )
}
