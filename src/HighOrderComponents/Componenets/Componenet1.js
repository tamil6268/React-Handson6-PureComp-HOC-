import HighOrderComp from "../HighOrderComp";

const Componenet1 = () => {
    return (
        <div style={{color:"white"}}>
            Component 1 
        </div>
    )
}

export default HighOrderComp(Componenet1);
// {/*here this to componenet1 is func and hoc is HigherOrderComp*/}