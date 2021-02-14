import Item from './Item';

const style = {
    classificationTable: {
        marginTop: '10px',  
        height: '100%',
        width: '60%',
        display: 'flex',
        'flex-wrap': 'wrap'
    }
}

const ClassificationTable = (props:any) => {
    const { data } = props;
    return (
        <div style={style.classificationTable}>
            {data.map(item => {
            return (<Item type={item.type}/>)
            })}
        </div>
    
    );
}

export default ClassificationTable;