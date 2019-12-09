export const randomFirstName = () => {
    return (
        Math.random()
            .toString(36)
            .substr(2,7) 
    );
}

export const randomLastName = () => {
    return (
        Math.random()
            .toString(36)
            .substr(2,7) 
    );
}