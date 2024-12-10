const quizData = {
    1: [
        {
            question: "What is the correct way to declare a Java variable to store a whole number?",
            options: ["int number;", "number = 5;", "num.ber = 5;", "number == 5;"],
            correct: 0
        },
        {
            question: "Which symbol is used for single-line comments in Java?",
            options: ["/*", "//", "#", "<!--"],
            correct: 1
        },
        {
            question: "What is the correct way to create a String in Java?",
            options: ["String = 'Hello'", "String txt = 'Hello'", "String txt = \"Hello\"", "txt = \"Hello\""],
            correct: 2
        },
        {
            question: "Which data type is used to store true or false values in Java?",
            options: ["boolean", "string", "int", "true/false"],
            correct: 0
        },
        {
            question: "What is the correct way to print text to the console in Java?",
            options: ["console.log()", "print()", "System.out.println()", "echo"],
            correct: 2
        },
        {
            question: "Which operator is used to compare two values for equality in Java?",
            options: ["=", "==", "!=", "><"],
            correct: 1
        },
        {
            question: "What is the correct file extension for Java source files?",
            options: [".js", ".java", ".txt", ".class"],
            correct: 1
        },
        {
            question: "How do you start a for loop in Java?",
            options: [
                "for (i = 0; i < 5)",
                "for (i <= 5; i++)",
                "for (int i = 0; i < 5; i++)",
                "for i = 1 to 5"
            ],
            correct: 2
        },
        {
            question: "Which keyword is used to create a class in Java?",
            options: ["class", "className", "new", "create"],
            correct: 0
        },
        {
            question: "What is the correct way to create an array in Java?",
            options: [
                "array numbers = []",
                "int[] numbers = new int[5]",
                "int numbers = new array[5]",
                "new int numbers[5]"
            ],
            correct: 1
        },
        {
            question: "How do you create an object of a class named 'Student'?",
            options: [
                "Student = new();",
                "new Student();",
                "Student student = new Student();",
                "class Student();"
            ],
            correct: 2
        },
        {
            question: "Which method must every Java program have?",
            options: [
                "start()",
                "run()",
                "main()",
                "execute()"
            ],
            correct: 2
        },
        {
            question: "What is the correct way to add comments spanning multiple lines?",
            options: [
                "// This is a comment //",
                "/* This is a comment */",
                "<!-- This is a comment -->",
                "# This is a comment #"
            ],
            correct: 1
        },
        {
            question: "Which operator is used to concatenate strings in Java?",
            options: [
                "&",
                "+",
                ".",
                ","
            ],
            correct: 1
        },
        {
            question: "What is the default value of an int variable in Java?",
            options: [
                "0",
                "null",
                "1",
                "undefined"
            ],
            correct: 0
        }
    ],
    2: [
        {
            question: "What is the difference between '==' and '.equals()' when comparing Strings?",
            options: [
                "They are the same",
                "'==' compares references, .equals() compares content",
                ".equals() compares references, '==' compares content",
                "Both compare content"
            ],
            correct: 1
        },
        {
            question: "Which collection type should be used to maintain unique elements?",
            options: ["ArrayList", "LinkedList", "HashSet", "Vector"],
            correct: 2
        },
        {
            question: "What is the purpose of the 'final' keyword in Java?",
            options: [
                "To make a variable constant",
                "To end a program",
                "To finalize a class",
                "To create a final method"
            ],
            correct: 0
        },
        {
            question: "What is method overloading?",
            options: [
                "Having two methods with same name but different parameters",
                "Having two methods with same parameters",
                "Overriding a parent class method",
                "Creating multiple classes"
            ],
            correct: 0
        },
        {
            question: "Which interface is used to create a thread in Java?",
            options: ["Threadable", "Runnable", "Callable", "Threading"],
            correct: 1
        },
        {
            question: "What is the purpose of 'break' statement in Java?",
            options: [
                "To break the program",
                "To exit from a loop or switch",
                "To skip one iteration",
                "To continue execution"
            ],
            correct: 1
        },
        {
            question: "What is an ArrayList in Java?",
            options: [
                "A fixed-size array",
                "A dynamic array implementation",
                "A linked list implementation",
                "A primitive data type"
            ],
            correct: 1
        },
        {
            question: "What is the default access modifier in Java?",
            options: ["public", "private", "protected", "package-private"],
            correct: 3
        },
        {
            question: "Which keyword is used to inherit a class?",
            options: ["extends", "implements", "inherits", "super"],
            correct: 0
        },
        {
            question: "What is the purpose of 'this' keyword?",
            options: [
                "To refer to parent class",
                "To refer to current object",
                "To create new object",
                "To call method"
            ],
            correct: 1
        }
    ],
    3: [
        {
            question: "What is a lambda expression in Java?",
            options: [
                "A mathematical expression",
                "An anonymous function",
                "A type of loop",
                "A class definition"
            ],
            correct: 1
        },
        {
            question: "What is the purpose of the 'synchronized' keyword?",
            options: [
                "To make code faster",
                "To prevent thread interference",
                "To organize code",
                "To synchronize time"
            ],
            correct: 1
        },
        {
            question: "Which collection provides thread-safe operations?",
            options: ["ArrayList", "Vector", "LinkedList", "HashSet"],
            correct: 1
        },
        {
            question: "What is the purpose of Java's garbage collection?",
            options: [
                "To clean system files",
                "To automatically manage memory",
                "To remove unused variables",
                "To delete classes"
            ],
            correct: 1
        },
        {
            question: "What is the difference between abstract class and interface?",
            options: [
                "Abstract classes can have constructors, interfaces cannot",
                "Interfaces can have methods, abstract classes cannot",
                "Abstract classes can be instantiated, interfaces cannot",
                "There is no difference"
            ],
            correct: 0
        },
        {
            question: "What is the purpose of the 'volatile' keyword?",
            options: [
                "To make variable unstable",
                "To ensure variable visibility across threads",
                "To make variable constant",
                "To improve performance"
            ],
            correct: 1
        },
        {
            question: "What is a marker interface in Java?",
            options: [
                "Interface with methods",
                "Empty interface used for marking classes",
                "Interface for marking text",
                "Interface for debugging"
            ],
            correct: 1
        },
        {
            question: "What is the purpose of try-with-resources?",
            options: [
                "To try multiple resources",
                "To automatically close resources after use",
                "To allocate resources",
                "To handle exceptions"
            ],
            correct: 1
        },
        {
            question: "What is method reference in Java 8?",
            options: [
                "A way to refer to methods",
                "A shorthand notation to call methods",
                "A reference to variable",
                "A type of pointer"
            ],
            correct: 1
        },
        {
            question: "What is the purpose of the Stream API?",
            options: [
                "To read files",
                "To process collections of objects",
                "To stream videos",
                "To handle input/output"
            ],
            correct: 1
        }
    ],
    4: [
        {
            question: "What is the purpose of Java's reflection API?",
            options: [
                "To create mirrors",
                "To examine classes at runtime",
                "To reflect errors",
                "To handle graphics"
            ],
            correct: 1
        },
        {
            question: "What is a CompletableFuture in Java?",
            options: [
                "A type of loop",
                "An asynchronous computation builder",
                "A complete class",
                "A future date"
            ],
            correct: 1
        },
        {
            question: "What is the purpose of the ForkJoinPool?",
            options: [
                "To split arrays",
                "To manage parallel tasks efficiently",
                "To join threads",
                "To fork processes"
            ],
            correct: 1
        },
        {
            question: "What is the difference between Callable and Runnable?",
            options: [
                "Callable can return values and throw exceptions",
                "Runnable is faster",
                "Callable is deprecated",
                "There is no difference"
            ],
            correct: 0
        },
        {
            question: "What is the purpose of weak references in Java?",
            options: [
                "To create weak variables",
                "To help garbage collection",
                "To make references slower",
                "To save memory"
            ],
            correct: 1
        },
        {
            question: "What is bytecode instrumentation?",
            options: [
                "Creating music",
                "Modifying bytecode at runtime",
                "Compiling code",
                "Testing code"
            ],
            correct: 1
        },
        {
            question: "What is the purpose of the @FunctionalInterface annotation?",
            options: [
                "To mark interface as functional",
                "To improve performance",
                "To add functionality",
                "To create functions"
            ],
            correct: 0
        },
        {
            question: "What is the Java Memory Model?",
            options: [
                "A type of memory",
                "Specification for memory management",
                "Memory size",
                "RAM allocation"
            ],
            correct: 1
        },
        {
            question: "What is the purpose of the Optional class?",
            options: [
                "To make things optional",
                "To handle null values elegantly",
                "To create options",
                "To improve performance"
            ],
            correct: 1
        },
        {
            question: "What are Java agents?",
            options: [
                "Java programs",
                "Programs that can modify class files",
                "Security agents",
                "Testing tools"
            ],
            correct: 1
        }
    ]
};

