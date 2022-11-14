import studentModel from "../models/studentmodel.js";

class StudentController {
    static createDoc = async (req, res) => {
        // console.log(req.body.name);
        // res.redirect("/student");
        try {
            const { name, age, fees } = req.body;
            const doc = new studentModel({
                name: name,
                age: age,
                fees: fees
            });
            await studentModel.insertMany(doc);
            // await doc.save();
            res.redirect('/student');
        } catch (error) {
            console.log(`Error:- ${error}.`);
            res.end(`<h1 style="background: blue;color: red"> Error:- ${error}.<br> <br> Age validation Minimum 18 and maximum 60. and fees must be greater than 5000.50</h1>`);
        }
    }

    static getAllDoc = async (req, res) => {
        try {
            const result = await studentModel.find();
            // const result = [
            //     {
            //       _id: ("62f355a5857622584aaea198"),
            //       name: 'Sonam',
            //       age: 34,
            //       fees: ("6000")
            //     } 
            //   ];
            // console.log(result);
            res.render("index", { result });
        } catch (error) {
            console.log(`Error:- ${error}`)
            res.end(`<h1 style="background: black;color: red"> Error:- ${error}. </h1>`);
        }
    }

    static editDoc = async (req, res) => {
        // const id = req.params.id;
        try {
            const result = await studentModel.findById(req.params.id);
            res.render("edit", { result });
        }
        catch (error) {
            console.log(`<h1> Not Found </h1>`);
            res.end(`<h1 style="background: black;color: red"> Error:- ${error}. </h1>`);
        }
    }

    static updateDocById = async (req, res) => {
        // const data = req.body;
        // console.log('a', data);
        try {
            const result = await studentModel.findByIdAndUpdate(req.params.id, req.body);
            res.redirect('/student');
        } catch (error) {
            console.log(`error`);
            res.end(error);
        }
        // const result = await studentModel.findByIdAndUpdate(req.params.id, data);
        // console.log('b', result);
        // res.redirect("/student");
    }

    static deleteDocById = async (req, res) => {
        try {
            console.log(req.params.id);
            await studentModel.findByIdAndDelete(req.params.id);
            res.redirect('/student')
        } catch (error) {
            console.log(`Error`);
            res.end(`<h1 style="background: black;color: red"> Error:- ${error}. </h1>`);
        }
        // res.redirect("/student");
    }
}

export default StudentController;