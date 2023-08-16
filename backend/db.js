const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://piyush0329:Piyush0329@cluster0.n3yfdoz.mongodb.net/gofood?retryWrites=true&w=majority'
const mongoDB = async () => {

    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');

        const collection = mongoose.connection.collection("food_items");
        const fetched_data = await collection.find({}).toArray();
        
        
        const food_category = mongoose.connection.collection("food_category");
        const foodCategoryData = await food_category.find({}).toArray();
        
        
        //console.log(foodCategoryData);

        global.food_items = fetched_data;
        global.FoodCategory = foodCategoryData;
        
        // return { food_items: fetched_data, FoodCatagory: foodCategoryData };
        
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw err; 
    }

}

module.exports = mongoDB;



