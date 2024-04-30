import { sendError, sendResponse } from "../../utility/index.js";
import userModel from "../models/user.js"
import channelModel from "../models/channel.js"

class Controller{
    async createUser(req,res){
        const user = new userModel(req.body);

        try {
            await user.save();
        sendResponse(res,user,"User created successfully",true,201); 
        } catch (error) {
            return sendError(res, error.errmsg, "");
        }
    }

    async loginUser(req,res){
        const {phoneNumber, password} = req.body;
        
        const isExist = await userModel.findOne({phoneNumber, password});

        if(!isExist){
            return sendError(res, {}, "Invalid credentials");
        }

        sendResponse(res,isExist,"User logged in successfully",true,200)
    }

    async createChannel(req,res){
        const channel = new channelModel(req.body);

        try {
            await channel.save();
            sendResponse(res,channel,"Channel created successfully",true,200);  
        } catch (error) {
            return sendError(res, error.errmsg, "");
        }
        
    }

    async sendMessage(req,res){
        const {channelId , messages} = req.body;
        try {
          const channel =  await channelModel.findOneAndUpdateData(
                { _id: channelId },
                { $push: { messages } },
            );
            sendResponse(res, channel, "Message sent successfully", true, 200); 
        } catch (error) {
            return sendError(res, error.errmsg, "");
        }
        
    }

    async searchUser(req,res){
        const isExist = await userModel.findOne({
            phoneNumber: req.query.phoneNumber,
        });


        if (!isExist) return sendError(res, {}, "No user found!");
        
        sendResponse(res, isExist, "User found successfully", true, 200);
    }

    async getChannelList(req,res){
        const channelList = await channelModel.findData({
          "channelUsers.phoneNumber": req.query.phone,
        });

        sendResponse(res, channelList, "Channel list fetched", true, 200);
    }
}

export default new Controller();