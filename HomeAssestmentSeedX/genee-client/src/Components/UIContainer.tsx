import { useEffect, useState } from 'react'
import ClassificationTable from './CalssificationTable';
import ClassificationTypesList from './ClassificationTypesList';

const style = {
    UIContainer: {
        height: '100Vh',
        width: '100vw',
        display: 'flex',
        'flex-wrap': 'wrap',
        'background-color': 'grey'
    }
}

const UIContainer = () => {
    const [classifications, setClassifications] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080').then(response=> {
            return response.json()
        }).then(data => {
            setClassifications(data);
        }).catch(err => {
            console.error(err)
        })
        
    })
    return (
        <div style={style.UIContainer}>
            <ClassificationTable data={classifications}/>
        <ClassificationTypesList/>
        </div>
        
    );
}

export default UIContainer;