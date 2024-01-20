const AbstractController = require("./abstractController.js");
const { Characters } = require("../model");

class CharacterController extends AbstractController {
	constructor(db){
		super(db);
	}
	
	saveCharacter = async (req, res) => {
		try {
			const msg = await this.save(req.body);
			if(!msg.error){
				res.json(msg);
			}
			res.json(msg);
		} catch(error) {
			res.status(500).json(this.msg);
		}
	}
	listCharacters = async (req, res) => {
		try {
			const msg = await this.list();
			if(!msg.error){
				res.json(msg);
			}
			res.json(msg);
		} catch(error) {
			res.status(500).json(this.msg);
		}
	}
	getCharacterByID = async (req, res) => {
		try {
			const msg = await this.getByID();
			if(msg.error){
				res.json(msg);
			}
		} catch(error) {
			res.status(500).json(this.msg);
		}
	}
	updateCharacterByID = async (req, res) => {
		try {
			const id = 1;
			const msg = await this.updateByID(req.body, id);
			if(msg.error){
				res.json(msg);
			}
		} catch(error) {
			res.status(500).json(this.msg);
		}
	}
}

module.exports = new CharacterController(Characters);