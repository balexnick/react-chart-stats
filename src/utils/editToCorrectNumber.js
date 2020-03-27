export const editToCorrectNumber = (num) => {
    return String(num).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')
}