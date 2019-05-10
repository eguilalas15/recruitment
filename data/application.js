const mongoCollections = require("./collection");
const application= mongoCollections.application;
const { ObjectId } = require('mongodb');

module.exports ={
    
    async createApplication(userId,jobId,jobName)
    {
        console.log("hi")
        console.log(userId)
        //console.log(jobId)
        if(!userId){
            throw "Error: no user id was provided";
        }
        if(!jobId){
            throw "Error: no job id was provided";
        }
        if(!jobName){
            throw "Error: no job name was provided";
        }

        var applicationTime = new Date().toUTCString();
        var applicationStatus = "Pending"
        const newApplication = await application();
        let applicationObject = {
            userId,
            jobId,
            applicationTime,
            jobName,
            applicationStatus

        };
        const insert = await newApplication.insertOne(applicationObject);
        if(insert.insertedCount === 0){
            throw "Could not add person";
        }
        const newId = insert.insertedId;
        return await this.get(newId);

    },
    async get(targetUserId){
        //given id, return the animal from the database
        //come, this is not animal. ok?
        if(!targetUserId){
            throw "Error: no id was provided";
        }
        const newApplication = await application();


        // //From here, I will convert the incoming string ID to the object; discard
        // var targetUserId = ObjectId.createFromHexString(id);


        //change the findOne function to find.toArray, because we need all the application
        const findApplication = await newApplication.find({userId: targetUserId}).toArray();
        // if(findPerson === null){
        //     throw "No person with that id";
        // }
        return findApplication;
    },

    async getALl(){
        const allApplication = await newApplication.find({}).toArray();
        return allApplication;
    },


    //I have not tested this function; 
    async setApplicationStatus(applicationID, newStatus){
        const updateResult = await newApplication.updateOne({_id: applicationID }, {$set: {applicationStatus:newStatus}});

        if (updateResult.modifiedCount === 0) {
            let errorMessage = `Error: update application: (${id}) with new animalType (${newType}) fail!`;
            throw errorMessage;
        }

        const result = await newApplication.findOne({_id: applicationID});
        if (result === null) {
            let errorMessage = `Error: there is not application with ID ${id} in the collection, when we try to find updated information!`;
            throw errorMessage;
        }

        return result;
    },
    
    async getApplicationByID(applicationID){

        if(!applicationID){
            throw "Error: no id was provided";
        }
        const newApplication = await application();


        // //From here, I will convert the incoming string ID to the object; discard
        // var targetUserId = ObjectId.createFromHexString(id);

        var targetObjectID = ObjectId.createFromHexString(applicationID);
        //change the findOne function to find.toArray, because we need all the application
        const findApplication = await newApplication.findOne({_id: targetObjectID})
        // if(findPerson === null){
        //     throw "No person with that id";
        // }
        return findApplication;

    }

}