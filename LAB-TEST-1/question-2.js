const resolvedPromise = () => {
    setTimeout(()=>{
        let success = {'message': 'Promise resolved'}
        console.log(success);
    }, 500)
}

const rejectedPromise = () => {
    setTimeout (() => {
        try {
            throw new Error ('error: Promise rejected');
        } catch(e){
            console.error(e);
        }
    }, 500)
}

resolvedPromise()
rejectedPromise()