// Add this function to randomly select questions
function getRandomQuestions(level, count) {
    const questions = quizData[level];
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

let currentLevel = 1;
let currentQuestion = 0;
let score = 0;
let selectedOption = null;
let currentQuestions = [];
let unlockedLevels = [1]; // Start with only level 1 unlocked
let completedLevels = [];
let currentQuizInProgress = false;

function startQuiz() {
    showHub();
}

function loadQuestion() {
    const question = currentQuestions[currentQuestion];
    document.getElementById('current-level').textContent = currentLevel;
    document.getElementById('current-question').textContent = currentQuestion + 1;
    document.getElementById('question-text').textContent = question.question;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionElement);
    });
    
    if (userAnswers[currentQuestion] !== undefined) {
        const options = document.querySelectorAll('.option');
        options[userAnswers[currentQuestion]].classList.add('selected');
        document.getElementById('next-btn').disabled = false;
    } else {
        document.getElementById('next-btn').disabled = true;
    }
    
    document.getElementById('prev-btn').disabled = currentQuestion === 0;
    const nextBtn = document.getElementById('next-btn');
    nextBtn.textContent = currentQuestion === 9 ? 'Finish Quiz' : 'Next';
}

function selectOption(index) {
    if (selectedOption !== null) return;
    
    const options = document.querySelectorAll('.option');
    const question = currentQuestions[currentQuestion];
    
    // Store user's answer
    userAnswers[currentQuestion] = index;
    
    // Show correct/wrong for selected option
    if (index === question.correct) {
        options[index].classList.add('correct');
    } else {
        options[index].classList.add('wrong');
        options[question.correct].classList.add('correct');
    }
    
    selectedOption = index;
    document.getElementById('next-btn').disabled = false;
    
    // Disable all options after selection
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });
}

