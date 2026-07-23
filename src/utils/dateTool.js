
const DateTool = {
    getDate: (dateStr) => {
        const d = new Date(dateStr);

        return `${d.getMonth()+1}-${d.getDate()}-${d.getFullYear()}`;
    },
    getDateDefault: (dateStr) => {
        const d = new Date(dateStr);

        return `${d.getFullYear()}-${d.getMonth()+1 < 9 ? '0' + (d.getMonth()+1).toString() : d.getMonth()+1}-${d.getDate() < 9? '0'+d.getDate().toString() : d.getDate()}`;
    },
    convert: (dateStr) => {
        const d = new Date(dateStr);
        
        return d;
    },
};


export default DateTool;