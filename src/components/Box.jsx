import "./Box.css";

export default function Box({isActive, toggle}) {
    return (
        <div className="Box" onClick={toggle} style={isActive? {backgroundColor: "red" }: {backgroundColor:"black"}}>
        </div>
    )
}