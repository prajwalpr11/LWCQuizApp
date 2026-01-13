import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {

    handleOkay() {
        const closeEvent = new CustomEvent('close');
        this.dispatchEvent(closeEvent);
    }

}