const HighOrderComp = (Func) => {
    return () => {
        return (
            <div style={{ backgroundColor: "green"}}>
                <Func />
            </div>)
    };
};

export default HighOrderComp;