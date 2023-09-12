function init() {
    let state = 0;

    const increment = () => {   // <----- CLOSURE
        state +=1;
        return state;
    }

    const decrement = () => {
        state -=1
        return state;
    }

    increment();
    increment();
    increment();
    decrement();

    console.log(`State: ${state}`);
}

init();