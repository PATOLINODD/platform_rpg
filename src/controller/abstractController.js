module.exports = class AbstractController {
	constructor(db){
		this.db = db;
		this.msg = {
			code: 500,
			error: true,
			result: "",
			msg: "Internal erro. Try again later"
		}
	}
	
	save = async (body) => {
		try{
			const model = await this.db.create(body);
			if(model instanceof this.db) {
				this.msg.code = 200;
				this.msg.error = false;
				this.msg.result = "success";
				this.msg.msg = "Model was created successfully";
				return this.msg;
			}
			this.msg.code = 400;
			this.msg.result = "error";
			this.msg.msg = "Model was not created";
		} catch(error) {
			this.msg.result = error;
		}
		return this.msg;
	}
	list = async () => {
		try {
			const models = await this.db.findAll();
			if(models.length > 0){
				this.msg.code = 200;
				this.msg.error = false;
				this.msg.result = models;
				this.msg.msg = "All models listed";
				return this.msg;
			}
			this.msg.code = 400;
			this.msg.result = "error";
			this.msg.msg = "Nothing to list. The database is empty";
		}catch(error){
			this.msg.result = error;
		}
		return this.msg;
	}
	getByID = async (id) => {
		try {
			const model = await this.db.findByPk(id);
			if(model instanceof this.db){
				this.msg.code = 200;
				this.msg.error = false;
				this.msg.result = model;
				this.msg.msg = "Success to get model";
				return this.msg;
			}
			this.msg.code = 400;
			this.msg.result = "error";
			this.msg.msg = "Nothing to get. Verify the data and try again";
		}catch(error){
			this.msg.result = error;
		}
		return this.msg;
	}
	updateByID = async (body, id) => {
		try {
			const model = await this.db.update(body, {
				where: { id: id }
			});
			console.log(`model result of update: `, model);
			if(model !== null){
				this.msg.code = 200;
				this.msg.error = false;
				this.msg.result = "success";
				this.msg.msg = "Update successfully";
				return this.msg;
			}
			this.msg.code = 400;
			this.msg.result = "error";
			this.msg.msg = "It didn't update successfully";
		}catch(error){
			this.msg.result = error;
		}
		return this.msg;
	}
	
	delete = async (id) => {
		try {
			const model = await this.db.destroy({
				where: {id}
			});
			if(model !== null){
				this.msg.code = 200;
				this.msg.error = false;
				this.msg.result = "success";
				this.msg.msg = "Update successfully";
				return this.msg;
			}
			this.msg.code = 400;
			this.msg.result = "error";
			this.msg.msg = "It didn't update successfully";
		} catch(error){
			this.msg.result = error;
		}
		return this.msg;
	}
	
}