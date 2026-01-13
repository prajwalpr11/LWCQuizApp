import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    showModal = false;

    handleShowModal() {
        this.showModal = true;
    }

    handleOkay() {
        this.showModal = false;
    }
}