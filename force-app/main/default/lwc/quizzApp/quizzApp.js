import { LightningElement } from 'lwc';

export default class QuizzApp extends LightningElement {
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
            Id: "Question 3",
            question: "What is the capital of India?",
            answer: {
                A: "Delhi",
                B: "Blore",
                C: "chennai",
                D: "Nice"
            },
            correctAnswer: "A"

        },
    ]
}