import * as yup from "yup";
import { sendError } from "./index.js";

class Validation{
    async createUser(req, res, next){
      const schema = yup.object().shape({
          name: yup.string().required(),
          phoneNumber: yup.string().required().length(10),
          password: yup.string().required(),
          profilePic: yup.string(),
      });

      await validate(schema, req.body, res, next);
    }

    async login(req, res, next){
      const schema = yup.object().shape({
          phoneNumber: yup.string().required().length(10),
          password: yup.string().required()
      });

      await validate(schema, req.body, res, next);
    }

    async createChannel(req, res, next){
     const schema = yup.object().shape({
          channelUsers: yup
            .array()
            .of(
              yup.object().shape({
                phoneNumber: yup.string().required().length(10),
                name: yup.string().required(),
                profilePic: yup.string(),
              }),
            ).length(2)
            .required(),
      });
      await validate(schema, req.body, res, next);
    }

    async searchUser(req,res,next){
      const schema = yup.object().shape({
          phoneNumber: yup.string().required().length(10),
      });
      
      await validate(schema, req.query, res, next);
    }

    async getChannelList(req, res, next){
      const schema = yup.object().shape({
        phone: yup.string().required()
      });
      await validate(schema, req.query, res, next);
    }

    async validateAddMessage (req, res, next) {
        const schema = yup.object().shape({
          channelId: yup.string().required(),
          messages: yup.object().shape({
            senderPhone: yup.string().required().length(10),
            text: yup.string().required(),
          }),
        });
        await validate(schema, req.body, res, next);
    }
}

const validate = async (schema, reqData, res, next) => {
    try {
      await schema.validate(reqData, { abortEarly: false });
      next();
    } catch (e) {
      const errors = e.inner.map(({ path, message, value }) => ({
        path,
        message,
        value,
      }));
      sendError(res, errors, "Invalid Request");
    }
};

export default new Validation();