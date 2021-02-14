enum classificationTypesEnum {
    KWS_KERIDOS,
    KWS_KERIDOS_YG,
    UNKNOWN,
    ERROR
}

interface classification {
    [key:string]: string | number;
    type:number;
    color:string;
}

export const classificationList:classification[] = [
    {
        type: classificationTypesEnum.KWS_KERIDOS,
        color: 'blue',
        name: 'KWS_KERIDOS'
    },
    {
        type: classificationTypesEnum.KWS_KERIDOS_YG,
        color: 'orange',
        name: 'KWS_KERIDOS_YG'
    },
    {
        type: classificationTypesEnum.UNKNOWN,
        color: 'green',
        name: 'UNKNOWN'
    },
    {
        type: classificationTypesEnum.ERROR,
        color: 'black',
        name: 'ERROR'
    }
]