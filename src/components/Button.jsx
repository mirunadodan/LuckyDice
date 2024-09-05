export default function Button ({clickFunc, label}) {

    return (
        <button onClick={clickFunc}>{label}</button>
    )
}