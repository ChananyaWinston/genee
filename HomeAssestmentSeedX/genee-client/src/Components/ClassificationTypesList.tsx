import ClassificationTypeRow  from "./ClassificationTypeRow";
import { classificationList } from '../mockDataTypes';

const style = {
    classificationTypesList: {
        marginLeft: '20px',
        backgroundColor: '#D6D0C1', 
        height: '110px', 
        width: 250, 
        marginTop: '10px'
    }
}

const classificationTypesList = (props: any) => {
    const {type} = props;
    return (
        <div style={style.classificationTypesList}>
            {
                classificationList.map(classification => {
                    return ( 
                        <ClassificationTypeRow
                        classification={classification}/>
                    )
                })
            }
        </div>
    );
}

export default classificationTypesList ;