function nextQuestion() {
    if (currentQuestion < 9) {
        selectedOption = null;
        currentQuestion++;
        loadQuestion();
    } else {
        // Calculate final score based on stored answers
        score = userAnswers.reduce((total, answer, index) => {
            return total + (answer === currentQuestions[index].correct ? 1 : 0);
        }, 0);
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('score').textContent = score;
    currentQuizInProgress = false;
    
    const resultMessage = document.getElementById('result-message');
    const continueBtn = document.getElementById('continue-btn');

    if (score >= 6) {
        if (!completedLevels.includes(currentLevel)) {
            completedLevels.push(currentLevel);
        }
        
        if (currentLevel === 4) {
            resultMessage.textContent = "🎉 Congratulations! You've completed all levels!";
        } else {
            resultMessage.textContent = "🌟 Well done! Next level unlocked!";
        }
        continueBtn.textContent = "Back to Hub";
    } else {
        resultMessage.textContent = `📝 You need at least 6 correct answers to proceed. You got ${score}/10. Try again!`;
        continueBtn.textContent = "Try Again";
    }
}

function handleContinue() {
    if (score >= 6) {
        showHub();
    } else {
        // Reset for retry
        currentQuestion = 0;
        score = 0;
        selectedOption = null;
        currentQuestions = getRandomQuestions(currentLevel, 10);
        document.getElementById('result-screen').classList.add('hidden');
        document.getElementById('quiz-screen').classList.remove('hidden');
        loadQuestion();
    }
}

function showHub() {
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('hub-screen').classList.remove('hidden');
    
    updateHubDisplay();
}

function updateHubDisplay() {
    const levelCards = document.querySelectorAll('.level-card');
    levelCards.forEach((card, index) => {
        const level = index + 1;
        card.className = 'level-card';
        
        if (completedLevels.includes(level)) {
            card.classList.add('available');
            card.setAttribute('data-tooltip', 'Level Completed!');
        } else if (level === 1 || completedLevels.includes(level - 1)) {
            card.classList.add('unlocked');
            card.setAttribute('data-tooltip', 'Ready to begin!');
        } else {
            card.classList.add('locked');
            card.setAttribute('data-tooltip', 'Complete previous level first!');
        }

        // Update status text
        const statusElement = card.querySelector('.level-status');
        if (completedLevels.includes(level)) {
            statusElement.textContent = 'Completed';
        } else if (level === 1 || completedLevels.includes(level - 1)) {
            statusElement.textContent = 'Available';
        } else {
            statusElement.textContent = 'Locked';
        }
    });
}

function selectLevel(level) {
    if (level === 1 || completedLevels.includes(level - 1)) {
        currentLevel = level;
        currentQuestion = 0;
        score = 0;
        selectedOption = null;
        userAnswers = [];
        currentQuestions = getRandomQuestions(currentLevel, 10);
        currentQuizInProgress = true;
        document.getElementById('hub-screen').classList.add('hidden');
        document.getElementById('quiz-screen').classList.remove('hidden');
        loadQuestion();
    } else {
        alert('Complete the previous level first!');
    }
}

function confirmReturn() {
    if (currentQuizInProgress) {
        if (confirm('Are you sure you want to return to the hub? Your progress in this quiz will be lost.')) {
            returnToHub();
        }
    } else {
        returnToHub();
    }
}

function returnToHub() {
    // Reset quiz state
    currentQuestion = 0;
    score = 0;
    selectedOption = null;
    userAnswers = [];
    currentQuizInProgress = false;
    
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.add('hidden'));
    
    // Show hub screen
    document.getElementById('hub-screen').classList.remove('hidden');
    
    // Update hub display
    updateHubDisplay();
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedOption = null;
    userAnswers = [];
    currentQuestions = getRandomQuestions(currentLevel, 10);
    loadQuestion();
}

const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }

    #back-to-hub {
        background: transparent;
        color: #667eea;
        padding: 8px 15px;
        border: 2px solid #667eea;
        border-radius: 20px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    #back-to-hub:hover {
        background: #667eea;
        color: white;
    }
`;
document.head.appendChild(style);
