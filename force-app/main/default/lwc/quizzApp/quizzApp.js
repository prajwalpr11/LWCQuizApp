import { LightningElement } from 'lwc';

export default class QuizzApp extends LightningElement {
    selected = {}
    myQuestion = [
        {
            Id: "Question 1",
            question: "What is the capital of France?",
            answer: {
                A: "Paris",
                B: "Lyon",
                C: "Marseille",
                D: "Nice"
            },
            correctAnswer: "A"

        },
        {
            Id: "Question 2",
            question: "What is the capital of USA?",
            answer: {
                A: "DC",
                B: "Lyon",
                C: "MA",
                D: "NY"
            },
            correctAnswer: "b"

        },
        {
            Id: "Question 3",
            question: "What is the capital of India?",
            answer: {
                A: "Delhi",
                B: "Blore",
                C: "chennai",
                D: "Nice"
            },
            correctAnswer: "D"

        },
    ]

    handleChange(event) {
        console.log(event.target.value);
        console.log(event.target.name);

        const { name, value } = event.target;
        this.selected = { ...this.selected, [name]: value };

    }
}