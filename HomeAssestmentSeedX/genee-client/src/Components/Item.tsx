import { classificationList } from '../mockDataTypes';  

const style = {
    classItem: {
        borderRadius: '10px',
        marginRight: '15px', 
        marginBottom: '10px', 
        height: '80px', 
        width: '80px',
    },
}

const findBackgroundColor = (itemType: number) => {
    const classification = classificationList.find(classification =>  {
        return (classification.type === itemType)
    })
    return classification ? classification.color : 'orange'
}

const Item = (props: any) => {
    console.log(classificationList[0].type);
    const {type} = props;
    return (
        <div style={{...style.classItem, backgroundColor:  `${findBackgroundColor(type)}`}}> </div>
    );
}

export default Item;