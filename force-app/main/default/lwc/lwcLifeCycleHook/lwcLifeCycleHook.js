import { LightningElement } from 'lwc';

export default class LwcLifeCycleHook extends LightningElement {

    constructor() {
        super();
        console.log('constructor in Parent');
    }
}