import { LightningElement, wire } from 'lwc';

import mapAccount from '@salesforce/apex/MapHelper.mapAccount';
export default class MapIterate extends LightningElement {

    mapRecords = [];

    @wire(mapAccount)
    wiredAccount({ error, data }) {
        if (data) {

            this.mapRecords = Object.entries(data).map(([key, value]) => {
                return {
                    key,
                    value: {
                        ...value,
                        Industry: value.Industry && value.Industry.trim() !== '' ? value.Industry : 'Dummy Industry'
                    }
                };
            });
            console.log('map records:', this.mapRecords);


            // console.log('data is', data);

            // for (let key in data) {
            //     console.log('key is', key);
            //     console.log('value is', data[key]);
            //     let tempObj = { key: key, value: data[key] }
            //     if (this.mapRecords) {
            //         this.mapRecords = [...this.mapRecords, tempObj];
            //     } else {
            //         this.mapRecords = [tempObj];
            //     }
            // }
        }
    }

}