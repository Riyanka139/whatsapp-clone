import { Schema, model } from "mongoose";

const channelSchema = new Schema({
    channelUsers: [{
        phoneNumber: {type: String},
        name: {type: String, default: ""},
        profilePic: {type: String, default: ""}
    }],
    messages: [{
        sender: {type: String, default: ""},
        messageType: {type: String, default: ""},
        text: {type: String, default: ""}
    }],
    addedOn: {type: Number, default: Date.now()}
});

channelSchema.method({
    saveData: function(){
        this.save()
    }
});

channelSchema.static({
    findData: function (findObj){
        return this.find(findObj)
    },
    findOneData: function(findObj){
        return this.findOne(findObj)
    },
    findOneAndUpdateData: function(findObj, updateObj){
        return this.findOneAndUpdate(findObj, updateObj,{
            upsert: true,
            new: true,
            setDefaultsOnInsert: true
        })
    }
});

export default model('channel',channelSchema);