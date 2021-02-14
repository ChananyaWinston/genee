
const style = {
    rowContainre: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: '5px', 
        paddingLeft: 3, 
        paddingTop: 2
    },
    classColor: {
        borderRadius: 4,
        height: '20px', 
        width: '20px',
        marginRight: '5px' 
    },
    classText: {
        height: '20px', 
        width: '20px'
    }
}

const ClassificationTypeRow = (props: any) => {
    const {classification} = props;
    return (
        <div style={style.rowContainre}>
            <div style={{...style.classColor, backgroundColor: `${classification.color}`}}>    
                </div>
                <div style={style.classText}>
                    {classification.name}
                </div>
            </div>
    );
}

export default ClassificationTypeRow;