class ApiFeatures {
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr;
        this.executed = false;
    }

    search(){
        const keyword = this.queryStr.keyword ? {
            name:{
                $regex: new RegExp(this.queryStr.keyword, "i"),
            },
        }: {};
        
        
    
        this.query = this.query.find({...keyword});
        return this;
    }

    filter(){
        const queryCopy = {...this.queryStr};
        //remove some fields foe category
        const removeFields = ["keyword","page","limit"];
        removeFields.forEach(key=>delete queryCopy[key]);
        //filter price and rating

        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
        this.query = this.query.find(JSON.parse(queryStr));
        return this;
        
    }

    pagination(resultPerPage){
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resultPerPage* (currentPage-1);
        this.query = this.query.limit(resultPerPage).skip(skip);
        this.executed = true;
        return this;
    }
};

module.exports = ApiFeatures;