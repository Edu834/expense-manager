export class ExpenseEntry {
    constructor(
        public id: number,
        public item: String,
        public amount: number,
        public category: String,
        public location: String,
        public spendOn: Date,
        public createdOn: Date
    ){}
    
}
